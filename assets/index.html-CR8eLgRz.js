import{_ as n,c as a,a as e,o as i}from"./app-DYqYEUdH.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>namespace App\\Http\\Controllers;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use App\\Models\\User;</span></span>
<span class="line"><span>use Illuminate\\Http\\Request;</span></span>
<span class="line"><span>use Illuminate\\Support\\Facades\\Auth;</span></span>
<span class="line"><span>use Illuminate\\Support\\Facades\\Validator;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class UserController extends Controller</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function login(Request $request){</span></span>
<span class="line"><span>        $validated = Validator::make($request-&gt;all(),[</span></span>
<span class="line"><span>            &#39;username&#39;=&gt;&#39;required&#39;,</span></span>
<span class="line"><span>            &#39;password&#39;=&gt;&#39;required&#39;</span></span>
<span class="line"><span>        ]);</span></span>
<span class="line"><span>        if($validated-&gt;fails()){</span></span>
<span class="line"><span>            return response()-&gt;json([&#39;msg&#39;=&gt;&#39;登陆失败&#39;],400);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //查看能否登陆</span></span>
<span class="line"><span>        $user = User::query()-&gt;where(&#39;username&#39;,$request-&gt;username);</span></span>
<span class="line"><span>        $user_data = $user-&gt;get();</span></span>
<span class="line"><span>        //用户是否存在</span></span>
<span class="line"><span>        if(count($user_data)===0){</span></span>
<span class="line"><span>            return response()-&gt;json([&#39;msg&#39;=&gt;&#39;用户不存在&#39;],400);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //账户的登陆时间是否大于当前时间</span></span>
<span class="line"><span>        if($user_data[0]-&gt;canLoginTime&gt;date(&#39;Y-m-d H:i:s&#39;)){</span></span>
<span class="line"><span>            return response()-&gt;json([&#39;msg&#39;=&gt;&#39;账户被锁&#39;],400);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //登陆</span></span>
<span class="line"><span>        if(!Auth::attempt([&#39;username&#39;=&gt;$request-&gt;username,&#39;password&#39;=&gt;$request-&gt;password])){</span></span>
<span class="line"><span>            $this-&gt;fail($user);</span></span>
<span class="line"><span>            return response()-&gt;json([&#39;msg&#39;=&gt;&#39;登陆失败&#39;],400);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        $request-&gt;session()-&gt;regenerate();</span></span>
<span class="line"><span>        return response()-&gt;json([&#39;msg&#39;=&gt;&#39;登录成功&#39;],200);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function fail($user){</span></span>
<span class="line"><span>        $count = $user-&gt;get(&#39;fail&#39;);</span></span>
<span class="line"><span>        //失败10次</span></span>
<span class="line"><span>        if($count[0]-&gt;fail===9){</span></span>
<span class="line"><span>            //禁止登陆30s</span></span>
<span class="line"><span>            $canLoginTime = date(&#39;Y-m-d H:i:s&#39;,strtotime(&#39;+30 second&#39;));</span></span>
<span class="line"><span>            return $user-&gt;update([&#39;canLoginTime&#39;=&gt;$canLoginTime,&#39;fail&#39;=&gt;0]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return $user-&gt;increment(&#39;fail&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function register(Request $request){</span></span>
<span class="line"><span>        $validated = Validator::make($request-&gt;all(),[</span></span>
<span class="line"><span>            &#39;username&#39;=&gt;&#39;required|unique:users&#39;,</span></span>
<span class="line"><span>            &#39;password&#39;=&gt;&#39;required&#39;,</span></span>
<span class="line"><span>            &#39;r_password&#39;=&gt;&#39;required|same:password&#39;</span></span>
<span class="line"><span>        ]);</span></span>
<span class="line"><span>        if($validated-&gt;fails()){</span></span>
<span class="line"><span>            return response()-&gt;json([&#39;msg&#39;=&gt;&#39;注册失败&#39;],400);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //插入数据</span></span>
<span class="line"><span>        User::query()-&gt;insert([</span></span>
<span class="line"><span>            &#39;username&#39;=&gt;$request-&gt;username,</span></span>
<span class="line"><span>            &#39;password&#39;=&gt;$request-&gt;password</span></span>
<span class="line"><span>        ]);</span></span>
<span class="line"><span>        return response()-&gt;json([&#39;msg&#39;=&gt;&#39;注册成功&#39;],200);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function logout(Request $request){</span></span>
<span class="line"><span>        Auth::logout();</span></span>
<span class="line"><span>        $request-&gt;session()-&gt;invalidate();</span></span>
<span class="line"><span>        return response()-&gt;json([&#39;msg&#39;=&gt;&#39;退出成功&#39;],200);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const d=n(l,[["render",p],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/article/bmkcdtbv/","title":"简易的用户登陆注册注销","lang":"zh-CN","frontmatter":{"title":"简易的用户登陆注册注销","author":"huan_kong","createTime":"2022/12/06 12:19:44","permalink":"/article/bmkcdtbv/","tags":["后端","php","laravel"],"head":[["meta",{"property":"og:url","content":"https://blog.huankong.top/article/bmkcdtbv/"}],["meta",{"property":"og:site_name","content":"幻空博客"}],["meta",{"property":"og:title","content":"简易的用户登陆注册注销"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"huan_kong"}],["meta",{"property":"article:tag","content":"后端"}],["meta",{"property":"article:tag","content":"php"}],["meta",{"property":"article:tag","content":"laravel"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简易的用户登陆注册注销\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"huan_kong\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.03,"words":309},"git":{},"filePathRelative":"后端/php/laravel/简易的用户登陆注册注销.md","categoryList":[{"id":"e778d6","sort":10004,"name":"后端"},{"id":"4c09f6","sort":10008,"name":"php"},{"id":"56bdf9","sort":10016,"name":"laravel"}],"bulletin":false}');export{d as comp,c as data};
