<template>
  <section class="relative h-[80vh] overflow-hidden">
    <div class="flex h-full flex-col items-center justify-center">
      <div
        class="m-4 w-72 rounded-md bg-black bg-opacity-25 px-4 py-8 text-center md:w-full"
      >
        <h1 class="text-4xl">Hi 👋, I'm <span class="font-bold">Sayoko123f</span></h1>
        <p class="h-16 text-2xl opacity-90">{{ currentHi }}</p>
      </div>
    </div>
    <video
      class="absolute inset-0 -z-10 block h-full w-full object-cover opacity-70 mix-blend-color-dodge"
      playsinline
      autoplay
      muted
      loop
      poster="/static/hero.jpg"
    >
      <source src="/static/hero.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const his = [
  '我來自台灣。',
  '我正在學習網站開發技術。',
  '我熱愛探索未知的事物。',
  '我喜歡與人分享我的經驗。',
];
const currentHi = ref('');
let hiIndex = his.length;
function tickHi() {
  hiIndex++;
  if (hiIndex >= his.length) {
    hiIndex = 0;
  }
  currentHi.value = '';
  const hi = his[hiIndex].split('');
  const tickSay = () => {
    if (hi.length) {
      currentHi.value += hi.shift();
      setTimeout(tickSay, 100);
      return;
    }
    setTimeout(tickHi, 950);
  };
  tickSay();
}

onMounted(() => {
  tickHi();
});
</script>
