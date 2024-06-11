<script setup>
import IceCreamToken from '@/components/IceCreamToken.vue';
import { format } from '@/common/textFormatting';
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
            <ul class="tokens-list">
                <li v-for="token in tokens" :style="{ marginRight: '3px', marginBottom: '3px' }" :key="token.id">
                    <IceCreamToken :text="format(token.name)" :type="token.type" :color="tokenColor" />
                </li>
            </ul>
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