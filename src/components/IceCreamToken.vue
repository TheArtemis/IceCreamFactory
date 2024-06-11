<script setup>
const props = defineProps({
    text: String,
    color: String,
    type: String
})
</script>

<template>
    <div class="white-round-box token" :style="{ borderColor: color }">
        <div class="token-text" :style="{ color: color }">
            {{ text }}
        </div>
    </div>
</template>

<style scoped>
.token {
    display: inline-block;
    padding: 2px 10px;
    border: solid 1px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
}

.token-text {
    font-size: 13px;
    padding-top: 2px;
    padding-bottom: 2px;
}
</style>