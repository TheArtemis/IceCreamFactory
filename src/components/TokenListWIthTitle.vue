<script setup>
import IceCreamToken from './IceCreamToken.vue';
const props = defineProps({
    title: String,
    tokenColor: String,
    tokens: Array
});
</script>
<template>
    <div>
        <h2>{{ title }}</h2>
        <ul class="tokens-list">
            <li v-for="token in tokens" :style="{ marginRight: '3px', marginBottom: '3px' }" :key="token.id">
                <IceCreamToken :text="token.name" :type="token.type" :color="tokenColor" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
h2 {
    margin: 0px;
}

ul {
    margin-top: 0px;
}

.tokens-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
}
</style>