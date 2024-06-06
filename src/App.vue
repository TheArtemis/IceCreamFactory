<script setup>
import { useRouter } from 'vue-router';
import Navbar from './components/Navbar.vue';
const router = useRouter();
</script>

<template>
  <div class="app-container">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
}
</style>
