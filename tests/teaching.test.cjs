'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const html=fs.readFileSync(path.join(__dirname,'../demo/index.html'),'utf8');
const code=html.match(/<script id="moc-engine">([\s\S]*?)<\/script>/)[1];
const context={};vm.createContext(context);vm.runInContext(code+'\nglobalThis.engine=MOC;',context);
const M=context.engine;
function near(actual,expected,tol=1e-10){assert.ok(Math.abs(actual-expected)<=tol*Math.max(1,Math.abs(expected)),`${actual} != ${expected}`);}

test('single segment: analytic absorption, constant source and equilibrium',()=>{
 const a=M.segment(10,.5,0,2);near(a.out,10/Math.E);near(a.avg,10*(1-1/Math.E));
 const b=M.segment(0,1,2,1);near(b.out,2*(1-1/Math.E));near(b.avg,2/Math.E);
 const c=M.segment(4,.5,2,3);near(c.out,4);near(c.avg,4);
});
test('transparent, zero-length and thin segments retain finite analytic limits',()=>{
 const zero=M.segment(3,0,2,2);near(zero.out,7);near(zero.avg,5);
 const noLength=M.segment(3,1,2,0);near(noLength.out,3);near(noLength.avg,3);
 const thin=M.segment(0,1e-12,2,1);near(thin.out,2,1e-12);near(thin.avg,1,1e-12);
 assert.throws(()=>M.segment(1,-1,0,1));assert.throws(()=>M.segment(1,NaN,0,1));
});
test('segment conservation and invariance under splitting a constant material',()=>{
 for(const sigma of [0,1e-10,.2,2,30]){
  const a=M.segment(3,sigma,2,1.8),b=M.segment(3,sigma,2,.7),c=M.segment(b.out,sigma,2,1.1);
  near(c.out,a.out);near((b.avg*.7+c.avg*1.1)/1.8,a.avg);
  near(a.out-3+sigma*a.avg*1.8,2*1.8);
 }
});
test('layer interfaces connect and oblique rays use the longer real distance',()=>{
 const data=[{thickness:1,sigma:.2,source:0},{thickness:1,sigma:1,source:2},{thickness:1,sigma:.2,source:0}];
 const a=M.layers(10,data,0),b=M.layers(10,data,60);
 near(a[1].input,a[0].out);near(a[2].input,a[1].out);
 near(b[0].length,2);near(a[2].out,(10*Math.exp(-1.2)+2*(1-Math.exp(-1)))*Math.exp(-.2));
});
test('track geometry: analytic center chord, square bounds, partition and rotation',()=>{
 const a=M.tracks(13,0,.55),b=M.tracks(13,90,.55);
 near(a.list[6].fuelLength,1.1);near(a.estimatedArea,b.estimatedArea);
 for(const angle of [0,30,45,90,170])for(const r of [.15,.55,.8]){
  const g=M.tracks(65,angle,r);
  for(const t of g.list){
   for(const p of [t.start,t.end])assert.ok(p.every(v=>Math.abs(v)<=1+1e-10));
   near(t.segments.reduce((sum,s)=>sum+s.length,0),Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]));
   for(const s of t.segments.filter(s=>s.fuel))near(Math.hypot(...s.start),r,1e-9);
  }
 }
 const fine=M.tracks(501,30,.55);assert.ok(Math.abs(fine.estimatedArea/fine.trueArea-1)<.001);
});

// Independent reference: simultaneous equations for two directional interface
// fluxes and all cell averages, solved directly. No source iteration is used.
function directReference(o){
 const n=o.cells,size=3*n+2,A=Array.from({length:size},()=>Array(size+1).fill(0));
 const plus=j=>j,minus=j=>n+1+j,phi=i=>2*(n+1)+i;
 const tau=o.sigma*o.length/(n*o.mu),r=Math.exp(-tau),E=(1-r)/tau,a=(1-r)/(2*o.sigma),ss=o.ratio*o.sigma;
 let row=0;A[row++][plus(0)]=1;A[row++][minus(n)]=1;
 for(let i=0;i<n;i++){
  A[row][plus(i+1)]=1;A[row][plus(i)]=-r;A[row][phi(i)]=-a*ss;A[row++][size]=a*o.source;
  A[row][minus(i)]=1;A[row][minus(i+1)]=-r;A[row][phi(i)]=-a*ss;A[row++][size]=a*o.source;
  A[row][phi(i)]=1-o.ratio*(1-E);A[row][plus(i)]=-E;A[row][minus(i+1)]=-E;A[row++][size]=o.source/o.sigma*(1-E);
 }
 for(let k=0;k<size;k++){
  let pivot=k;for(let i=k+1;i<size;i++)if(Math.abs(A[i][k])>Math.abs(A[pivot][k]))pivot=i;
  [A[k],A[pivot]]=[A[pivot],A[k]];assert.ok(Math.abs(A[k][k])>1e-12);
  const d=A[k][k];for(let j=k;j<=size;j++)A[k][j]/=d;
  for(let i=0;i<size;i++)if(i!==k){const factor=A[i][k];for(let j=k;j<=size;j++)A[i][j]-=factor*A[k][j];}
 }
 return Array.from({length:n},(_,i)=>A[phi(i)][size]);
}
test('two-stream source iteration agrees with a directly solved independent linear system',()=>{
 for(const cells of [1,8,20])for(const ratio of [0,.5,.95])for(const mu of [1,1/Math.sqrt(3)]){
  const o={cells,ratio,mu,length:3,sigma:1.2,source:2},answer=M.solveSlab(o,1e-12),ref=directReference(o);
  assert.ok(answer.converged);answer.phi.forEach((v,i)=>near(v,ref[i],5e-11));
  near(answer.balance,0,5e-11);assert.ok(answer.phi.every(v=>v>=0));
  answer.phi.forEach((v,i)=>near(v,answer.phi[cells-1-i]));
 }
});
test('zero scattering agrees with integrated analytic vacuum-slab solution',()=>{
 const o={cells:12,ratio:0,mu:1/Math.sqrt(3),length:4,sigma:.8,source:2};
 const r=M.solveSlab(o),dx=o.length/o.cells;
 r.phi.forEach((v,i)=>{
  const a=i*dx,b=(i+1)*dx,k=o.sigma/o.mu;
  const avgExpLeft=(Math.exp(-k*a)-Math.exp(-k*b))/(k*dx);
  const avgExpRight=(Math.exp(-k*(o.length-b))-Math.exp(-k*(o.length-a)))/(k*dx);
  near(v,o.source/(2*o.sigma)*(2-avgExpLeft-avgExpRight));
 });
 near(r.absorbed+r.leaked,r.produced);
});
test('iteration balance accounts for the lagged scatter source before convergence',()=>{
 const o={cells:20,ratio:.9,mu:1/Math.sqrt(3),length:5,sigma:1,source:2};
 let old=Array(o.cells).fill(0);
 for(let i=0;i<10;i++){
  const r=M.slabStep(old,o),integralOld=old.reduce((a,b)=>a+b,0)*r.dx,integralNew=r.phi.reduce((a,b)=>a+b,0)*r.dx;
  near(r.produced-r.absorbed-r.leaked,o.sigma*o.ratio*(integralNew-integralOld));
  old=r.phi;
 }
});
test('one-cell hand calculation matches the geometric recurrence and reports nonconvergence',()=>{
 const o={cells:1,ratio:.5,mu:1,length:1,sigma:1,source:2};
 const r=M.solveSlab(o,1e-8),K=1/Math.E;
 near(r.history[0].average,2*K);near(r.average,2*K/(1-.5*K),1e-8);
 const short=M.solveSlab(o,1e-14,1);assert.equal(short.converged,false);
 assert.throws(()=>M.slabStep([0],{...o,ratio:1}));
});

if(process.env.MOC_EXAMPLES==='1'){
 const layer=M.layers(10,[{thickness:1,sigma:.2,source:0},{thickness:1,sigma:1,source:2},{thickness:1,sigma:.2,source:0}],0);
 const o={cells:1,ratio:.5,mu:1,length:1,sigma:1,source:2};
 const r=M.solveSlab(o,1e-8),profile=M.solveSlab({...o,cells:20,mu:1/Math.sqrt(3),length:4},1e-8);
 console.log(JSON.stringify({layers:layer,oneCell:{iterations:r.iterations,phi:r.average,history:r.history.slice(0,5).map(h=>({iteration:h.iteration,phi:h.average,residual:h.residual,absorbed:h.absorbed,leaked:h.leaked,balance:h.balance}))},twentyCells:{iterations:profile.iterations,average:profile.average,edge:profile.phi[0],center:profile.phi[9],absorbed:profile.absorbed,leaked:profile.leaked,balance:profile.balance}},null,2));
}
