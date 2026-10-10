# 术语与符号速查

使用场景：读 [MOC 初版调研](01-moc-survey.md) 或 [算法与验证路线](02-algorithm-and-validation.md) 时快速查阅。以下是常见约定；不同文献的角度权重和通量归一化可能不同，应以原文定义为准。

## 常用术语

| 中文 | 英文或缩写 | 含义 |
|---|---|---|
| 特征线法 | Method of Characteristics, MOC | 沿指定方向的直线积分输运方程，再完成空间和角度积分 |
| 角通量 | Angular flux | 同时依赖位置、运动方向和能量的通量 |
| 标量通量 | Scalar flux | 对角通量在全部方向积分后的量 |
| 宏观截面 | Macroscopic cross section | 单位长度的相互作用强度，常用单位 cm⁻¹ |
| 光学厚度 | Optical thickness | 路径上总宏观截面的积分；均匀材料中为总截面乘实际路径长度 |
| 能群 | Energy group | 将连续能量划分为有限区间后的一个区间 |
| 平源区 | Flat source region, FSR | 源和材料参数采用区域内常量近似的区域，区域内部角通量仍会变化 |
| 线性源 | Linear source, LS | 用空间线性变化近似源，而不是每区一个常数 |
| 轨迹 / 特征线 | Track / characteristic | 用于沿线求解和数值积分的路径 |
| 轨迹段 | Segment | 一条轨迹在某个材料或源区内的部分 |
| 射线追踪 | Ray tracing | 求路径与几何表面的交点，并得到各段所在区域与长度 |
| 输运扫描 | Transport sweep | 按给定源沿所有选定轨迹求解并累积通量 |
| 源迭代 | Source iteration | 由旧通量得到源，再由源求新通量，重复至收敛 |
| 固定源问题 | Fixed-source problem | 外源已指定的输运问题；散射源仍可能需要迭代 |
| 特征值问题 | Eigenvalue problem | 同时求通量形状与有效增殖因子等特征值的问题 |
| 粗网有限差分 | Coarse Mesh Finite Difference, CMFD | 用粗网低阶问题帮助细网输运解收敛的常用方法 |
| 2D/1D 方法 | 2D/1D method | 径向二维输运与轴向一维或低阶方程通过泄漏等量耦合 |
| 即时追踪 | On-the-fly ray tracing | 在计算时生成必要轨迹段，以减少预存数据；具体几何适用范围需查原文 |
| 随机射线法 | Random Ray Method, TRRM | 通过随机抽样特征轨迹求解输运的相关方法，区别于固定角度及轨迹的常规 MOC |
| 反应率 | Reaction rate | 截面与通量相乘并按空间、能量积分得到的反应数量率 |

## 常见符号

| 符号 | 含义 | 常见单位或说明 |
|---|---|---|
| $\mathbf r$ | 位置 | cm |
| $\boldsymbol\Omega$ | 单位运动方向 | 无量纲 |
| $s,L$ | 实际飞行距离、段长度 | cm；二维平面投影长度需要角度换算 |
| $g$ | 能群编号 | 离散索引 |
| $\psi_g$ | 群角通量 | neutrons·cm⁻²·s⁻¹·sr⁻¹ |
| $\phi_g$ | 群标量通量 | neutrons·cm⁻²·s⁻¹ |
| $\Sigma_{t,g}$ | 总宏观截面 | cm⁻¹ |
| $\Sigma_{s,g'\to g}$ | 从群 $g'$ 散射到群 $g$ 的宏观截面 | cm⁻¹ |
| $\Sigma_{f,g}$ | 裂变宏观截面 | cm⁻¹ |
| $\nu\Sigma_{f,g}$ | 每次裂变平均中子数乘裂变截面 | cm⁻¹ |
| $\chi_g$ | 裂变谱群份额 | 通常各群之和为 1 |
| $q_g$ | 角源 | 与角通量的方向归一化一致，常有 $1/(4\pi)$ 因子 |
| $\tau$ | 光学厚度 | 无量纲，均匀段中 $\tau=\Sigma_t L$ |
| $k_{\mathrm{eff}}$ | 有效增殖因子 | 无量纲 |
| $w_m$ | 角度积分权重 | 若近似完整立体角积分，常用 $\sum_m w_m=4\pi$；也有归一为 1 的约定 |
| pcm | 增殖因子差异的常用表达 | $10^{-5}$；报告时写清是 $10^5(k-k_{\rm ref})$ 还是相对差定义 |

特征值计算通常先得到归一化的通量形状，绝对通量和功率需要额外指定物理归一化；不能仅由 $k_{\mathrm{eff}}$ 得到实际功率。

## 最容易混淆的关系

- **MOC 不是模拟随机碰撞历史的蒙特卡罗方法。** 常规 MOC 的轨迹是数值积分路径；Random Ray 是轨迹抽样上的相关扩展。
- **平源不等于沿线通量恒定。** 平源指源项的近似，角通量仍按指数传播。
- **段内解析积分不等于全问题无离散误差。** 空间源近似、角度、轨迹、能群和群截面仍会影响结果。
- **CMFD 是加速层，不是以未经校正的扩散解取代 MOC。** 需要正确的守恒、一致性和稳定性处理。
- **2D/1D 不等于直接三维 MOC。** 它采用不同的轴向描述和耦合近似。

主要依据：[OpenMOC 特征线推导](https://mit-crpg.github.io/OpenMOC/methods/method_of_characteristics.html)、[源迭代](https://mit-crpg.github.io/OpenMOC/methods/eigenvalue_calculations.html)、[轨迹生成](https://mit-crpg.github.io/OpenMOC/methods/track_generation.html)、[CMFD](https://mit-crpg.github.io/OpenMOC/methods/cmfd.html)。发展分支的文献编号与来源见 [文献目录](../references/literature.md)。
