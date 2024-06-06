<script setup>
import IceCreamToken from './IceCreamToken.vue';
const props = defineProps({
    tokens: Array
});

const tokenColorObj = {
    cone: "#C0B9E8",
    flavor: "#E8B9B9",
    topping: "#E8CDB9"
}
</script>
<template>
    <ul class="tokens-list">
        <li v-for="token in tokens" :style="{ marginRight: '3px', marginBottom: '3px' }" :key="token.id">
            <IceCreamToken :text="token.name" :type="token.type" :color="tokenColorObj[token.type]" />
        </li>
    </ul>
</template>

<style scoped>
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