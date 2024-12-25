<template>
    <div class="container">
        <div class="cards">
            <div class="card" v-for="(item, index) in cardItems" :key="index">
                <div v-if="item.text">{{ item.text }}</div>
                <img v-else :src="item.img" alt="Card Image" />
            </div>
        </div>
    </div>
</template>

<script src="./HomeView..js"></script>
<style src="./HomeView.css" scoped></style>