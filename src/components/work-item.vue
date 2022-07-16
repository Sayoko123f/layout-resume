<template>
  <div class="relative">
    <div class="absolute left-4 z-0 h-full w-px bg-amber-300"></div>
    <div
      class="relative z-10 flex h-8 w-8 rotate-45 items-center justify-center bg-black"
    >
      <div class="h-2 w-2 bg-amber-300"></div>
    </div>
    <div class="mx-4 grid grid-cols-1 py-2 md:grid-cols-2">
      <div class="px-4">
        <h3 class="mb-2 text-xl font-bold">{{ prop.item.title }}</h3>
        <ul class="mb-2 flex flex-wrap gap-2">
          <li
            class="rounded-md border px-3 py-1"
            v-for="tag in prop.item.tags"
            :key="tag"
          >
            {{ tag }}
          </li>
        </ul>
        <p>
          <a
            class="hover:text-sky-300 hover:underline"
            :href="prop.item.externalLink"
            >前往查看
            <ExternalLinkIcon class="inline-block h-5 w-5 align-top" />
          </a>
        </p>
        <p>{{ prop.item.intro }}</p>
      </div>
      <div class="h-[200px] w-full md:w-[350px]">
        <img
          class="h-[200px] w-full overflow-hidden rounded-md object-cover object-top md:w-[350px]"
          :src="prop.item.previewImageLink"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ExternalLinkIcon } from '@heroicons/vue/solid';
import { Item } from '../assets/work-data';

const prop = defineProps<{ item: Item }>();
</script>
