import{_ as i,c as a,a as t,o as e}from"./app-DYqYEUdH.js";const n={};function l(p,s){return e(),a("div",null,s[0]||(s[0]=[t(`<h2 id="_0-吐槽一下" tabindex="-1"><a class="header-anchor" href="#_0-吐槽一下"><span>0.吐槽一下</span></a></h2><p>不是哥们, 宝塔你这默认的 <code>sqlite</code> 还在用 <code>2013</code> 年的是不是有点太过分了</p><h2 id="_1-执行命令" tabindex="-1"><a class="header-anchor" href="#_1-执行命令"><span>1.执行命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /tmp</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">wget</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://www.sqlite.org/2024/sqlite-autoconf-3460000.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tar</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zxvf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /tmp/sqlite-autoconf-3460000.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /tmp/sqlite-autoconf-3460000</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ||</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> exit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ./configure</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --prefix=/usr/local</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> make</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> make</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/bin/sqlite3</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/bin/sqlite3_backup</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/bin/sqlite3</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/bin/sqlite3</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/usr/local/lib</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/ld.so.conf.d/sqlite3.conf</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ldconfig</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sqlite3</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-重载php服务" tabindex="-1"><a class="header-anchor" href="#_2-重载php服务"><span>2.重载PHP服务</span></a></h2><p>用的哪个版本,就重启哪个版本(虽然最好是都重启一下)</p><p><img src="https://img.huankong.top/i/2024/06/29/66801f1476a99.png" alt="1719672595590.png"></p>`,7)]))}const r=i(n,[["render",l],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/article/5p69qc26/","title":"宝塔更新sqlite3","lang":"zh-CN","frontmatter":{"title":"宝塔更新sqlite3","author":"huan_kong","createTime":"2024/06/29 22:48:26","permalink":"/article/5p69qc26/","tags":["后端","bt"],"description":"0.吐槽一下 不是哥们, 宝塔你这默认的 sqlite 还在用 2013 年的是不是有点太过分了 1.执行命令 2.重载PHP服务 用的哪个版本,就重启哪个版本(虽然最好是都重启一下) 1719672595590.png","head":[["meta",{"property":"og:url","content":"https://blog.huankong.top/article/5p69qc26/"}],["meta",{"property":"og:site_name","content":"幻空博客"}],["meta",{"property":"og:title","content":"宝塔更新sqlite3"}],["meta",{"property":"og:description","content":"0.吐槽一下 不是哥们, 宝塔你这默认的 sqlite 还在用 2013 年的是不是有点太过分了 1.执行命令 2.重载PHP服务 用的哪个版本,就重启哪个版本(虽然最好是都重启一下) 1719672595590.png"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.huankong.top/i/2024/06/29/66801f1476a99.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"huan_kong"}],["meta",{"property":"article:tag","content":"后端"}],["meta",{"property":"article:tag","content":"bt"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"宝塔更新sqlite3\\",\\"image\\":[\\"https://img.huankong.top/i/2024/06/29/66801f1476a99.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"huan_kong\\"}]}"]]},"headers":[{"level":2,"title":"0.吐槽一下","slug":"_0-吐槽一下","link":"#_0-吐槽一下","children":[]},{"level":2,"title":"1.执行命令","slug":"_1-执行命令","link":"#_1-执行命令","children":[]},{"level":2,"title":"2.重载PHP服务","slug":"_2-重载php服务","link":"#_2-重载php服务","children":[]}],"readingTime":{"minutes":0.42,"words":125},"git":{},"autoDesc":true,"filePathRelative":"后端/bt/宝塔更新sqlite3.md","categoryList":[{"id":"e778d6","sort":10004,"name":"后端"},{"id":"c0a224","sort":10005,"name":"bt"}],"bulletin":false}');export{r as comp,k as data};