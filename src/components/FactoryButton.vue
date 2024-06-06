<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    buttonText: String,
    buttonColor: String
})
</script>

<template>
    <div class="factory-button">
        <button class='show-button poppins-semibold' :style="{ backgroundColor: buttonColor }">{{ buttonText }}</button>
    </div>
</template>