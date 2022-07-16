<template>
  <section
    class="bg-nasa flex flex-col items-center justify-center overflow-hidden px-4 py-16"
  >
    <h2 class="py-4 text-2xl">我經常使用這些技術/工具</h2>
    <h3>前端</h3>
    <div class="rounded-md bg-white bg-opacity-80 p-4 md:w-2/3">
      <ul class="flex flex-wrap gap-2">
        <li>
          <img
            class="h-16 w-16"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
        </li>
        <li>
          <img
            class="h-16 w-16"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="TypeScript"
          />
        </li>
        <li>
          <img
            class="h-16 w-16"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
            alt="Vue.js"
          />
        </li>
        <li>
          <img
            class="h-16 w-16"
            src="https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667"
            alt="Tailwindcss"
          />
        </li>
        <li>
          <img
            class="h-16 w-16"
            src="https://camo.githubusercontent.com/3da72386ebb1b378d28f0a7206cb3263fa0ed29448119c6f75fa1ab03aa274ee/68747470733a2f2f6170692e69636f6e6966792e64657369676e2f6c6f676f732d6875676f2e737667"
            alt="Hugo"
          />
        </li>
      </ul>
    </div>
    <h3 class="mt-4">後端</h3>
    <div class="rounded-md bg-white bg-opacity-80 p-4 md:w-2/3">
      <ul class="flex flex-wrap gap-2">
        <li>
          <img
            class="h-16 w-16"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
            alt="PHP"
          />
        </li>
        <li>
          <img
            class="h-16 w-16"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="Node"
          />
        </li>
        <li>
          <img
            class="h-16 w-16"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
            alt="MySQL"
          />
        </li>
        <li>
          <img
            class="h-16 w-16"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongoDB"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
</script>
