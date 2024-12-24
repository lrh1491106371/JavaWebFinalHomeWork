<template>
    <div class="card">
        <div class="img-box">
            <img :src="imageSrc" :alt="title" />
        </div>
        <p>{{ description }}</p>
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: "FoodCard",
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.card {
    position: relative;
    width: 320px;
    height: 250px;
    background: linear-gradient(90deg, #d6eef9, #d0e1f9);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: 0.5s;
}

.card:hover {
    height: 350px;
}

.img-box {
    position: absolute;
    inset: 20px 20px 50px 20px;
    background: #f00;
    border-radius: 15px;
    transition: 0.5s;
}

.card:hover .img-box {
    inset: -50px 60px 250px 60px;
    box-shadow: 0 0 0 10px var(--clr);
}

.img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
}

.img-box::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: transparent;
    right: -30px;
    border-top-left-radius: 20px;
    transform: translateY(-100px);
    opacity: 0;
    box-shadow: -5px -5px 0 4px var(--clr);
    pointer-events: none;
    transition: 0.5s;
}

.card:hover .img-box::after {
    opacity: 1;
    transform: translateY(50px);
}

.img-box::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: transparent;
    left: -30px;
    border-top-right-radius: 20px;
    transform: translateY(-100px);
    opacity: 0;
    box-shadow: 5px -5px 0 4px var(--clr);
    pointer-events: none;
    transition: 0.5s;
}

.card:hover .img-box::before {
    opacity: 1;
    transform: translateY(50px);
}

p {
    position: relative;
    padding: 40px;
    text-align: center;
    opacity: 0;
    transform: translateY(-50px);
    transition: 0.5s;
    color: #000000;
}

.card:hover p {
    opacity: 1;
    transform: translateY(40px);
}

h2 {
    position: absolute;
    bottom: -6px;
    color: #333;
    transition: 0.5s;
    font-weight: 600;
}

.card:hover h2 {
    padding: 5px 25px;
    background: #f8c7d4;
    color: #fff;
    bottom: -25px;
    border-radius: 15px;
    box-shadow: 0 0 0 10px var(--clr);
}
</style>