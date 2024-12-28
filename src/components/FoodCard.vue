<template>
    <div class="card">
        <div class="img-box">
            <!-- 使用 :src 绑定图片 -->
            <img :src="imageUrl" :alt="title" />
        </div>
        <p>{{ description }}
            <br>
            特点： {{ features }}
            <br>
            评分： {{ rating }}
        </p>
        <h2>{{ name }}</h2>
        <!-- <p>{{ features }}</p> 
        <p>评分：{{ rating }}</p>  -->
    </div>
</template>

<script>
export default {
    name: "FoodCard",
    props: {
        imageUrl: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        features: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
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