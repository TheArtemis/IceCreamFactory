<script setup>/* Script code is executed every time a component istance is created */
import { defineProps } from 'vue'

const props = defineProps({
    titleFirstLine: String,
    titleSecondLine: String,
    description: String,
    text: String,
    color: String,
    buttonPath: String,
    cardBorderStyle: String
})
</script>

<template>
    <div class='factory-card' :class="cardBorderStyle">
        <div class='content-wrapper'>
            <div class='card-title poppins-semibold'>
                <div class="title-line">{{ titleFirstLine }}</div>
                <div class="title-line">{{ titleSecondLine }}</div>
            </div>
            <div class='card-description poppins-medium'>{{ description }}</div>
            <div class='button-wrapper'>
                <button @click="$router.push({ name: buttonPath })" class='show-button poppins-semibold'
                    :style="{ backgroundColor: color }">
                    {{ text }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.factory-card {
    width: 411px;
    height: 411px;
    background-color: rgb(244, 244, 244);
    text-align: left;
    box-shadow: 0px 5px 21px -3px rgba(0, 0, 0, 0.12);
    --scale-amount: 1.05;
    --transition-time: 0.2s;
}

.factory-card .card-title {
    font-size: 48px;
    color: #000000;
    margin: 0px;
}

.card-title .title-line {
    line-height: 1;
}

.factory-card .content-wrapper {
    display: flex;
    flex-direction: column;
    padding: 50px;
    height: 310px;
}

.card-description {
    margin-top: 10px;
}

.border-regular {
    border-radius: 20px;
    transition: border-radius var(--transition-time), scale var(--transition-time);
}

.border-regular:hover {
    border-radius: 20px 100px 20px 200px;
    scale: var(--scale-amount);
}

.border-rounder-right {
    border-radius: 20px 60px 20px 60px;
    transition: border-radius var(--transition-time), scale var(--transition-time);
}

.border-rounder-right:hover {
    border-radius: 20px 200px 20px 200px;
    scale: var(--scale-amount);
}

.border-rounder-left {
    border-radius: 60px 20px 60px 20px;
    transition: border-radius var(--transition-time), scale var(--transition-time);
}

.border-rounder-left:hover {
    border-radius: 20px 20px 20px 250px;
    scale: var(--scale-amount);
}

.border-roundest-right {
    border-radius: 20px 60px 100px 20px;
    transition: border-radius var(--transition-time), scale var(--transition-time);
}

.border-roundest-right:hover {
    border-radius: 20px 200px 60px 200px;
    scale: var(--scale-amount);
}

.button-wrapper {
    margin-top: auto;
    display: flex;
}

.show-button:after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -2px;
    width: 0px;
    height: 2px;
    background: #333;
    transition: all 0.45s;
}

.show-button {
    border-radius: 20px;
    border: 0px;
    width: 150px;
    height: 62px;
    margin-left: auto;
    font-size: 32px;
    color: #FFFFFF;
    box-shadow: 0px 5px 21px -3px rgba(0, 0, 0, 0.12);
    text-decoration: underline 0.1em rgba(244, 244, 244, 0);
    transition: text-decoration-color 300ms;
}

/* .show-button:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    transform-origin: bottom center;
    transition: transform 0.25s ease-out;
} */

/* .show-button:hover:after {
    transform: scaleX(1);
    transform-origin: bottom center;
} */

.show-button:hover {
    text-decoration-color: rgb(255, 255, 255);
    cursor: pointer;
}
</style>