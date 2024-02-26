import{_ as s,o as n,c as a,O as l}from"./chunks/framework.51846e02.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"study.md","filePath":"study.md"}'),p={name:"study.md"},t=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import { onMounted, ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import { IconThumbUp, IconThumbUpFill, IconStar, IconMessage } from &#39;@arco-design/web-vue/es/icon&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 🧩插件 - [西瓜播放器]</span></span>
<span class="line"><span style="color:#A6ACCD;">  import Player from &#39;xgplayer&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const playUrl =</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;https://video.tibaitong.com/60417fb0b99e71edab976632b68f0102/cabc64c885d549f88db635d118cd5621-71c78fc325898ceb9860b89036da117d-sd-nbv1.mp4&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const poster = &#39;http://dev.zhuokao360.com/picture/cover.png&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const playerRef = ref&lt;HTMLDivElement&gt;()</span></span>
<span class="line"><span style="color:#A6ACCD;">  onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    new Player({</span></span>
<span class="line"><span style="color:#A6ACCD;">      el: playerRef.value,</span></span>
<span class="line"><span style="color:#A6ACCD;">      url: playUrl,</span></span>
<span class="line"><span style="color:#A6ACCD;">      poster,</span></span>
<span class="line"><span style="color:#A6ACCD;">      playbackRate: [0.5, 0.75, 1, 1.5, 2],</span></span>
<span class="line"><span style="color:#A6ACCD;">      defaultPlaybackRate: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">      width: 1157,</span></span>
<span class="line"><span style="color:#A6ACCD;">      height: 650,</span></span>
<span class="line"><span style="color:#A6ACCD;">      pip: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;main-container&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;details-video&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h2 class=&quot;details-title&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        产品使用问题答疑&lt;a-tag color=&quot;arcoblue&quot; size=&quot;small&quot;&gt; 技术部 &lt;/a-tag&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;span class=&quot;description&quot;&gt;APP端 &amp; WEB端常见问题讲解&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div class=&quot;player&quot; ref=&quot;playerRef&quot; id=&quot;player&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div class=&quot;details-auth&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div :style=&quot;{ display: &#39;flex&#39;, alignItems: &#39;center&#39;, color: &#39;#1D2129&#39; }&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;a-avatar :size=&quot;32&quot; :style=&quot;{ marginRight: &#39;8px&#39; }&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;img alt=&quot;avatar&quot; src=&quot;../../assets/avatar-1.png&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/a-avatar&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;auth&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;a-typography-text class=&quot;auth-name&quot;&gt;都峥&lt;/a-typography-text&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span&gt;identity: 技术-前端开发 | wechat: dudoit_&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;actions&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;actions-item&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span class=&quot;icon-hovers&quot;&gt; &lt;IconThumbUp size=&quot;24&quot; /&gt; &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p&gt;3&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;actions-item&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span class=&quot;icon-hovers&quot;&gt; &lt;IconStar size=&quot;24&quot; /&gt; &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p&gt;6&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;actions-item&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span class=&quot;icon-hovers&quot;&gt; &lt;IconMessage size=&quot;24&quot; /&gt; &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p&gt;2&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;details-chat&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h3&gt;发表看法&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div class=&quot;chat-list&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;chat-item&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;chater&quot; :style=&quot;{ display: &#39;flex&#39;, alignItems: &#39;center&#39;, color: &#39;#1D2129&#39; }&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;a-avatar :size=&quot;24&quot; :style=&quot;{ marginRight: &#39;8px&#39; }&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;img alt=&quot;avatar&quot; src=&quot;../../assets/avatar-1.png&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/a-avatar&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;a-typography-text&gt;都峥&lt;/a-typography-text&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p</span></span>
<span class="line"><span style="color:#A6ACCD;">              &gt;终于收到我需要的宝贝了，东西很好，价美物廉，谢谢掌柜的！说实在，这是我淘宝购物来让我最满意的一次购物。无论是掌柜的态度还是对物品，我都非常满意的。掌柜态度很专业热情，有问必答，回复也很快，我问了不少问题，他都不觉得烦，都会认真回答我，这点我向掌柜表示由衷的敬意，这样的好掌柜可不多。再说宝贝，正是我需要的，收到的时候包装完整，打开后让我惊喜的是，宝贝比我想象中的还要好！不得不得竖起大拇指。下次需要的时候我还会再来的，到时候麻烦掌柜给个优惠哦！&lt;/p</span></span>
<span class="line"><span style="color:#A6ACCD;">            &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;other&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p class=&quot;time&quot;&gt;2023-03-08 11:12&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span class=&quot;icon-hover&quot;&gt; &lt;IconThumbUp /&gt; &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span&gt;11&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;chat-item&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;chater&quot; :style=&quot;{ display: &#39;flex&#39;, alignItems: &#39;center&#39;, color: &#39;#1D2129&#39; }&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;a-avatar :size=&quot;24&quot; :style=&quot;{ marginRight: &#39;8px&#39; }&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;img alt=&quot;avatar&quot; src=&quot;../../assets/avatar-2.png&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/a-avatar&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;a-typography-text&gt;客服1&lt;/a-typography-text&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p</span></span>
<span class="line"><span style="color:#A6ACCD;">              &gt;东西质量非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。&lt;/p</span></span>
<span class="line"><span style="color:#A6ACCD;">            &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;other&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p class=&quot;time&quot;&gt;2023-03-08 08:12&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span class=&quot;icon-hover icon-active&quot;&gt; &lt;IconThumbUpFill /&gt; &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span class=&quot;icon-active&quot;&gt;16&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;chat-item&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;chater&quot; :style=&quot;{ display: &#39;flex&#39;, alignItems: &#39;center&#39;, color: &#39;#1D2129&#39; }&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;a-avatar :size=&quot;24&quot; :style=&quot;{ marginRight: &#39;8px&#39; }&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;img alt=&quot;avatar&quot; src=&quot;../../assets/avatar-3.png&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/a-avatar&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;a-typography-text&gt;客服2&lt;/a-typography-text&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p</span></span>
<span class="line"><span style="color:#A6ACCD;">              &gt;东西质量非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。&lt;/p</span></span>
<span class="line"><span style="color:#A6ACCD;">            &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;div class=&quot;other&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;p class=&quot;time&quot;&gt;2023-03-07 14:12&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span class=&quot;icon-hover icon-active&quot;&gt; &lt;IconThumbUpFill /&gt; &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;span class=&quot;icon-active&quot;&gt;6&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div class=&quot;chat-input&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;a-textarea placeholder=&quot;可以在这里发表你的看法&quot; allow-clear /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  .main-container {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 89vh;</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color: #fff;</span></span>
<span class="line"><span style="color:#A6ACCD;">    padding: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .details-title {</span></span>
<span class="line"><span style="color:#A6ACCD;">      font-size: 24px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      font-weight: bold;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .description {</span></span>
<span class="line"><span style="color:#A6ACCD;">      font-size: 12px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      color: #666;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .player {</span></span>
<span class="line"><span style="color:#A6ACCD;">      margin: 15px 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .details-auth {</span></span>
<span class="line"><span style="color:#A6ACCD;">      display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">      justify-content: space-between;</span></span>
<span class="line"><span style="color:#A6ACCD;">      align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">      padding: 0 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      .auth {</span></span>
<span class="line"><span style="color:#A6ACCD;">        display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">        flex-direction: column;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        .auth-name {</span></span>
<span class="line"><span style="color:#A6ACCD;">          font-size: 14px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        span {</span></span>
<span class="line"><span style="color:#A6ACCD;">          font-size: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">          color: #666;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      .actions {</span></span>
<span class="line"><span style="color:#A6ACCD;">        display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">        justify-content: space-between;</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 160px;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        .actions-item {</span></span>
<span class="line"><span style="color:#A6ACCD;">          display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">          width: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    .details-chat {</span></span>
<span class="line"><span style="color:#A6ACCD;">      flex: 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">      display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">      flex-direction: column;</span></span>
<span class="line"><span style="color:#A6ACCD;">      padding: 0 10px 0 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      h3 {</span></span>
<span class="line"><span style="color:#A6ACCD;">        font-size: 18px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        font-weight: bold;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      .chat-list {</span></span>
<span class="line"><span style="color:#A6ACCD;">        flex: 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        padding: 0 8px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        overflow-y: scroll;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        .chat-item {</span></span>
<span class="line"><span style="color:#A6ACCD;">          margin-bottom: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          .chater {</span></span>
<span class="line"><span style="color:#A6ACCD;">            display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">            align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">            font-weight: 600;</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin: 10px 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          .content {</span></span>
<span class="line"><span style="color:#A6ACCD;">            line-height: 24px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            font-size: 14px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            color: #333;</span></span>
<span class="line"><span style="color:#A6ACCD;">            margin: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          .other {</span></span>
<span class="line"><span style="color:#A6ACCD;">            display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">            align-items: flex-end;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            .time {</span></span>
<span class="line"><span style="color:#A6ACCD;">              font-size: 12px;</span></span>
<span class="line"><span style="color:#A6ACCD;">              color: #666;</span></span>
<span class="line"><span style="color:#A6ACCD;">              margin-right: 8px;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      .chat-list::-webkit-scrollbar {</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      .chat-list::-webkit-scrollbar-thumb {</span></span>
<span class="line"><span style="color:#A6ACCD;">        border-radius: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        box-shadow: inset 0 0 5px rgba(30, 30, 30, 0.2);</span></span>
<span class="line"><span style="color:#A6ACCD;">        background: rgba(30, 30, 30, 0.2);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      .chat-list::-webkit-scrollbar-track {</span></span>
<span class="line"><span style="color:#A6ACCD;">        border-radius: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);</span></span>
<span class="line"><span style="color:#A6ACCD;">        background: rgba(0, 0, 0, 0.1);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      .chat-input {</span></span>
<span class="line"><span style="color:#A6ACCD;">        display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">        flex-direction: column;</span></span>
<span class="line"><span style="color:#A6ACCD;">        align-items: flex-end;</span></span>
<span class="line"><span style="color:#A6ACCD;">        margin: 15px 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  .icon-hovers {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    justify-content: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 30px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 30px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-radius: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    transition: all 0.1s;</span></span>
<span class="line"><span style="color:#A6ACCD;">    cursor: pointer;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  .icon-hover {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    justify-content: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-radius: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    transition: all 0.1s;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  .icon-active {</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: #165dff;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  .icon-hover:hover {</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color: rgb(var(--gray-2));</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span></code></pre></div>`,1),o=[t];function e(c,A,C,i,r,y){return n(),a("div",null,o)}const u=s(p,[["render",e]]);export{g as __pageData,u as default};
