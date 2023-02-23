<template>
  <div class="container">
    <h1>Lottie-Web Demo</h1>
    <span style="color: #666666">动画信息：一倍速率、180像素大小、循环播放。</span>
    <a class="github-link" href="https://github.com/RoX-orion/lottie-web/tree/main" target="_blank">github</a>
    <div class="lottie">
      <div
        class="lottie-item"
        v-for="i in lottie"
        :key="i.title">
        <animated-sticker
          :size=180
          :tgs-url="i.path"
          :playSegment=SEGMENT_COVER_EYES
          :noLoop="false"/>
        <span class="title">{{ i.title }}</span>
        <p class="text">{{ i.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimatedSticker from "@/components/AnimatedSticker.vue";
import { LOCAL_TGS_URLS } from '@/assets/animatedAssets';

const SEGMENT_COVER_EYES: [number, number] = [0, 50];
const lottie = [
  {
    path: LOCAL_TGS_URLS.RocketFast,
    title: 'Performance',
    text: 'Telegram is high performance in weak network environment.'
  },
  {
    path: LOCAL_TGS_URLS.Simple,
    title: 'Simple',
    text: 'Telegram is so simple you already know how to use it.'
  },
  {
    path: LOCAL_TGS_URLS.Private,
    title: 'Private',
    text: 'Telegram messages are heavily encrypted and can self-destruct.'
  },
  {
    path: LOCAL_TGS_URLS.Synced,
    title: 'Synced',
    text: 'Telegram lets you access your chats from multiple devices.'
  },
  {
    path: LOCAL_TGS_URLS.Fast,
    title: 'Fast',
    text: 'Telegram delivers messages faster than any other application.'
  },
  {
    path: LOCAL_TGS_URLS.Powerful,
    title: 'Powerful',
    text: 'Telegram has no limits on the size of your media and chats.'
  },
  {
    path: LOCAL_TGS_URLS.Open,
    title: 'Open',
    text: 'Telegram has an open API and source code free for everyone.'
  },
  {
    path: LOCAL_TGS_URLS.Secure,
    title: 'Secure',
    text: 'Telegram keeps your messages safe from hacker attacks.'
  },
  {
    path: LOCAL_TGS_URLS.Social,
    title: 'Social',
    text: 'Telegram groups can hold up to 200,000 members.'
  },
  {
    path: LOCAL_TGS_URLS.Expressive,
    title: 'Expressive',
    text: 'Telegram lets you completely customize your messenger.'
  },
];
</script>

<style lang="scss" scoped>
.container {
  text-align: center;

  .github-link {
    font-size: 18px;
  }
}

.lottie {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;

  .lottie-item {
    width: 18rem;
    .title {
      font-size: 1.5rem;
      color: #0088cc;
    }

    .text {
      line-height: 1.7rem;
    }
  }
}

.lottie * {
  padding: 10px;
}
</style>
