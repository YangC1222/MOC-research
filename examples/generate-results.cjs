'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'demo/index.html'),'utf8');
const code=html.match(/<script id="moc-engine">([\s\S]*?)<\/script>/)[1];
const context={};vm.createContext(context);vm.runInContext(code+'\nglobalThis.engine=MOC;',context);
const M=context.engine;
const oneCell={cells:1,length:1,sigma:1,ratio:.5,source:2,mu:1};
const manyCells={cells:20,length:4,sigma:1,ratio:.5,source:2,mu:1/Math.sqrt(3)};
function slabRecord(options){
 const r=M.solveSlab(options,1e-8);
 return{options,stopping_rule:'max(abs(phi_new-phi_old))/max(phi_new) < 1e-8',converged:r.converged,iterations:r.iterations,average:r.average,cell_average_flux:r.phi,produced:r.produced,absorbed:r.absorbed,leaked:r.leaked,relative_balance:r.balance,
  history:r.history.map(h=>({iteration:h.iteration,average:h.average,relative_change:h.residual,absorbed:h.absorbed,leaked:h.leaked,relative_balance:h.balance}))};
}
const layerParameters=[{name:'慢化剂A',thickness:1,sigma:.2,source:0},{name:'燃料',thickness:1,sigma:1,source:2},{name:'慢化剂B',thickness:1,sigma:.2,source:0}];
const result={
 schema_version:1,generated_date:'2026-10-10',
 description:'简化教学数据。由演示页面中的同一数学内核生成，非反应堆工程数据或公开基准复现。',
 numerical_engine_sha256:crypto.createHash('sha256').update(code).digest('hex'),
 conventions:{length:'cm',macroscopic_cross_sections:'cm^-1',single_and_layers_flux:'angular flux psi in consistent teaching units',single_and_layers_source:'angular source q in flux/cm',slab_flux:'phi = f_plus + f_minus; f = 2*pi*psi; two direction weights 1 each',slab_source:'S is angle-integrated isotropic external volume source',slab_boundary:'vacuum at both ends; no fission'},
 single_segments:[{name:'只有衰减',input:10,sigma:.5,source:0,length:2},{name:'只有段内源',input:0,sigma:1,source:2,length:1},{name:'透明段',input:3,sigma:0,source:2,length:2}].map(o=>({...o,...M.segment(o.input,o.sigma,o.source,o.length)})),
 layers:{input:10,parameters:layerParameters,normal:M.layers(10,layerParameters,0),oblique60Degrees:M.layers(10,layerParameters,60)},
 track_area_integral:[13,33,65].map(count=>{const g=M.tracks(count,30,.55);return{count,azimuth_degrees:30,radius:.55,width:g.width,true_area:g.trueArea,estimated_area:g.estimatedArea,relative_error:g.estimatedArea/g.trueArea-1,tracks_hitting_fuel:g.list.filter(t=>t.fuelLength>0).length};}),
 slab_one_cell:slabRecord(oneCell),slab_twenty_cells:slabRecord(manyCells)
};
fs.writeFileSync(path.join(__dirname,'teaching-results.json'),JSON.stringify(result,null,2)+'\n');
console.log('Saved examples/teaching-results.json');
