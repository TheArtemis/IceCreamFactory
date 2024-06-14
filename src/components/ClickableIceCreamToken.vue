<script setup>
import { IceCreamToken } from '@/components/IceCreamToken.vue';
import { ref } from 'vue';

const emit = defineEmits(['click']);

const props = defineProps({
    text: String,
    color: String,
    type: String
});

const active = ref(false);

function handleClick() {
    active.value = !active.value;
    emit('click', active.value);
}

</script>

<template>
    <div class="clickable-icecream-token" @click="handleClick">
        <IceCreamToken />
    </div>
</template>