<template>
    <el-card shadow="always" class="history-item-card">
        <div class="history-item-container">
            <img :src="image" class="section-image" alt="图片" />
            <div class="text-content">
                <h3>{{ title }}</h3>
                <p>{{ description }}</p>
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'HistoryItem',
    props: {
        image: {
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
/* 卡片整体样式 */
.history-item-card {
    padding: 15px;
    border-radius: 12px;
    background: linear-gradient(145deg, #ffffff, #f0f0f0);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.7);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.history-item-card:hover {
    transform: translateY(-5px);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8);
}

/* 卡片内部容器样式 */
.history-item-container {
    display: flex;
    align-items: center;
    gap: 20px;
}

/* 图片样式 */
.section-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 12px;
    border: 3px solid #e0e0e0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section-image:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 文字内容样式 */
.text-content {
    flex: 1;
}

h3 {
    margin: 0;
    font-size: 1.3em;
    font-weight: bold;
    color: #333;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

p {
    margin-top: 10px;
    font-size: 0.95em;
    color: #666;
    line-height: 1.4;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.6);
}

/* 响应式适配 */
@media (max-width: 768px) {
    .history-item-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    .section-image {
        width: 100%;
        height: auto;
    }
}
</style>