<template>
    <el-card shadow="always" class="history-item-card">
        <div class="history-item-container">
            <img :src="imageUrl" class="section-image" alt="图片" />
            <div class="text-content">
                <h3>{{ name }}</h3>
                <p>介绍： {{ description }}</p>
                <p>起源时间： {{ originPeriod }}</p> 
                <p>文化影响力： {{ culturalImpact }}</p> 
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'CultureItem',
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
        originPeriod: {
            type: String,
            required: true,
        },
        culturalImpact: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
/* 卡片整体样式 */
.history-item-card {
    padding: 20px;
    border-radius: 16px;
    background: linear-gradient(145deg, #ffffff, #f8f9fa);
    /* 柔和的渐变背景 */
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8);
    /* 立体化效果 */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    /* 鼠标悬停时显示手势 */
}

.history-item-card:hover {
    transform: translateY(-8px);
    /* 悬浮提升效果 */
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.9);
    /* 更显立体的阴影 */
}

/* 卡片内部容器样式 */
.history-item-container {
    display: flex;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
    /* 在小屏幕上自动换行 */
}

/* 图片样式 */
.section-image {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 16px;
    border: 3px solid #e8e8e8;
    /* 更浅的边框颜色 */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section-image:hover {
    transform: scale(1.1);
    /* 悬浮时略微放大 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    /* 更明显的悬浮阴影 */
}

/* 文字内容样式 */
.text-content {
    flex: 1;
    color: #444;
    /* 主色调更柔和 */
}

h3 {
    margin: 0;
    font-size: 1.5em;
    font-weight: 700;
    /* 标题更醒目 */
    color: #2c3e50;
    /* 深蓝灰色 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    /* 为标题增加立体感 */
}

p {
    margin-top: 12px;
    font-size: 1em;
    color: #555;
    /* 中性灰色 */
    line-height: 1.6;
    text-align: justify;
    /* 文本两端对齐 */
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
    /* 增加柔和效果 */
}

/* 强调信息的样式 */
.features {
    margin-top: 10px;
    color: #007BFF;
    /* 蓝色强调文本 */
    font-weight: 600;
}

.rating {
    margin-top: 5px;
    color: #FF5722;
    /* 橙色评分信息 */
    font-weight: bold;
}

/* 响应式适配 */
@media (max-width: 768px) {
    .history-item-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .section-image {
        width: 100%;
        height: auto;
        max-height: 250px;
    }

    h3 {
        font-size: 1.3em;
        /* 小屏幕标题大小调整 */
    }

    p {
        font-size: 0.95em;
        /* 小屏幕文本稍微缩小 */
    }
}
</style>