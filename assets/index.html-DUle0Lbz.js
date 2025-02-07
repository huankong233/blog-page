import{_ as i,c as a,a as n,o as e}from"./app-BHX1haQg.js";const t={};function l(p,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="使用-getters" tabindex="-1"><a class="header-anchor" href="#使用-getters"><span>使用 <code>Getters</code></span></a></h2><p><code>Getters</code> 自带缓存功能，不会重复调用</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">useMainStore</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineStore</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">main</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 用于存储数据</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  state</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      count</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      arr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 类似计算属性</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  getters</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    moreCount</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">state</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> state</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">count</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 封装业务逻辑</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  actions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {},</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中传入的 <code>state</code> 是可选参数</p><p>虽然可以用 <code>this</code> 替换，但是会影响 <code>ts</code> 的类型判断，需要手动指定数据类型，不推荐使用</p>`,5)]))}const k=i(t,[["render",l],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/notes/pinia/%E5%AD%A6%E4%B9%A0/getters/","title":"Getters","lang":"zh-CN","frontmatter":{"title":"Getters","author":"huan_kong","createTime":"2023/07/02 09:10:22","permalink":"/notes/pinia/学习/getters/","description":"使用 Getters Getters 自带缓存功能，不会重复调用 其中传入的 state 是可选参数 虽然可以用 this 替换，但是会影响 ts 的类型判断，需要手动指定数据类型，不推荐使用","head":[["meta",{"property":"og:url","content":"https://blog.huankong.top/notes/pinia/%E5%AD%A6%E4%B9%A0/getters/"}],["meta",{"property":"og:site_name","content":"幻空博客"}],["meta",{"property":"og:title","content":"Getters"}],["meta",{"property":"og:description","content":"使用 Getters Getters 自带缓存功能，不会重复调用 其中传入的 state 是可选参数 虽然可以用 this 替换，但是会影响 ts 的类型判断，需要手动指定数据类型，不推荐使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"huan_kong"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Getters\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"huan_kong\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.39,"words":117},"git":{},"autoDesc":true,"filePathRelative":"notes/pinia/1.学习/5.Getters.md","bulletin":false}');export{k as comp,r as data};
