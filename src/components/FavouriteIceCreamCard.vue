<script setup>
import { onMounted, ref } from 'vue';
import TitleWithDescription from '@/components/TitleWithDescription.vue';
import TokenListWithTitle from '@/components/TokenListWIthTitle.vue';
import { getIceCream } from '@/api/iceCream';
import { addPeriod, format } from '@/common/textFormatting';
import { toToken } from '@/common/objectProcessing';

const props = defineProps({
    iceCreamID: String
});

const iceCream = ref(null);

onMounted(async () => {
    const iceCreamDTO = await getIceCream(props.iceCreamID);
    if (iceCreamDTO.code == 1)
        iceCream.value = iceCreamDTO.iceCream;
    else
        console.error(iceCreamDTO.message);
});

const tokenColorCone = "#C0B9E8"
const tokenColorFlavors = "#E8B9B9"
const tokenColorToppings = "#E8CDB9"

const notLoadedIceCream = {
    id: 1,
    name: "Ice Cream Name",
    description: "Ice Cream description here.",
    cone: {
        id: 1,
        name: "Cone Name",
        price: "0"
    },
    flavors: [{
        id: 1,
        name: "Flavor 1 Name",
        price: "0"
    }, {
        id: 2,
        name: "Flavor 2 Name",
        price: "0"
    }],
    toppings: [{
        id: 1,
        name: "Topping 1 Name",
        price: "0"
    }, {
        id: 2,
        name: "Topping 2 Name",
        price: "0"
    }]
}
</script>

<template>
    <div class="white-round-box card">
        <div v-if="iceCream == null">
            <TitleWithDescription :title="notLoadedIceCream.name" :description="notLoadedIceCream.description"
                title-size="28px" description-size="14px" />
            <TokenListWithTitle title="Cone" :tokens="toToken(notLoadedIceCream.cone, 'cone')"
                :tokenColor="tokenColorCone" />
            <TokenListWithTitle title="Flavors" :tokens="toToken(notLoadedIceCream.flavors, 'flavor')"
                :tokenColor="tokenColorFlavors" />
            <TokenListWithTitle title="Toppings" :tokens="toToken(notLoadedIceCream.toppings, 'topping')"
                :tokenColor="tokenColorToppings" />
            <div class="button-get-wrapper">
                <div class="button-get poppins-semibold">
                    Get
                </div>
            </div>
        </div>

        <div v-else>
            <TitleWithDescription :title="format(iceCream.name)" :description="addPeriod(iceCream.description)"
                title-size="28px" description-size="14px" />
            <TokenListWithTitle title="Cone" :tokens="toToken(iceCream.cone, 'cone')" :tokenColor="tokenColorCone" />
            <TokenListWithTitle title="Flavors" :tokens="toToken(iceCream.flavors, 'flavor')"
                :tokenColor="tokenColorFlavors" />
            <TokenListWithTitle title="Toppings" :tokens="toToken(iceCream.toppings, 'topping')"
                :tokenColor="tokenColorToppings" />
            <div class="button-get-wrapper">
                <div class="button-get poppins-semibold">
                    Get
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.card {
    height: 455px;
    width: 250px;
    padding: 10px 30px 50px 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
}

.card:first-child {
    margin-left: 20px;
}

.card:last-child {
    margin-right: 20px;
}

.button-get-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.button-get {
    border-radius: 40px 60px 40px 60px;
    text-align: center;
    display: inline-block;
    color: #f4f4f4;
    padding: 10px 40px;
    font-size: 24px;
    background-color: #B9E8E2;
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease-out;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
}

.button-get:hover {
    cursor: pointer;
    border-radius: 100px 100px 100px 100px;
    /* animation: borderWobble 3s infinite; */
}

/* @keyframes borderWobble {
    0% {
        border-radius: 40px 60px 40px 60px;
    }

    25% {
        border-radius: 100px 100px 100px 100px;
    }

    50% {
        border-radius: 60px 40px 60px 40px;
    }

    75% {
        border-radius: 100px 100px 100px 100px;
    }

    100% {
        border-radius: 40px 60px 40px 60px;
    }
} */
</style>