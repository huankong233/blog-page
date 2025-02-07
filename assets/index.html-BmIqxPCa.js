import{_ as i,c as a,a as n,o as h}from"./app-BHX1haQg.js";const l={};function t(p,s){return h(),a("div",null,s[0]||(s[0]=[n(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p><img src="https://img.huankong.top/i/2023/11/21/655c45ce5e344.png" alt="image-20231121135308590"></p><p>栈结构只能在栈顶插入或取出数据，不能在任意位置插入数据</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>插入数据也称为进栈/压栈/入栈</p><p>删除/取出数据也称为出栈/退栈</p></div><p>也就是后进先出(LIFOL: last in first out)</p><p>优点: 提供后进先出的存储方式，添加速度快，允许重复</p><p>缺点: 只能在一头操作数据，存取其他项很慢</p><h2 id="小测验" tabindex="-1"><a class="header-anchor" href="#小测验"><span>小测验</span></a></h2><p><img src="https://img.huankong.top/i/2023/11/21/655c4ce727a79.png" alt="image-20231121141957632"></p><p>不是一次性压入这 6 个元素，可以同时出或者入</p><h3 id="a" tabindex="-1"><a class="header-anchor" href="#a"><span>A</span></a></h3><p>压 6，压 5，出 5，压 4，出 4，压 3，出 3，出 6，压 2，压 1，出 1，出 2</p><h3 id="b" tabindex="-1"><a class="header-anchor" href="#b"><span>B</span></a></h3><p>压 6，压 5，压 4，出 4，出 5，压 3，出 3，压 2，出 2，压 1，出 1，出 6</p><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c"><span>C</span></a></h3><p>压 6，压 5，压 4，压 3，出 3，出 4</p><p>出不来了，因为需要先出 5 才能出 6</p><h3 id="d" tabindex="-1"><a class="header-anchor" href="#d"><span>D</span></a></h3><p>压 6，压 5，压 4，压 3，压 2，出 2，出 3，出 4，压 1，出 1，出 5，出 6</p><h2 id="ts-实现" tabindex="-1"><a class="header-anchor" href="#ts-实现"><span>TS 实现</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="typescript" data-title="typescript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Stack</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    #value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">any</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[] =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">val</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">any</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">#value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">val</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    pop</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">#value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pop</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    peek</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">#value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">#value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    isEmpty</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">#value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ===</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">#value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">length</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    toString</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">#value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">toString</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><p>使用 <code>栈</code> 实现 <code>十进制</code> 转 <code>二进制</code></p><div class="language-typescript line-numbers-mode" data-ext="typescript" data-title="typescript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> dec2bin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">stack</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Stack</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    while</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &gt;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      stack</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">number</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> %</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Math</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">floor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">number</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> /</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    let </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    while</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">stack</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">isEmpty</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">())</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      bin</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> stack</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pop</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> bin</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)]))}const k=i(l,[["render",t],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/notes/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%A0%88/","title":"栈","lang":"zh-CN","frontmatter":{"title":"栈","author":"huan_kong","createTime":"2023/11/21 09:09:45","permalink":"/notes/algorithm/数据结构/栈/","description":"介绍 image-20231121135308590 栈结构只能在栈顶插入或取出数据，不能在任意位置插入数据 提示 插入数据也称为进栈/压栈/入栈 删除/取出数据也称为出栈/退栈 也就是后进先出(LIFOL: last in first out) 优点: 提供后进先出的存储方式，添加速度快，允许重复 缺点: 只能在一头操作数据，存取其他项很慢 小测验 ...","head":[["meta",{"property":"og:url","content":"https://blog.huankong.top/notes/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%A0%88/"}],["meta",{"property":"og:site_name","content":"幻空博客"}],["meta",{"property":"og:title","content":"栈"}],["meta",{"property":"og:description","content":"介绍 image-20231121135308590 栈结构只能在栈顶插入或取出数据，不能在任意位置插入数据 提示 插入数据也称为进栈/压栈/入栈 删除/取出数据也称为出栈/退栈 也就是后进先出(LIFOL: last in first out) 优点: 提供后进先出的存储方式，添加速度快，允许重复 缺点: 只能在一头操作数据，存取其他项很慢 小测验 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.huankong.top/i/2023/11/21/655c45ce5e344.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"huan_kong"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"栈\\",\\"image\\":[\\"https://img.huankong.top/i/2023/11/21/655c45ce5e344.png\\",\\"https://img.huankong.top/i/2023/11/21/655c4ce727a79.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"huan_kong\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.99,"words":296},"git":{},"autoDesc":true,"filePathRelative":"notes/algorithm/2.数据结构/2.栈.md","bulletin":false}');export{k as comp,r as data};
