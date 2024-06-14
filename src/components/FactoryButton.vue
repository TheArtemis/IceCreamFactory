<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    text: String,
    color: String
})
</script>

<template>
    <div class="factory-button">
        <button class='show-button poppins-semibold' :style="{ backgroundColor: color }">{{ text }}</button>
    </div>
</template>