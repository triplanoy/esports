<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  title: string;
  description: string;
  image: string;
  readMoreLink: string;
}>();
</script>

<template>
  <div class="w-[19rem] rounded-lg overflow-hidden bg-vp-gray">
    <div class="w-full h-40 overflow-hidden">
      <img
        class="w-full h-full object-cover"
        :src="props.image"
        :alt="props.title"
      />
    </div>
    <div class="px-6 py-4 pb-1">
      <div class="font-bold text-xl mb-2">{{ props.title }}</div>
      <p class="text-base">
        {{ props.description }}
      </p>
    </div>
    <div class="px-6 pt-2 pb-2 flex justify-end">
      <a
        :href="props.readMoreLink"
        class="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded no-underline cursor-pointer"
      >
        Lue lisää
      </a>
    </div>
  </div>
</template>
