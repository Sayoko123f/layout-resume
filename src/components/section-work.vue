<template>
  <section
    class="relative min-h-screen overflow-hidden bg-gradient-to-tl from-black to-[#434343]"
  >
    <h2 class="py-4 text-center text-2xl">專案作品</h2>
    <div class="md:mx-auto md:max-w-5xl">
      <WorkItem
        :item="item"
        v-for="item in WorkData"
        :key="item.externalLink"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { WorkData } from '../assets/work-data';
import WorkItem from './work-item.vue';
</script>
