import{_ as t,c as a,a as n,o as i}from"./app-DYqYEUdH.js";const l={};function r(o,e){return i(),a("div",null,e[0]||(e[0]=[n('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>未学完!!!</p></div><h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则"><span>规则</span></a></h2><p><img src="https://img.huankong.top/i/2024/01/02/65937084972dd.png" alt="image-20240102101002793"></p><ul><li>节点上红色或黑色</li><li>根节点上黑色</li><li>每个叶子节点都上黑色的空节点(NIL节点)</li><li>每个红色节点的两个子节点都是黑色</li><li>从每个叶子到根的所有路径上不能有两个连续的红色节点</li><li>从任一节点到其每个叶子的所有路径都包含相同数目都黑色节点</li></ul><h2 id="变色" tabindex="-1"><a class="header-anchor" href="#变色"><span>变色</span></a></h2><p>在插入一个新节点时 可能会导致树不再平衡</p><p>可以通过三种方式 让树保持平衡</p><h3 id="换色" tabindex="-1"><a class="header-anchor" href="#换色"><span>换色</span></a></h3><p>把红色节点变成黑色 把黑色节点变成红色</p><h3 id="左旋转" tabindex="-1"><a class="header-anchor" href="#左旋转"><span>左旋转</span></a></h3><p>1</p><h3 id="右旋转" tabindex="-1"><a class="header-anchor" href="#右旋转"><span>右旋转</span></a></h3><p>1</p><h2 id="插入" tabindex="-1"><a class="header-anchor" href="#插入"><span>插入</span></a></h2><p>插入时通常采用 红色</p>',15)]))}const s=t(l,[["render",r],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/notes/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%BA%A2%E9%BB%91%E6%A0%91/","title":"红黑树","lang":"zh-CN","frontmatter":{"title":"红黑树","author":"huan_kong","createTime":"2023/12/31 18:38:07","permalink":"/notes/algorithm/数据结构/红黑树/","description":"注意 未学完!!! 规则 image-20240102101002793 节点上红色或黑色 根节点上黑色 每个叶子节点都上黑色的空节点(NIL节点) 每个红色节点的两个子节点都是黑色 从每个叶子到根的所有路径上不能有两个连续的红色节点 从任一节点到其每个叶子的所有路径都包含相同数目都黑色节点 变色 在插入一个新节点时 可能会导致树不再平衡 可以通过三种...","head":[["meta",{"property":"og:url","content":"https://blog.huankong.top/notes/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%BA%A2%E9%BB%91%E6%A0%91/"}],["meta",{"property":"og:site_name","content":"幻空博客"}],["meta",{"property":"og:title","content":"红黑树"}],["meta",{"property":"og:description","content":"注意 未学完!!! 规则 image-20240102101002793 节点上红色或黑色 根节点上黑色 每个叶子节点都上黑色的空节点(NIL节点) 每个红色节点的两个子节点都是黑色 从每个叶子到根的所有路径上不能有两个连续的红色节点 从任一节点到其每个叶子的所有路径都包含相同数目都黑色节点 变色 在插入一个新节点时 可能会导致树不再平衡 可以通过三种..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.huankong.top/i/2024/01/02/65937084972dd.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"huan_kong"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"红黑树\\",\\"image\\":[\\"https://img.huankong.top/i/2024/01/02/65937084972dd.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"huan_kong\\"}]}"]]},"headers":[{"level":2,"title":"规则","slug":"规则","link":"#规则","children":[]},{"level":2,"title":"变色","slug":"变色","link":"#变色","children":[{"level":3,"title":"换色","slug":"换色","link":"#换色","children":[]},{"level":3,"title":"左旋转","slug":"左旋转","link":"#左旋转","children":[]},{"level":3,"title":"右旋转","slug":"右旋转","link":"#右旋转","children":[]}]},{"level":2,"title":"插入","slug":"插入","link":"#插入","children":[]}],"readingTime":{"minutes":0.69,"words":206},"git":{},"autoDesc":true,"filePathRelative":"notes/algorithm/2.数据结构/13.红黑树.md","bulletin":false}');export{s as comp,h as data};