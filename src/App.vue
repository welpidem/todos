<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/nav-bar.vue";
</script>

<template>
  <header>
    <Navigation />
  </header>
    <router-view/>

</template>
