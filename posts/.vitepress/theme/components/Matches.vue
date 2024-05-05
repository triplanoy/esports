<script setup lang="ts">
import { ref, onMounted, onUpdated, watch } from 'vue';
import MatchCard from './MatchCard.vue';
import matches from '../../data/match-reports.json';

let carousel = ref(null);
let atStart = ref(true);
let atEnd = ref(false);
let cardWidth = 17 * 16; // width of card in pixels (17rem)

let scroll = (direction) => {
  if (carousel.value) {
    let carouselWidth = (carousel.value as HTMLElement).offsetWidth;
    let cardsInView = Math.floor(carouselWidth / cardWidth);
    (carousel.value as HTMLElement).scrollLeft +=
      direction * cardsInView * cardWidth;
  }
};

let adjustScrollPosition = () => {
  if (carousel.value) {
    let scrollPosition = (carousel.value as HTMLElement).scrollLeft;
    let adjustedScrollPosition =
      Math.round(scrollPosition / cardWidth) * cardWidth;
    (carousel.value as HTMLElement).scrollLeft = adjustedScrollPosition;
  }
};

let checkScrollPosition = () => {
  if (carousel.value) {
    let scrollPosition = (carousel.value as HTMLElement).scrollLeft;
    let maxScrollPosition =
      (carousel.value as HTMLElement).scrollWidth -
      (carousel.value as HTMLElement).offsetWidth;
    atStart.value = scrollPosition === 0;
    atEnd.value = scrollPosition === maxScrollPosition;
  }
};

onMounted(() => {
  window.addEventListener('resize', adjustScrollPosition);
  if (carousel.value) {
    (carousel.value as HTMLElement).addEventListener(
      'scroll',
      checkScrollPosition
    );
  }
  checkScrollPosition();
});

onUpdated(() => {
  adjustScrollPosition();
  checkScrollPosition();
});
</script>

<template>
  <div class="overflow-x-auto pb-10 pt-4">
    <h2 class="text-xl font-semibold mb-4 !mt-4 w-full">
      Viimeisimmät ottelut
    </h2>
    <div class="flex items-center">
      <button
        @click="scroll(-1)"
        class="self-center mr-2"
        :class="{ 'opacity-50 cursor-not-allowed': atStart }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div
        ref="carousel"
        class="col-span-2 flex space-x-4 overflow-x-scroll no-scrollbar snap-x"
      >
        <MatchCard
          v-for="(match, index) in matches"
          :key="index"
          :team1="match.data.team1"
          :score1="match.data.score1"
          :team2="match.data.team2"
          :score2="match.data.score2"
          :slug="match.data.slug"
          :datetime="match.data.datetime"
          :league="match.data.league"
          class="snap-start"
        />
      </div>
      <button
        @click="scroll(1)"
        class="self-center ml-2"
        :class="{ 'opacity-50 cursor-not-allowed': atEnd }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
