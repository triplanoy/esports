<script setup lang="ts">
import MatchReportCard from './MatchReportCard.vue';
import matchReports from '../../data/match-reports.json';
</script>

<template>
  <MatchReportCard
    v-for="(match, index) in matchReports"
    :key="index"
    :link="match.data.slug"
    :team1="match.data.team1"
    :team2="match.data.team2"
    :score1="match.data.score1"
    :score2="match.data.score2"
    :datetime="match.data.datetime"
    :league="match.data.league"
    :maps="match.data.maps"
  />
</template>
