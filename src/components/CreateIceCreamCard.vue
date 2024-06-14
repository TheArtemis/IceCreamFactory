<script setup>
import { ref, onMounted } from 'vue';
import { getAllCones } from '@/api/cone';
import { getAllFlavors } from '@/api/flavor';
import { getAllToppings } from '@/api/topping';
import SmoothButton from '@/components/SmoothButton.vue';

const name = ref(">A name for your Ice Cream please.");
const description = ref(">All Ice Creams need a description.");

const cones = ref([]);
const flavors = ref([]);
const toppings = ref([]);

const selectedCone = ref([]);
const selectedFlavors = ref([]);
const selectedToppings = ref([]);

onMounted(async () => {
    console.log("CreateIceCreamCard mounted");
    const conesDTO = await getAllCones();
    if (conesDTO.code == 1)
        cones.value = conesDTO.cones;
    else
        console.error(conesDTO.message);

    const flavorsDTO = await getAllFlavors();
    if (flavorsDTO.code == 1)
        flavors.value = flavorsDTO.flavors;
    else
        console.error(flavorsDTO.message);

    const toppingsDTO = await getAllToppings();
    if (toppingsDTO.code == 1)
        toppings.value = toppingsDTO.toppings;
    else
        console.error(toppingsDTO.message);
});
</script>

<template>
    <div class="create-icecream-card">
        <form>
            <div class="content">
                <input class="input name poppins-semibold" type="text" :placeholder="name" />
                <textarea class="input description poppins-semibold" type="text" :placeholder="description" />
            </div>
            <SmoothButton text="Create" color="red" size="big" />
        </form>
    </div>

    <div class="white-round-box create-icecream-card">

    </div>
</template>

<style scoped>
.create-icecream-card {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    padding: 0px;
}

.create-icecream-card .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 50px;
}

.input {
    width: fit-content;
    font-size: 40px;
    border: none;
    border-radius: 10px;
    background-color: transparent;
}

.input:focus {
    outline: none;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    color: rgb(103, 128, 126);
}


.name::placeholder {
    color: #b6b6b6;
}

.description {
    font-size: 30px;
    width: 100%;
    resize: none;
    color: rgb(129, 129, 129);
}

.description::placeholder {
    color: #bdbdbd;
}
</style>