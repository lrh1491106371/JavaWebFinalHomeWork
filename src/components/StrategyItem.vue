<template>
    <div class="strategy-item">
        <div class="strategy-image-box">
            <img :src="strategy.image" :alt="strategy.title" class="strategy-image" />
        </div>
        <div class="strategy-content">
            <h3 class="strategy-title">{{ strategy.title }}</h3>
            <p class="strategy-description">{{ strategy.day1 }}</p>
            <p class="strategy-description">{{ strategy.day2 }}</p>
            <!-- <div class="strategy-stats">
                <img :src="require('@/assets/images/18.png')" alt="Rating" class="strategy-rating" />
                <img :src="require('@/assets/images/19.png')" alt="Likes" class="strategy-icon" /> 1251
                <img :src="require('@/assets/images/20.png')" alt="Comments" class="strategy-icon" /> 784
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        strategy: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.strategy-item {
    display: flex;
    flex-direction: column;
    width: 300px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f9f9f9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.strategy-item:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.strategy-image-box {
    width: 100%;
    height: 180px;
    overflow: hidden;
}

.strategy-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
}

.strategy-image:hover {
    transform: scale(1.1);
}

.strategy-content {
    padding: 15px;
    text-align: left;
}

.strategy-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin: 0;
}

.strategy-description {
    font-size: 14px;
    color: #666;
    margin: 5px 0;
    line-height: 1.5;
}

.strategy-stats {
    display: flex;
    align-items: center;
    margin-top: 10px;
    gap: 15px;
}

.strategy-rating {
    width: 100px;
    height: 20px;
    margin-right: 10px;
}

.strategy-icon {
    width: 20px;
    height: 20px;
}
</style>