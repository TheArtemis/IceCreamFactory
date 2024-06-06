<script setup>
const props = defineProps({
    onClick: Function,
    buttonText: String,
    buttonColor: String,
    size: {
        type: String,
        default: "big"
    }
})

function formatButtonText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

</script>

<template>
    <div class="smooth-button white-round-box poppins-semibold" :class="size" @click="(p) => onClick(p)"
        :style="{ backgroundColor: buttonColor }">
        {{ formatButtonText(buttonText) }}
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
