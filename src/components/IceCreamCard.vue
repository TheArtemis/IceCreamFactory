<script setup>
import TitleWithDescription from '@/components/TitleWithDescription.vue';
import MixedIceCreamTokenList from '@/components/MixedIceCreamTokenList.vue';
import SmoothButton from './SmoothButton.vue';

const props = defineProps({
    id: String,
    title: String,
    description: String,
    tokens: Array
});

</script>

<template>
    <div class="white-round-box card">
        <TitleWithDescription :title="title" :description="description" title-size="28px" description-size="14px" />

        <MixedIceCreamTokenList :tokens="tokens" />

        <div class="button-get-wrapper">
            <SmoothButton button-text="Get" button-color="#B9E8E2" size="small" />
        </div>
    </div>
</template>

<style scoped>
.card {
    padding: 20px;
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #f4f4f4;
    border-radius: 20px;
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
}

.button-get-wrapper {
    margin-top: auto;
}
</style>
