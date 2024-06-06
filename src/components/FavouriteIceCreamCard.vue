<script setup>
import TitleWithDescription from './TitleWithDescription.vue';
import TokenListWithTitle from './TokenListWIthTitle.vue';
import SmoothButton from './SmoothButton.vue';

const IceCreamName = "Pistacchione"
const tokenColorCone = "#C0B9E8"
const Conetokens = [{
    id: 1,
    name: "Cono al pistacchio",
    type: "cone"
}]

const tokenColorFlavors = "#E8B9B9"
const Flavortokens = [{
    id: 2,
    name: "Pistacchio di Bronte",
    type: "flavor"
},
{
    id: 3,
    name: "Dark Pistacchio",
    type: "flavor"
}
]

const tokenColorToppings = "#E8CDB9"
const Toppingtokens = [{
    id: 1,
    name: "Scaglie al Pistacchio",
    type: "topping"
},
{
    id: 2,
    name: "Pistacchietti",
    type: "topping"
},
{
    id: 3,
    name: "Pistacchini",
    type: "topping"
}
]

</script>

<template>
    <div class="white-round-box card">
        <TitleWithDescription title="Pistacchione"
            description="A endless classic that will expand your perceprion of the world. An usual day for our Pistacchione Ice Cream."
            title-size="28px" description-size="14px" />
        <TokenListWithTitle title="Cone" :tokens="Conetokens" :tokenColor="tokenColorCone" />
        <TokenListWithTitle title="Flavors" :tokens="Flavortokens" :tokenColor="tokenColorFlavors" />
        <TokenListWithTitle title="Toppings" :tokens="Toppingtokens" :tokenColor="tokenColorToppings" />
        <div class="button-get-wrapper">
            <div class="button-get poppins-semibold">
                Get
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
}
</style>