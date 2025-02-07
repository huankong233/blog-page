import{_ as i,c as a,a as t,o as n}from"./app-BHX1haQg.js";const h={};function e(k,s){return n(),a("div",null,s[0]||(s[0]=[t(`<h2 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建</span></a></h2><p>数据也可以留空，但是数组的长度是必须的 如果数据固定了，长度可以留空</p><div class="language-c" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">变量类型 变量名称</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">数组长度</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">数据</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// int arr[5] = {1,2,3,4,5};</span></span></code></pre></div><p>右侧的数据是有顺序的，但是可以是跳跃的，比如</p><div class="language-c" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> arr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 6</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">8</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 9</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span></code></pre></div><p>如果是多维数组的话就需要多次声明数组的长度，数组中数组的长度</p><div class="language-c" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> arr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">][</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 6</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">7</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 8</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 9</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span></code></pre></div><p>以此类推</p><h2 id="访问" tabindex="-1"><a class="header-anchor" href="#访问"><span>访问</span></a></h2><p>访问时只需要:</p><div class="language-c" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">arr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">第几位</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span></code></pre></div>`,11)]))}const l=i(h,[["render",e],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/notes/c/%E5%88%9D%E7%BA%A7/%E6%95%B0%E7%BB%84/","title":"数组","lang":"zh-CN","frontmatter":{"title":"数组","author":"huan_kong","createTime":"2024/02/10 14:52:47","permalink":"/notes/c/初级/数组/","description":"创建 数据也可以留空，但是数组的长度是必须的 如果数据固定了，长度可以留空 右侧的数据是有顺序的，但是可以是跳跃的，比如 如果是多维数组的话就需要多次声明数组的长度，数组中数组的长度 以此类推 访问 访问时只需要:","head":[["meta",{"property":"og:url","content":"https://blog.huankong.top/notes/c/%E5%88%9D%E7%BA%A7/%E6%95%B0%E7%BB%84/"}],["meta",{"property":"og:site_name","content":"幻空博客"}],["meta",{"property":"og:title","content":"数组"}],["meta",{"property":"og:description","content":"创建 数据也可以留空，但是数组的长度是必须的 如果数据固定了，长度可以留空 右侧的数据是有顺序的，但是可以是跳跃的，比如 如果是多维数组的话就需要多次声明数组的长度，数组中数组的长度 以此类推 访问 访问时只需要:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"huan_kong"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数组\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"huan_kong\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.55,"words":166},"git":{},"autoDesc":true,"filePathRelative":"notes/c/1.初级/5.数组.md","bulletin":false}');export{l as comp,r as data};
