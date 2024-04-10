```
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { IconThumbUp, IconThumbUpFill, IconStar, IconMessage } from '@arco-design/web-vue/es/icon'
  // 🧩插件 - [西瓜播放器]
  import Player from 'xgplayer'

  const playUrl =
    'https://video.tibaitong.com/60417fb0b99e71edab976632b68f0102/cabc64c885d549f88db635d118cd5621-71c78fc325898ceb9860b89036da117d-sd-nbv1.mp4'
  const poster = 'http://dev.zhuokao360.com/picture/cover.png'
  const playerRef = ref<HTMLDivElement>()
  onMounted(() => {
    new Player({
      el: playerRef.value,
      url: playUrl,
      poster,
      playbackRate: [0.5, 0.75, 1, 1.5, 2],
      defaultPlaybackRate: 1,
      width: 1157,
      height: 650,
      pip: true,
    })
  })
</script>

<template>
  <div class="main-container">
    <div class="details-video">
      <h2 class="details-title">
        产品使用问题答疑<a-tag color="arcoblue" size="small"> 技术部 </a-tag>
      </h2>
      <span class="description">APP端 & WEB端常见问题讲解</span>
      <div class="player" ref="playerRef" id="player"></div>
      <div class="details-auth">
        <div :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
          <a-avatar :size="32" :style="{ marginRight: '8px' }">
            <img alt="avatar" src="../../assets/avatar-1.png" />
          </a-avatar>
          <div class="auth">
            <a-typography-text class="auth-name">都峥</a-typography-text>
            <span>identity: 技术-前端开发 | wechat: dudoit_</span>
          </div>
        </div>
        <div class="actions">
          <div class="actions-item">
            <span class="icon-hovers"> <IconThumbUp size="24" /> </span>
            <p>3</p>
          </div>
          <div class="actions-item">
            <span class="icon-hovers"> <IconStar size="24" /> </span>
            <p>6</p>
          </div>
          <div class="actions-item">
            <span class="icon-hovers"> <IconMessage size="24" /> </span>
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
    <div class="details-chat">
      <h3>发表看法</h3>
      <div class="chat-list">
        <div class="chat-item">
          <div class="chater" :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
            <a-avatar :size="24" :style="{ marginRight: '8px' }">
              <img alt="avatar" src="../../assets/avatar-1.png" />
            </a-avatar>
            <a-typography-text>都峥</a-typography-text>
          </div>
          <div class="content">
            <p
              >终于收到我需要的宝贝了，东西很好，价美物廉，谢谢掌柜的！说实在，这是我淘宝购物来让我最满意的一次购物。无论是掌柜的态度还是对物品，我都非常满意的。掌柜态度很专业热情，有问必答，回复也很快，我问了不少问题，他都不觉得烦，都会认真回答我，这点我向掌柜表示由衷的敬意，这样的好掌柜可不多。再说宝贝，正是我需要的，收到的时候包装完整，打开后让我惊喜的是，宝贝比我想象中的还要好！不得不得竖起大拇指。下次需要的时候我还会再来的，到时候麻烦掌柜给个优惠哦！</p
            >
          </div>
          <div class="other">
            <p class="time">2023-03-08 11:12</p>
            <span class="icon-hover"> <IconThumbUp /> </span>
            <span>11</span>
          </div>
        </div>
        <div class="chat-item">
          <div class="chater" :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
            <a-avatar :size="24" :style="{ marginRight: '8px' }">
              <img alt="avatar" src="../../assets/avatar-2.png" />
            </a-avatar>
            <a-typography-text>客服1</a-typography-text>
          </div>
          <div class="content">
            <p
              >东西质量非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。</p
            >
          </div>
          <div class="other">
            <p class="time">2023-03-08 08:12</p>
            <span class="icon-hover icon-active"> <IconThumbUpFill /> </span>
            <span class="icon-active">16</span>
          </div>
        </div>
        <div class="chat-item">
          <div class="chater" :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
            <a-avatar :size="24" :style="{ marginRight: '8px' }">
              <img alt="avatar" src="../../assets/avatar-3.png" />
            </a-avatar>
            <a-typography-text>客服2</a-typography-text>
          </div>
          <div class="content">
            <p
              >东西质量非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。</p
            >
          </div>
          <div class="other">
            <p class="time">2023-03-07 14:12</p>
            <span class="icon-hover icon-active"> <IconThumbUpFill /> </span>
            <span class="icon-active">6</span>
          </div>
        </div>
      </div>
      <div class="chat-input">
        <a-textarea placeholder="可以在这里发表你的看法" allow-clear />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .main-container {
    display: flex;
    height: 89vh;
    background-color: #fff;
    padding: 20px;

    .details-title {
      font-size: 24px;
      font-weight: bold;
    }

    .description {
      font-size: 12px;
      color: #666;
    }

    .player {
      margin: 15px 0;
    }

    .details-auth {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;

      .auth {
        display: flex;
        flex-direction: column;

        .auth-name {
          font-size: 14px;
        }

        span {
          font-size: 10px;
          color: #666;
        }
      }

      .actions {
        display: flex;
        justify-content: space-between;
        width: 160px;

        .actions-item {
          display: flex;
          width: 50px;
        }
      }
    }

    .details-chat {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 0 10px 0 20px;

      h3 {
        font-size: 18px;
        font-weight: bold;
      }

      .chat-list {
        flex: 1;
        padding: 0 8px;
        overflow-y: scroll;

        .chat-item {
          margin-bottom: 20px;

          .chater {
            display: flex;
            align-items: center;
            font-weight: 600;
            margin: 10px 0;
          }

          .content {
            line-height: 24px;
            font-size: 14px;
            color: #333;
            margin: 5px;
          }

          .other {
            display: flex;
            align-items: flex-end;

            .time {
              font-size: 12px;
              color: #666;
              margin-right: 8px;
            }
          }
        }
      }

      .chat-list::-webkit-scrollbar {
        width: 5px;
      }

      .chat-list::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgba(30, 30, 30, 0.2);
        background: rgba(30, 30, 30, 0.2);
      }

      .chat-list::-webkit-scrollbar-track {
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.1);
      }

      .chat-input {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 15px 0;
      }
    }
  }

  .icon-hovers {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: all 0.1s;
    cursor: pointer;
  }

  .icon-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: all 0.1s;
  }

  .icon-active {
    color: #165dff;
  }

  .icon-hover:hover {
    background-color: rgb(var(--gray-2));
  }
</style>
```