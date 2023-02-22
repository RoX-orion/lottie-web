<template>
  <div class="container">
    <h1>Lottie-Web Demo</h1>
    <div class="lottie">
      <animated-sticker
        v-for="i in LOCAL_TGS_URLS"
        :size=180
        :tgs-url="i"
        :playSegment=SEGMENT_COVER_EYES
        :noLoop="false"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimatedSticker from "@/components/AnimatedSticker.vue";
import { LOCAL_TGS_URLS } from '@/assets/animatedAssets';

const SEGMENT_COVER_EYES: [number, number] = [0, 50];

</script>

<style scoped>
.container {
  text-align: center;
}

.lottie {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 70%;
  margin: auto;
}

.lottie * {
  padding: 30px;
}
</style>
