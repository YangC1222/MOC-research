# MOC 文献目录与逐篇阅读理由

整理更新：2026-10-10；首轮检索与书目核验：2026-10-09。共 **15 篇论文/章节 + 5 项官方辅助资源**。按学习任务选读，不要求初学者一次读完。入口见[阅读路线](../docs/reading-plan.md)。

本清单是定向选读，未进行穷尽检索或引文排名。P01/P02 用于入门，P04/P10 用于空间源与迭代加速，P05/P06 用于三维路线；其余按方向扩展。`reading_basis` 明确本次实际查阅范围，归档全文不等于完成精读。

论文/章节可导入 [BibTeX](references.bib) 或 [RIS](references.ris)。[获取状态](download-status.md)与[原文清单](../papers/manifest.json)记录版本和许可。

| 编号 | 年份 | 主题 | 阅读定位 | 本地原文 |
|---|---|---|---|---|
| [P01](#p01) | 2015 | 入门综述、特征线变换 | 核心必读 | [查看入口与状态](download-status.md#p01) |
| [P02](#p02) | 2014 | 二维MOC、程序实现、基准验证 | 核心必读 | [PDF](../papers/pdf/P02_Boyd_2014_OpenMOC_author-manuscript.pdf) |
| [P03](#p03) | 2021 | 教材章节、系统理论 | 基础阶段可选补充 | [查看入口与状态](download-status.md#p03) |
| [P04](#p04) | 2016 | 线性源、空间精度、CMFD兼容性 | 核心必读 | [查看入口与状态](download-status.md#p04) |
| [P05](#p05) | 2011 | 三维MOC、模块化射线追踪、CMFD | 核心必读 | [查看入口与状态](download-status.md#p05) |
| [P06](#p06) | 2016 | 2D/1D、稳定性、全堆计算 | 核心必读 | [查看入口与状态](download-status.md#p06) |
| [P07](#p07) | 2019 | 直接三维、全堆、BEAVRS、即时追踪 | 三维应用路线必读 | [查看入口与状态](download-status.md#p07) |
| [P08](#p08) | 2021 | 非结构网格、三维MOC、全堆 | 复杂几何路线选读 | [查看入口与状态](download-status.md#p08) |
| [P09](#p09) | 2016 | 并行任务、向量化、高性能计算 | 性能实现路线必读 | [PDF](../papers/pdf/P09_Tramm_2016_Task_based_3D_MOC_author-manuscript.pdf) |
| [P10](#p10) | 2020 | GPU、两级CMFD、线性系统求解 | 核心必读 | [PDF](../papers/pdf/P10_Song_2020_GPU_Two_Level_CMFD_published.pdf) |
| [P11](#p11) | 2026 | 少群三维、GPU显存、SMR、轨迹分批 | 近期性能路线选读 | [查看入口与状态](download-status.md#p11) |
| [P12](#p12) | 2025 | 六角形快堆、广义CMFD、群粗化 | 近期加速路线选读 | [查看入口与状态](download-status.md#p12) |
| [P13](#p13) | 2017 | 随机射线、随机相空间积分、内存 | 扩展路线选读 | [PDF](../papers/pdf/P13_Tramm_2017_Random_Ray_author-manuscript.pdf) |
| [P14](#p14) | 2026 | 随机射线、重要性抽样、减方差 | 扩展路线进阶选读 | [查看入口与状态](download-status.md#p14) |
| [P15](#p15) | 2026 | 特征面方法、高阶轴向展开、中文资料 | 三维相关扩展选读 | [查看入口与状态](download-status.md#p15) |

<a id="p01"></a>
## P01 · Method of characteristics – A review with applications to science and nuclear engineering computation

Matthew Eklund, Miltiadis Alamaniotis, Hermilo Hernandez, Tatjana Jevremovic. Method of characteristics – A review with applications to science and nuclear engineering computation. Progress in Nuclear Energy 85, 548-567 (2015).

**主题与定位：** 入门综述、特征线变换；核心必读。

**为什么读：** 先建立沿特征线把偏微分方程变成常微分方程的数学直觉。本文覆盖多个领域，首遍只读基础推导与中子输运案例，避免把热工应用中的特征线与中子直线轨迹混淆。

**读后应回答：**

- 特征线上的方向导数为何能改写成沿程导数？
- 数学上的特征线法与反应堆物理中的轨迹扫描有什么联系？

**来源：** [DOI](https://doi.org/10.1016/j.pnucene.2015.05.002) · [来源2：www.sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S0149197015001080) · [来源3：inl.elsevierpure.com](https://inl.elsevierpure.com/en/publications/method-of-characteristics-a-review-with-applications-to-science-a/)

**本轮查阅范围：** `abstract`。

**书目与内容核验说明：** 2026-10-09核对Crossref书目与INL作者机构摘要；正式卷期为2015年。全文案例尚未逐式精读。

**正文状态：** 保留出版社和机构摘要入口；本轮未获得具有明确公开再分发依据的原文。可通过学校订阅继续获取。

<a id="p02"></a>
## P02 · The OpenMOC method of characteristics neutral particle transport code

William Boyd, Samuel Shaner, Lulu Li, Benoit Forget, Kord Smith. The OpenMOC method of characteristics neutral particle transport code. Annals of Nuclear Energy 68, 43-52 (2014).

**主题与定位：** 二维MOC、程序实现、基准验证；核心必读。

**为什么读：** 把数学公式连接到实际计算程序，是整个阅读计划的主线。重点认识几何、轨迹生成、输运扫描、源更新和验证之间的关系，再结合OpenMOC官方理论文档补充细节。

**读后应回答：**

- 几何与材料输入怎样转变成分段轨迹和区域通量？
- C5G7等基准怎样检查计算结果，哪些离散化参数影响误差？

**来源：** [DOI](https://doi.org/10.1016/j.anucene.2013.12.012) · [来源2：www.sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S0306454913006634) · [来源3：mit-crpg.github.io](https://mit-crpg.github.io/OpenMOC/methods/index.html) · [来源4：github.com](https://github.com/mit-crpg/OpenMOC) · [来源5：dspace.mit.edu](https://dspace.mit.edu/entities/publication/c6e8edd6-071b-43ef-adc8-ed39dcb55ae7) · [来源6：dspace.mit.edu](https://dspace.mit.edu/server/api/core/bitstreams/c3c8d02f-80f0-4d84-9b8c-dc388917a03b/content)

**本轮查阅范围：** `abstract + official_documentation + repository_pdf_frontmatter_and_abstract`。

**书目与内容核验说明：** 2026-10-09核对Crossref和出版社摘要/章节预览；归纳未采用硬件加速倍数作为一般结论。DOI含2013，正式出版年为2014。 2026-10-10复核MIT作者稿封面、摘要与许可；归档全文不等于逐式精读。

**正文状态：** [已归档PDF](../papers/pdf/P02_Boyd_2014_OpenMOC_author-manuscript.pdf)；author_final_manuscript；CC BY-NC-ND 4.0。MIT仓库封面明确标为作者最终稿；封面提供正式DOI与CC BY-NC-ND 4.0许可。

<a id="p03"></a>
## P03 · The method of characteristics

Zhouyu Liu. The method of characteristics. Deterministic Numerical Methods for Unstructured-Mesh Neutron Transport Calculation, 73-108 (2021).

**主题与定位：** 教材章节、系统理论；基础阶段可选补充。

**为什么读：** 适合作为教材型补充，与OpenMOC文档和P01/P02交叉对照符号、假设与推导。摘要列明方程推导、关键近似、二维/三维求解器和2D/1D异质计算路线；未获得可读正文，因此不把它列为最短路线的必备条件。

**读后应回答：**

- 哪些关键近似影响MOC精度，教材如何组织二维和三维求解流程？
- 2D/1D fusion在组件和全堆异质计算中处于什么位置？

**来源：** [DOI](https://doi.org/10.1016/B978-0-12-818221-5.00010-6) · [来源2：www.sciencedirect.com](https://www.sciencedirect.com/science/article/pii/B9780128182215000106)

**本轮查阅范围：** `abstract`。

**书目与内容核验说明：** 2026-10-09Crossref确认书目信息；出版社摘要在前轮原始网页检索中核对，本次直接访问返回403。全文尚未读取，不能将摘要级归纳写成逐章精读。

**正文状态：** 教材章节正文直接访问受限（403）；未获得可归档版本。可查学校电子书资源，免费入门路线不依赖此章。

<a id="p04"></a>
## P04 · A Linear Source Approximation Scheme for the Method of Characteristics

Rodolfo M. Ferrer, Joel D. Rhodes III. A Linear Source Approximation Scheme for the Method of Characteristics. Nuclear Science and Engineering 182(2), 151-165 (2016).

**主题与定位：** 线性源、空间精度、CMFD兼容性；核心必读。

**为什么读：** 回答平源区为什么必须细分，以及能否用更好的区内源表达换取更少的网格。本文通过轨迹空间矩构造线性源系数，适合学习精度、内存与计算代价之间的权衡。

**读后应回答：**

- 线性源除了平均源还需要哪些空间矩或系数？
- 为何需要在相同目标精度下比较平源与线性源的耗时和内存？

**来源：** [DOI](https://doi.org/10.13182/NSE15-6) · [来源2：www.tandfonline.com](https://www.tandfonline.com/doi/abs/10.13182/NSE15-6)

**本轮查阅范围：** `abstract`。

**书目与内容核验说明：** 2026-10-09Crossref和出版社摘要核验。引用年采用卷182期2的2016年；官网迁移后的Published online显示2017-03-22，DOI含15，三者不能混用。Rhodes作者后缀III已保留。

**正文状态：** 出版社正式记录与摘要已核验；未获得本轮可公开再分发的正文版本。

<a id="p05"></a>
## P05 · A new three-dimensional method of characteristics for the neutron transport calculation

Zhouyu Liu, Hongchun Wu, Liangzhi Cao, Qichang Chen, Yunzhao Li. A new three-dimensional method of characteristics for the neutron transport calculation. Annals of Nuclear Energy 38(2-3), 447-454 (2011).

**主题与定位：** 三维MOC、模块化射线追踪、CMFD；核心必读。

**为什么读：** 进入三维问题前，先理解轨迹数据量增长带来的内存瓶颈。模块化追踪复用典型几何单元，CMFD减少迭代，两者分别作用于不同计算环节。

**读后应回答：**

- 典型单元中的轨迹为什么需要满足接口连接要求？
- 模块化追踪与CMFD各自节省了哪种成本？

**来源：** [DOI](https://doi.org/10.1016/j.anucene.2010.09.021) · [来源2：www.sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S0306454910003427) · [来源3：necp.xjtu.edu.cn](https://necp.xjtu.edu.cn/__local/7/7E/F3/9B50B82133802D453C4B299AEF2_39452112_91284.pdf)

**本轮查阅范围：** `abstract + official_fulltext_excerpt`。

**书目与内容核验说明：** 2026-10-09Crossref、出版社摘要与西安交大公开PDF片段核验；全文逐式推导和所有算例未完整复核。DOI含2010，正式出版年2011。

**正文状态：** 西安交大官网有公开PDF入口，但本轮没有确认该文件的公开再分发许可，因此仅保留官方全文链接。

<a id="p06"></a>
## P06 · Stability and accuracy of 3D neutron transport simulations using the 2D/1D method in MPACT

Benjamin Collins, Shane Stimpson, Blake W. Kelley, Mitchell T.H. Young, Brendan Kochunas, Aaron Graham, Edward W. Larsen, Thomas Downar, Andrew Godfrey. Stability and accuracy of 3D neutron transport simulations using the 2D/1D method in MPACT. Journal of Computational Physics 326, 612-628 (2016).

**主题与定位：** 2D/1D、稳定性、全堆计算；核心必读。

**为什么读：** 与P05组成对照：直接三维MOC之外，可以用径向二维MOC和轴向低阶输运组成三维求解。重点理解轴向近似、横向泄漏耦合和稳定性，避免仅用运行速度评价方法。

**读后应回答：**

- 2D/1D方法对三维方程作了哪些近似，径向与轴向如何交换信息？
- 轴向网格细化时应如何同时检查精度与迭代稳定性？

**来源：** [DOI](https://doi.org/10.1016/j.jcp.2016.08.022) · [来源2：www.sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S0021999116303710) · [来源3：impact.ornl.gov](https://impact.ornl.gov/en/publications/stability-and-accuracy-of-3d-neutron-transport-simulations-using-/)

**本轮查阅范围：** `abstract`。

**书目与内容核验说明：** 2026-10-09Crossref与ORNL机构摘要核验；保留全部9位作者。摘要提到实际堆芯、连续能MC和测量比较，未据此宣称所有反应堆均适用。

**正文状态：** 书目和ORNL机构摘要已核验；本轮未获得具有明确公开再分发依据的正文。

<a id="p07"></a>
## P07 · Full core 3D simulation of the BEAVRS benchmark with OpenMOC

Geoffrey Gunow, Benoit Forget, Kord Smith. Full core 3D simulation of the BEAVRS benchmark with OpenMOC. Annals of Nuclear Energy 134, 299-304 (2019).

**主题与定位：** 直接三维、全堆、BEAVRS、即时追踪；三维应用路线必读。

**为什么读：** 展示基础算法走向真实尺度三维全堆问题时需要哪些工程措施。阅读时把几何、空间与角度分辨率、即时追踪、区域分解和验证结果放在同一张表里。

**读后应回答：**

- 空间和角度分辨率如何证明足够，而不是只看keff接近参考值？
- 即时轴向追踪、区域分解和CMFD如何协同控制资源？

**来源：** [DOI](https://doi.org/10.1016/j.anucene.2019.05.050) · [来源2：www.sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S0306454919303032) · [来源3：www.osti.gov](https://www.osti.gov/biblio/1801260) · [来源4：www.osti.gov](https://www.osti.gov/servlets/purl/1801260)

**本轮查阅范围：** `abstract + official_fulltext_excerpt`。

**书目与内容核验说明：** 2026-10-09Crossref与OSTI作者稿摘要/方法片段核验；OSTI稿件须与出版社正式版区分，下载版本和分发状态见独立manifest。

**正文状态：** OSTI有作者稿全文入口；本轮未确认允许在公开仓库再次分发该作者稿的许可。保留OSTI合法获取链接。

<a id="p08"></a>
## P08 · Method of Characteristics for 3D, Full-Core Neutron Transport on Unstructured Mesh

Derek R. Gaston, Benoit Forget, Kord S. Smith, Logan H. Harbour, Gavin K. Ridley, Guillaume G. Giudicelli. Method of Characteristics for 3D, Full-Core Neutron Transport on Unstructured Mesh. Nuclear Technology 207(7), 931-953 (2021).

**主题与定位：** 非结构网格、三维MOC、全堆；复杂几何路线选读。

**为什么读：** 了解规则重复几何之外的三维MOC实现。重点比较非结构网格下的几何适应性、射线切段、数据布局和并行代价，与P05的模块复用路线形成对照。

**读后应回答：**

- 非结构网格解决了哪些几何描述问题，又增加了哪些追踪与通信成本？
- 采用什么空间近似和算例才能支持全堆适用性？

**来源：** [DOI](https://doi.org/10.1080/00295450.2021.1871995) · [来源2：www.tandfonline.com](https://www.tandfonline.com/doi/abs/10.1080/00295450.2021.1871995)

**本轮查阅范围：** `abstract + official_fulltext_excerpt`。

**书目与内容核验说明：** 2026-10-09Crossref与出版社页面片段核验。出版社标为开放获取不自动等于允许仓库再分发，具体许可由下载manifest记录。

**正文状态：** Crossref登记CC BY-NC-ND 4.0，但本轮出版社PDF下载返回HTTP 403；未成功取得可验证文件，保留许可与下载入口。

<a id="p09"></a>
## P09 · A task-based parallelism and vectorized approach to 3D Method of Characteristics (MOC) reactor simulation for high performance computing architectures

John R. Tramm, Geoffrey Gunow, Tim He, Kord S. Smith, Benoit Forget, Andrew R. Siegel. A task-based parallelism and vectorized approach to 3D Method of Characteristics (MOC) reactor simulation for high performance computing architectures. Computer Physics Communications 202, 141-150 (2016).

**主题与定位：** 并行任务、向量化、高性能计算；性能实现路线必读。

**为什么读：** 学习如何在保持输运算法框架的同时安排任务和数据，以降低单次扫描成本。适合在能画出MOC扫描流程后阅读，关注并行粒度、任务依赖和负载均衡。

**读后应回答：**

- 哪些循环可以并行或向量化，哪些边界依赖需要保留？
- 强扩展与弱扩展分别回答什么问题，性能比较如何统一基线？

**来源：** [DOI](https://doi.org/10.1016/j.cpc.2016.01.007) · [来源2：www.sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S0010465516000266) · [来源3：dspace.mit.edu](https://dspace.mit.edu/entities/publication/9c6ad519-f282-4978-b8fd-815d5c0391c5) · [来源4：dspace.mit.edu](https://dspace.mit.edu/server/api/core/bitstreams/e24aed13-8a8e-432e-848f-670d42136e2c/content)

**本轮查阅范围：** `abstract + repository_pdf_frontmatter_and_abstract`。

**书目与内容核验说明：** 2026-10-09Crossref书目核验；内容定位沿用前轮检索的摘要级归纳，不据此给出具体硬件扩展效率或加速倍数。 2026-10-10复核MIT作者稿封面、摘要与许可；归档全文不等于逐式精读。

**正文状态：** [已归档PDF](../papers/pdf/P09_Tramm_2016_Task_based_3D_MOC_author-manuscript.pdf)；author_final_manuscript；CC BY-NC-ND 4.0。MIT封面为作者最终稿，正式DOI对应2016年论文；正文页脚日期为2017-01-26，排版页数与正式版不同。仓库不判断该日期所代表的修订过程。

<a id="p10"></a>
## P10 · GPU Based Two-Level CMFD Accelerating Two-Dimensional MOC Neutron Transport Calculation

Peitao Song, Qian Zhang, Liang Liang, Zhijian Zhang, Qiang Zhao. GPU Based Two-Level CMFD Accelerating Two-Dimensional MOC Neutron Transport Calculation. Frontiers in Energy Research 8, 124 (2020).

**主题与定位：** GPU、两级CMFD、线性系统求解；核心必读。

**为什么读：** 公开全文的加速案例，既讨论MOC也讨论CMFD线性系统，便于看到端到端耗时由哪些部分组成。先掌握CMFD的目的，再比较Jacobi、SOR和预条件GMRES的收敛与硬件效率。

**读后应回答：**

- 减少迭代次数和加快每次迭代为什么是两种不同收益？
- 线性求解器迭代更少，为什么总耗时未必更短？

**来源：** [DOI](https://doi.org/10.3389/fenrg.2020.00124) · [来源2：www.frontiersin.org](https://www.frontiersin.org/journals/energy-research/articles/10.3389/fenrg.2020.00124/full) · [来源3：www.frontiersin.org](https://www.frontiersin.org/journals/energy-research/articles/10.3389/fenrg.2020.00124/pdf)

**本轮查阅范围：** `abstract + official_fulltext_excerpt`。

**书目与内容核验说明：** 2026-10-09Crossref、Frontiers全文/PDF摘要与结论片段核验；正式文章号124并非页码。未把原文特定CPU/GPU比较的倍数外推为普遍收益。 2026-10-10复核已下载正式PDF与末页许可，归档正文不等于全部算例复算。

**正文状态：** [已归档PDF](../papers/pdf/P10_Song_2020_GPU_Two_Level_CMFD_published.pdf)；version_of_record；CC BY 4.0。Frontiers正式PDF，首页DOI和文章号匹配，末页明确Creative Commons Attribution License（CC BY）。

<a id="p11"></a>
## P11 · GPU-accelerated few-group 3D Method of Characteristics for full-core neutron transport in Small Modular Reactors

Qufei Song, Ruixiang Wang, Yuyang Shen, Yiwei Wu, Kuaiyuan Feng, Hui Guo, Yao Xiao, Hanyang Gu. GPU-accelerated few-group 3D Method of Characteristics for full-core neutron transport in Small Modular Reactors. Progress in Nuclear Energy 192, 106109 (2026).

**主题与定位：** 少群三维、GPU显存、SMR、轨迹分批；近期性能路线选读。

**为什么读：** 在读完P04、P05、P09、P10后，观察线性源、即时轴向追踪和轨迹分批如何组合应对GPU显存限制。特别留意少群截面的准备成本与误差，避免把少群结果直接推广到细群计算。

**读后应回答：**

- 计算放得进显存和计算得快分别依靠哪些措施？
- 少群截面、硬件和比较基线如何限制所报告的性能结论？

**来源：** [DOI](https://doi.org/10.1016/j.pnucene.2025.106109) · [来源2：www.sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S0149197025005074)

**本轮查阅范围：** `abstract`。

**书目与内容核验说明：** 2026-10-09Crossref核对完整作者、卷192和文章号106109；正式出版为2026年2月，DOI含2025。内容为前轮摘要级归纳，未复核全部公式或速度数据。 2026-10-10复查ScienceDirect正式卷、文章号及摘要页面。

**正文状态：** 正式2026年书目已核验；本轮未取得可公开再分发的正文，保留正式DOI与出版社入口。

<a id="p12"></a>
## P12 · A generalized coarse mesh finite difference acceleration for 3D method of characteristics in hexagonal fast reactor simulations

Xiaoxu Geng, Yun Hu, Jiayi Yu, Chong Wang, Haodong Shan, Zhaoshun Wang. A generalized coarse mesh finite difference acceleration for 3D method of characteristics in hexagonal fast reactor simulations. Nuclear Engineering and Design 445, 114429 (2025).

**主题与定位：** 六角形快堆、广义CMFD、群粗化；近期加速路线选读。

**为什么读：** 把CMFD加速从常见方形轻水堆几何拓展到六角形快堆语境。关注几何适配和能群粗化如何进入粗网算子，再检查加速前后精细通量与特征值是否保持一致。

**读后应回答：**

- 六角形几何为什么需要重新设计粗网连通与索引？
- 群粗化是在改变最终精细输运模型，还是只改变加速层？

**来源：** [DOI](https://doi.org/10.1016/j.nucengdes.2025.114429) · [来源2：www.sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S0029549325006065)

**本轮查阅范围：** `abstract + publisher_highlights`。

**书目与内容核验说明：** 2026-10-09Crossref与出版社Highlights核验；正式卷445、文章号114429、2025年12月。未将单个CEFR算例的迭代下降推广为所有工况。 2026-10-10复查ScienceDirect正式卷、文章号及摘要页面。

**正文状态：** 摘要/Highlights和2025年正式书目已核验；本轮未取得可公开再分发的正文。

<a id="p13"></a>
## P13 · The Random Ray Method for neutral particle transport

John R. Tramm, Kord S. Smith, Benoit Forget, Andrew R. Siegel. The Random Ray Method for neutral particle transport. Journal of Computational Physics 342, 229-252 (2017).

**主题与定位：** 随机射线、随机相空间积分、内存；扩展路线选读。

**为什么读：** 在熟悉固定轨迹MOC后，理解用随机射线抽样替代确定性的轨迹离散。它仍沿线积分输运方程，是MOC相关扩展，不能简单等同于逐粒子碰撞历史的常规蒙特卡罗。

**读后应回答：**

- 随机射线究竟随机化了哪个积分环节？
- 内存收益伴随哪些统计误差、源迭代和采样参数问题？

**来源：** [DOI](https://doi.org/10.1016/j.jcp.2017.04.038) · [来源2：www.sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S0021999117303170) · [来源3：github.com](https://github.com/jtramm/minray) · [来源4：dspace.mit.edu](https://dspace.mit.edu/entities/publication/738579db-c7e0-4074-8bb0-a8fc9e85cdc8) · [来源5：dspace.mit.edu](https://dspace.mit.edu/server/api/core/bitstreams/d5b448d7-e671-4e39-8b4a-bb5ef66fc795/content)

**本轮查阅范围：** `abstract + repository_pdf_frontmatter_and_abstract`。

**书目与内容核验说明：** 2026-10-09Crossref、出版社摘要与作者minray仓库引用核验；没有常规MOC与随机射线的统一算例复算，性能优劣仅作为待比较问题。 2026-10-10复核MIT作者稿封面、摘要与许可；归档全文不等于逐式精读。

**正文状态：** [已归档PDF](../papers/pdf/P13_Tramm_2017_Random_Ray_author-manuscript.pdf)；author_final_manuscript_repository_designation；CC BY-NC-ND 4.0。MIT封面将本文件标为作者最终稿并关联2017年正式DOI；正文页脚2018-09-20，全文54页。不能视为2017年期刊排版版的逐页替代，也不将书目年改成2018。

<a id="p14"></a>
## P14 · Ray Adaptive Stochastic Transport (RASTr): Importance sampling based variance reduction for characteristics method transport solvers

Owen Mylotte, Benoit Forget. Ray Adaptive Stochastic Transport (RASTr): Importance sampling based variance reduction for characteristics method transport solvers. Annals of Nuclear Energy 230, 112152 (2026).

**主题与定位：** 随机射线、重要性抽样、减方差；扩展路线进阶选读。

**为什么读：** 在P13之后追问均匀随机射线抽样是否把资源分配得合理。作者通过统计权重支持空间和角度上的偏倚抽样，是从MOC扩展到重要性思想的桥梁。

**读后应回答：**

- 非均匀射线抽样需要怎样的权重补偿？
- 误差下降是否抵消了偏倚抽样的额外计算成本？

**来源：** [DOI](https://doi.org/10.1016/j.anucene.2026.112152) · [来源2：www.sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S030645492600040X) · [来源3：papers.ssrn.com](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5686167)

**本轮查阅范围：** `author_preprint_abstract + publisher_abstract`。

**书目与内容核验说明：** 2026-10-09Crossref确认正式论文2026年6月、卷230、文章号112152；内容归纳先基于作者SSRN预印本摘要（2025-10-31），2026-10-10已对照ScienceDirect正式摘要，不能声称已精读2026正式正文。SSRN DOI 10.2139/ssrn.5686167为预印本标识，不替换本条正式DOI。

**正文状态：** 正式2026年书目已核验；SSRN有2025年作者预印本入口，但本轮未获得可确认公开再分发许可的正文文件。

<a id="p15"></a>
## P15 · 基于高阶轴向多项式展开的特征面方法

杨睿, 喻宏, 胡赟, 霍兴凯. 基于高阶轴向多项式展开的特征面方法. 原子能科学技术 60(1), 175-184 (2026).

**主题与定位：** 特征面方法、高阶轴向展开、中文资料；三维相关扩展选读。

**为什么读：** 中文进阶材料，学习利用轴向与径向尺度差异改进三维输运离散。本文研究特征面而非通常的一维特征线积分，应作为相关扩展与直接三维MOC和2D/1D分别比较。

**读后应回答：**

- 特征面求解的对象与特征线上的常微分方程有何不同？
- 轴向四阶、径向零阶近似依赖哪些几何假设，基准能支持哪些结论？

**来源：** [DOI](https://doi.org/10.7538/yzk.2025.youxian.0109) · [来源2：yznkxjs.xml-journal.net](https://yznkxjs.xml-journal.net/cn/article/id/cfb381ad-0243-40d3-83d4-5905b92b08d1) · [来源3：yznkxjs.xml-journal.net](https://yznkxjs.xml-journal.net/cn/article/pdf/preview/10.7538/yzk.2025.youxian.0109.pdf)

**本轮查阅范围：** `abstract + official_fulltext_excerpt`。

**书目与内容核验说明：** 2026-10-09期刊官网与中文版正式PDF首页/方法片段核验作者、题名、2026年卷60期1、页175–184。Crossref端点404未能验证，不能写成Crossref已收录；DOI含2025优先发表标记，引用正式年2026。

**正文状态：** 期刊官网提供中文正式PDF，但未核实再次公开分发许可；保留官网原文链接。Crossref查询404不能代替期刊记录。

## 官方辅助资料

<a id="r01"></a>
### R01 · OpenMOC Theory and Methodology

**版本：** 在线文档；访问日期2026-10-09。

**为什么读：** 首要免费教学入口：按输运方程、特征线变换、平源积分、源迭代、轨迹生成、CMFD的顺序读。

**来源：** [来源1：mit-crpg.github.io](https://mit-crpg.github.io/OpenMOC/methods/index.html) · [来源2：mit-crpg.github.io](https://mit-crpg.github.io/OpenMOC/methods/method_of_characteristics.html) · [来源3：mit-crpg.github.io](https://mit-crpg.github.io/OpenMOC/methods/eigenvalue_calculations.html) · [来源4：mit-crpg.github.io](https://mit-crpg.github.io/OpenMOC/methods/track_generation.html) · [来源5：mit-crpg.github.io](https://mit-crpg.github.io/OpenMOC/methods/cmfd.html)

<a id="r02"></a>
### R02 · OpenMOC source code and sample inputs

**版本：** 在线仓库；使用时记录具体commit。

**为什么读：** 把理论对象与代码实现对应，并从简单输入学习几何、材料、求解设置；示例能运行不等于版本与所有平台兼容性已验证。

**来源：** [来源1：github.com](https://github.com/mit-crpg/OpenMOC)

<a id="r03"></a>
### R03 · MPACT 4.4 Theory Manual

**版本：** 4.4。

**为什么读：** 进阶查阅2D/1D、截面处理、源迭代与加速的系统理论；以版本4.4为准，避免与其他版本方程编号混用。

**来源：** [DOI](https://doi.org/10.2172/2305812) · [来源2：www.osti.gov](https://www.osti.gov/biblio/2305812) · [来源3：impact.ornl.gov](https://impact.ornl.gov/en/publications/mpact-44-theory-manual/) · [来源4：www.osti.gov](https://www.osti.gov/servlets/purl/2305812)

**原报告：** [本地PDF](../papers/pdf/R03_MPACT_2023_Theory_Manual_4.4.pdf)；199页；Approved for public release; distribution unlimited。

<a id="r04"></a>
### R04 · Benchmark on Deterministic Transport Calculations Without Spatial Homogenisation: A 2-D/3-D MOX Fuel Assembly Benchmark

**版本：** NEA/NSC/DOC(2003)16；稳态C5G7报告。

**为什么读：** 使用约定几何、7群截面、边界和参考解比较方法；该报告不能与后续C5G7-TD瞬态基准混为一谈。

**来源：** [来源1：www.oecd-nea.org](https://www.oecd-nea.org/jcms/pl_13548/benchmark-on-deterministic-transport-calculations-without-spatial-homogenisation?details=true)

<a id="r05"></a>
### R05 · BEAVRS benchmark specification

**版本：** revision 2.0.1。

**为什么读：** 配合P07了解真实尺度堆芯模型和运行数据；这里固定rev.2.0.1，不把它描述为最新版本。复现具体论文需核对其采用的规范版本与工况。

**来源：** [来源1：crpg.mit.edu](https://crpg.mit.edu/wp-content/uploads/2017/01/beavrs_2.0.1_spec.pdf)
