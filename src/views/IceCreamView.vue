<script setup>
import { useRouter } from 'vue-router';
import CreateIceCreamCard from '../components/CreateIceCreamBox.vue';

const router = useRouter();

</script>
<template>
    <transition name="slide">
        <CreateIceCreamCard />
    </transition>
</template>

<style scoped>
.slide-enter-active {
    animation: slide-in 0.5s ease forwards;
}

@keyframes slide-in {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
}
</style>
