<template>
    <div class="scroll-reveal" ref="scrollReveal">
        <h2>
            <span>{{ title }}</span>
        </h2>
        <p>
            <span>{{ description }}</span>
        </p>
    </div>
</template>

<script>
export default {
    name: "ColorfulText",
    props: {
        title: {
            type: String,
            required: true, // 标题是必传的
        },
        description: {
            type: String,
            default: "", // 描述内容是可选的
        },
    },
    mounted() {
        // 使用 IntersectionObserver 监听滚动效果
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: 0.5, // 当元素可见 50% 时触发
        });
        observer.observe(this.$refs.scrollReveal);
    },
    methods: {
        handleIntersection(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 如果元素进入视口，添加动画类
                    entry.target.classList.add("visible");
                }
            });
        },
    },
};
</script>

<style scoped>
/* 滚动文字变色效果 */
.scroll-reveal {
    text-align: center;
    padding: 15vh 0;
    opacity: 0;
    /* 初始透明度为0 */
    transform: translateY(30px);
    /* 初始位置稍微下移 */
    transition: opacity 1s, transform 1s;
    /* 过渡动画 */
}

.scroll-reveal.visible {
    opacity: 1;
    /* 当元素进入视口时，逐渐显现 */
    transform: translateY(0);
    /* 回到原始位置 */
}

/* 设置渐变文字效果 */
.scroll-reveal h2 span,
.scroll-reveal p span {
    color: transparent;
    /* 透明文字 */
    background-clip: text;
    /* 文字内背景 */
    background-image: linear-gradient(90deg, #10b9fb, #1b17e8);
    /* 渐变色：蓝色到紫色 */
    background-size: 0% 100%;
    background-repeat: no-repeat;
    animation: animateText 3s forwards;
    /* 3秒动画，逐渐展开背景 */
}

.scroll-reveal h2 span {
    font-size: 5rem;
    font-weight: bold;
    /* 加粗文字 */
}

.scroll-reveal p span {
    font-size: 1.75rem;
    font-style: italic;
    /* 斜体 */
    max-width: 55ch;
    margin: 0 auto;
    line-height: 1.3;
}

/* 动画效果 */
@keyframes animateText {
    0% {
        background-size: 0% 100%;
        /* 从0开始 */
    }

    100% {
        background-size: 100% 100%;
        /* 最终显示渐变 */
    }
}
</style>