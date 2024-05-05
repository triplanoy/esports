<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  team1: String,
  team2: String,
  score1: String,
  score2: String,
  slug: String,
  datetime: String,
  league: String,
});

const scoreColor = (score1, score2) => {
  if (score1 > score2) {
    return 'text-green-500';
  } else if (score1 < score2) {
    return 'text-red-500';
  } else {
    return 'text-gray-500';
  }
};
</script>

<template>
  <a
    :href="`/match-reports/${slug}`"
    class="bg-vp-gray shadow-lg rounded-lg p-4 max-w-md min-w-[17rem] h-[8.5rem] mx-auto flex flex-col justify-between items-center transition-colors duration-200 no-underline text-current"
  >
    <div class="grid grid-cols-4 w-full">
      <div class="text-sm font-semibold col-span-3">
        {{ team1 }}
      </div>
      <div :class="scoreColor(score1, score2)" class="text-sm text-right">
        {{ score1 }}
      </div>
    </div>
    <div class="grid grid-cols-4 w-full">
      <div class="text-sm font-semibold col-span-3">
        {{ team2 }}
      </div>
      <div :class="scoreColor(score2, score1)" class="text-sm text-right">
        {{ score2 }}
      </div>
    </div>
    <div class="flex justify-between items-center w-full">
      <div>
        <div class="mt-2 text-xs text-left">
          {{ datetime }}
        </div>
        <div class="mt-1 text-xs text-left">
          {{ league }}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </a>
</template>
<style scoped>
a {
  background-color: var(--vp-c-bg-soft);
}

a:hover {
  filter: brightness(75%);
}
</style>
