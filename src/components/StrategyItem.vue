<template>
    <div class="strategy-item">
        <div class="strategy-image-box">
            <img :src="imageUrl" :alt="name" class="strategy-image" />
        </div>
        <div class="strategy-content">
            <h3 class="strategy-title">{{ name }}</h3>
            <p class="strategy-location">位置： {{ location }}</p>
            <p class="strategy-bestSeason">最佳旅游季节： {{ bestSeason }}</p>
            <p class="strategy-description">描述： {{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "StrategyItem",
    props: {
        imageUrl: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        bestSeason: {
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
.strategy-item {
    display: flex;
    flex-direction: column;
    width: 320px;
    border-radius: 12px;
    overflow: hidden;
    background-color: #f9f9f9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.strategy-item:hover {
    transform: translateY(-5px);
    /* 略微上移 */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    /* 悬浮时的阴影更显立体 */
}

.strategy-image-box {
    width: 100%;
    height: 200px;
    /* 更大气的图片展示 */
    overflow: hidden;
    border-bottom: 2px solid #f0f0f0;
    /* 增加分隔感 */
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

.strategy-bestSeason {
    font-size: 16px;
    font-style: italic;
    /* 斜体表示季节信息 */
    color: #4CAF50;
    /* 绿色字体象征自然 */
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