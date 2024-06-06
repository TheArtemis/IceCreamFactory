<script setup>
const props = defineProps({
    title: String,
    description: String,
    titleSize: { type: String, default: "36px" },
    descriptionSize: String
});
</script>

<template>
    <div>
        <h2 class="poppins-semibold title" :style="{ fontSize: titleSize }">{{ title }}</h2>
        <p class="poppins-medium description" :style="{ fontSize: descriptionSize }">{{ description }}</p>
    </div>
</template>

<style scoped>
.title {
    margin-bottom: 5px;
}

.description {
    margin-top: 0px;
    color: #565656;
}
</style>
