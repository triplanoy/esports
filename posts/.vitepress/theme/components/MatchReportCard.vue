<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  link: String,
  team1: String,
  team2: String,
  score1: {
    type: String,
    required: true,
  },
  score2: {
    type: String,
    required: true,
  },
  datetime: String,
  league: String,
  maps: Array,
});

const formatDate = (datetime) => {
  return datetime.split(' ')[0];
};

const formatTime = (datetime) => {
  return datetime.split(' ')[1];
};
</script>

<template>
  <div
    class="flex flex-col items-center bg-vp-gray rounded-lg w-full my-8 relative py-2"
  >
    <div class="grid grid-cols-3 items-center w-full px-4">
      <div class="font-semibold text-l text-right pr-2">{{ props.team1 }}</div>
      <div class="flex items-center justify-center">
        <div
          class="font-bold text-l"
          :class="{
            'text-green-600': props.score1 > props.score2,
            'text-red-600': props.score1 < props.score2,
          }"
        >
          {{ props.score1 }}
        </div>
        <div class="font-bold text-l mx-2">:</div>
        <div
          class="font-bold text-l"
          :class="{
            'text-green-600': props.score2 > props.score1,
            'text-red-600': props.score2 < props.score1,
          }"
        >
          {{ props.score2 }}
        </div>
      </div>
      <div class="font-semibold text-l text-left pl-2">{{ props.team2 }}</div>
    </div>
    <div class="text-center w-full px-4 mt-2">
      <div class="text-sm">{{ props.maps?.join(' / ') }}</div>
    </div>
    <div class="flex items-center justify-between w-full px-4 mt-4">
      <div>
        <div class="text-sm">{{ formatDate(props.datetime) }}</div>
        <div class="text-sm">{{ formatTime(props.datetime) }}</div>
        <div class="text-xs">{{ props.league }}</div>
      </div>
      <a
        :href="props.link"
        class="flex items-center no-underline cursor-pointer"
      >
        <span class="hidden text-base md:inline mr-2">Lue lisää</span>
        <svg
          class="w-5 h-5 rtl:rotate-[270deg] cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
