<script setup>
import { format } from '@/common/textFormatting';
const props = defineProps({
    onClick: Function,
    text: String,
    color: String,
    size: {
        type: String,
        default: "big"
    }
})

</script>

<template>
    <div class="smooth-button white-round-box poppins-semibold" :class="size" @click="(p) => onClick(p)"
        :style="{ backgroundColor: color }">
        {{ format(text) }}
    </div>
</template>

<style scoped>
.smooth-button {
    border-radius: 40px 60px 40px 60px;
    text-align: center;
    color: #f4f4f4;
    transition: all 0.3s ease-out;
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
}

.big {
    width: 300px;
    font-size: 24px;
    padding: 20px 0 20PX;
}

.small {
    width: 120px;
    font-size: 16px;
    padding: 10px 0 10px;
}

.smooth-button:hover {
    cursor: pointer;
    border-radius: 100px 100px 100px 100px;
}
</style>
