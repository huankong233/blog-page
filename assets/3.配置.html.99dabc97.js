import{_ as e,o as d,c as a,a as i}from"./app.b8a4bcb6.js";const n={},t=i(`<p>\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5728 <code>config</code> \u6587\u4EF6\u5939\u4E0B \u5982\u679C\u9700\u8981\u4FEE\u6539\u53EF\u4EE5\u5728 <code>src/load/index.js</code> \u4E2D\u4FEE\u6539 <code>loadConfig</code> \u65B9\u6CD5</p><h2 id="\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199" aria-hidden="true">#</a> \u7F16\u5199</h2><p>\u4E00\u5171\u6709\u4E24\u79CD\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\u7684\u65B9\u5F0F</p><h3 id="_1-\u52A0\u8F7D\u5355\u4E2A\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u52A0\u8F7D\u5355\u4E2A\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 1.\u52A0\u8F7D\u5355\u4E2A\u914D\u7F6E\u6587\u4EF6</h3><p>\u51FD\u6570\u540D: <code>loadConfig</code></p><p>\u51FD\u6570\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>file_path</code></td><td>string</td><td>config\u540D\u5B57</td></tr><tr><td><code>setGlobal</code></td><td>boolean</td><td>\u662F\u5426\u52A0\u8F7D\u5230\u5168\u5C40</td></tr></tbody></table><h3 id="_2-\u52A0\u8F7D\u591A\u4E2A\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u52A0\u8F7D\u591A\u4E2A\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 2.\u52A0\u8F7D\u591A\u4E2A\u914D\u7F6E\u6587\u4EF6</h3><p>\u51FD\u6570\u540D: <code>loadConfigs</code></p><p>\u51FD\u6570\u53C2\u6570\uFF1A</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>configs</code></td><td>array</td><td>config\u540D\u5B57</td></tr><tr><td><code>global</code></td><td>boolean</td><td>\u662F\u5426\u52A0\u8F7D\u5230\u5168\u5C40</td></tr></tbody></table><h3 id="_3-\u914D\u7F6E\u6587\u4EF6\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E\u6587\u4EF6\u793A\u4F8B" aria-hidden="true">#</a> 3.\u914D\u7F6E\u6587\u4EF6\u793A\u4F8B</h3><p>\u56E0\u4E3A\u6211\u4EEC\u7528\u7684\u662F <code>jsonc</code> \u6240\u4EE5\u53EF\u4EE5\u6709\u6CE8\u91CA</p><div class="language-jsonc ext-jsonc line-numbers-mode"><pre class="language-jsonc"><code>{
  /*
   * agree = \u81EA\u52A8\u540C\u610F
   * message = \u901A\u77E5
   */

  //\u5165\u7FA4
  &quot;invite&quot;: {
    &quot;agree&quot;: false,
    &quot;message&quot;: true
  },
  //\u52A0\u7FA4
  &quot;add&quot;: {
    &quot;agree&quot;: false,
    &quot;message&quot;: true
  },
  //\u597D\u53CB
  &quot;friend&quot;: {
    &quot;agree&quot;: true,
    &quot;message&quot;: true
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u4E00\u5171\u6709\u4E24\u79CD\u4F7F\u7528\u914D\u7F6E\u7684\u65B9\u5F0F</p><h3 id="_1-\u52A0\u8F7D\u5230\u5168\u5C40" tabindex="-1"><a class="header-anchor" href="#_1-\u52A0\u8F7D\u5230\u5168\u5C40" aria-hidden="true">#</a> 1.\u52A0\u8F7D\u5230\u5168\u5C40</h3><p>\u76F4\u63A5\u5728 <code>global.config.\u914D\u7F6E\u6587\u4EF6\u540D</code> \u83B7\u53D6\u914D\u7F6E\u6587\u4EF6</p><h3 id="_2-\u6CA1\u52A0\u8F7D\u5230\u5168\u5C40" tabindex="-1"><a class="header-anchor" href="#_2-\u6CA1\u52A0\u8F7D\u5230\u5168\u5C40" aria-hidden="true">#</a> 2.\u6CA1\u52A0\u8F7D\u5230\u5168\u5C40</h3><p>\u4F7F\u7528\u4E00\u4E2A\u53D8\u91CF\u63A5\u6536\u8FD4\u56DE\u7684\u6570\u636E\uFF0C\u7136\u540E\u518D\u4F7F\u7528</p>`,20),r=[t];function s(o,c){return d(),a("div",null,r)}var h=e(n,[["render",s],["__file","3.\u914D\u7F6E.html.vue"]]);export{h as default};
