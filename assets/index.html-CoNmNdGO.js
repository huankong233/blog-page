import{_ as t,c as a,a as l,o as s}from"./app-DYqYEUdH.js";const n={};function i(o,e){return s(),a("div",null,e[0]||(e[0]=[l('<h2 id="错误提示" tabindex="-1"><a class="header-anchor" href="#错误提示"><span>错误提示</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Table &quot;.\\mysql\\db&quot; is marked as crashed and last (automatic?) repair failed</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因"><span>原因</span></a></h2><p>你的 <code>mysql</code> 数据库中的 <code>db</code> 表损坏了, 需要修复. 你可以尝试以下方法来修复它:</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><ol><li>停止 <code>mysql</code> 服务 进入 <code>mysql</code> 的 <code>bin</code> 目录下</li><li>执行 <code>mysqld --console --skip-grant-tables --skip-external-locking</code> 命令, 以跳过权限检查和外部锁定</li><li>执行 <code>mysqlcheck -r --databases mysql --use-frm</code> 命令(原先的不能停止), 修复数据库</li></ol>',6)]))}const c=t(n,[["render",i],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/article/tkjc7erp/","title":"mysql无法启动","lang":"zh-CN","frontmatter":{"title":"mysql无法启动","author":"huan_kong","createTime":"2023/07/25 11:05:00","permalink":"/article/tkjc7erp/","tags":["后端","mysql"],"description":"错误提示 原因 你的 mysql 数据库中的 db 表损坏了, 需要修复. 你可以尝试以下方法来修复它: 解决方法 停止 mysql 服务 进入 mysql 的 bin 目录下 执行 mysqld --console --skip-grant-tables --skip-external-locking 命令, 以跳过权限检查和外部锁定 执行 mysq...","head":[["meta",{"property":"og:url","content":"https://blog.huankong.top/article/tkjc7erp/"}],["meta",{"property":"og:site_name","content":"幻空博客"}],["meta",{"property":"og:title","content":"mysql无法启动"}],["meta",{"property":"og:description","content":"错误提示 原因 你的 mysql 数据库中的 db 表损坏了, 需要修复. 你可以尝试以下方法来修复它: 解决方法 停止 mysql 服务 进入 mysql 的 bin 目录下 执行 mysqld --console --skip-grant-tables --skip-external-locking 命令, 以跳过权限检查和外部锁定 执行 mysq..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"huan_kong"}],["meta",{"property":"article:tag","content":"后端"}],["meta",{"property":"article:tag","content":"mysql"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mysql无法启动\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"huan_kong\\"}]}"]]},"headers":[{"level":2,"title":"错误提示","slug":"错误提示","link":"#错误提示","children":[]},{"level":2,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}],"readingTime":{"minutes":0.45,"words":136},"git":{},"autoDesc":true,"filePathRelative":"后端/mysql/mysql无法启动.md","categoryList":[{"id":"e778d6","sort":10004,"name":"后端"},{"id":"59e2a2","sort":10007,"name":"mysql"}],"bulletin":false}');export{c as comp,d as data};