<template>
    <div class="scenery-view">
        <!-- 使用封装好的标题组件 -->
        <ColorfulText title="探索美景"
            description="温州风景以山海兼备著称，既有瑰丽的自然风光，也有悠久的人文景观。雁荡山以奇峰怪石、瀑布云海而闻名，被誉为“海上名山”；楠溪江风景区则以清澈的溪流、古朴的村落和田园风光吸引游客。此外，江心屿是中国四大名屿之一，既是风景胜地，又承载了温州悠久的历史文化。温州的沿海风光也十分迷人，洞头列岛有“百岛之县”之称，是度假休闲的绝佳选择。无论是山间漫步还是海边吹风，温州都能让人感受到自然与人文的完美结合。" />

        <!-- 热门景点 -->
        <div class="hot-destinations">
            <p class="section-title">热门景点</p>
            <p class="section-subtitle">Popular Destinations</p>
            <ul class="destination-list main">
                <li v-for="(item, index) in destinations" :key="index" class="destination-item">
                    <img :src="item.image" :alt="item.name" class="destination-image" />
                    <div class="flag">{{ item.name }}</div>
                </li>
            </ul>
        </div>

        <!-- 热门攻略 -->
        <div class="hot-strategies">
            <p class="section-title">热门攻略</p>
            <p class="section-subtitle">Popular Strategies</p>
            <div class="strategy-list">
                <div class="strategy-row" v-for="(row, rowIndex) in chunkedStrategies" :key="rowIndex">
                    <StrategyItem v-for="(strategy, index) in row" :key="index" :strategy="strategy" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ColorfulText from "@/views/components/ColorfulText.vue"; // 引入标题组件
import StrategyItem from "@/views/components/StrategyItem.vue"; // 引入封装的 StrategyItem 组件

export default {
    name: "SceneryView",
    components: {
        ColorfulText,
        StrategyItem,
    },
    data() {
        return {
            destinations: [
                { name: "雁荡山方洞", image: require("@/assets/images/Culture/1.jpg") },
                { name: "大罗山百家尖", image: require("@/assets/images/Culture/2.jpg") },
                { name: "楠溪江", image: require("@/assets/images/Culture/3.jpg") },
                { name: "瑞安桐溪", image: require("@/assets/images/Culture/4.jpg") },
                { name: "洞头连港海岸带", image: require("@/assets/images/Culture/5.jpg") },
                { name: "五马街", image: require("@/assets/images/Culture/6.jpg") },
            ],
            strategies: [
                {
                    title: "拉萨经典四日游",
                    day1: "D1 布达拉宫→宗角禄康公园→大昭寺→八廓街",
                    day2: "D2 哲蚌寺→娘热民俗风情园→色拉寺",
                    image: require("@/assets/images/HomeView/11.jpg"),
                },
                {
                    title: "拉萨经典四日游",
                    day1: "D1 布达拉宫→宗角禄康公园→大昭寺→八廓街",
                    day2: "D2 哲蚌寺→娘热民俗风情园→色拉寺",
                    image: require("@/assets/images/Culture/1.jpg"),
                },
                {
                    title: "拉萨经典四日游",
                    day1: "D1 布达拉宫→宗角禄康公园→大昭寺→八廓街",
                    day2: "D2 哲蚌寺→娘热民俗风情园→色拉寺",
                    image: require("@/assets/images/Culture/2.jpg"),
                },
                {
                    title: "拉萨经典四日游",
                    day1: "D1 布达拉宫→宗角禄康公园→大昭寺→八廓街",
                    day2: "D2 哲蚌寺→娘热民俗风情园→色拉寺",
                    image: require("@/assets/images/Culture/3.jpg"),
                },
                {
                    title: "拉萨经典四日游",
                    day1: "D1 布达拉宫→宗角禄康公园→大昭寺→八廓街",
                    day2: "D2 哲蚌寺→娘热民俗风情园→色拉寺",
                    image: require("@/assets/images/Culture/4.jpg"),
                },
            ],
        };
    },
    computed: {
        // 将攻略数据每3个分成一组
        chunkedStrategies() {
            const chunkSize = 4;
            const chunks = [];
            for (let i = 0; i < this.strategies.length; i += chunkSize) {
                chunks.push(this.strategies.slice(i, i + chunkSize));
            }
            return chunks;
        },
    },
};
</script>

<style scoped>
/* 公共样式 */
.scenery-view {
    width: 100%;
    /* 确保宽度为视口宽度 */
    max-width: 100vw;
    /* 防止溢出视口宽度 */
    overflow-x: hidden;
    /* 禁止页面左右滚动 */
    padding: 20px;
    box-sizing: border-box;
    /* 确保 padding 不会导致溢出 */
}

/* 热门景点样式 */
.hot-destinations {
    margin: 20px auto;
    text-align: center;
}

.section-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.section-subtitle {
    font-size: 16px;
    color: #888;
    margin-bottom: 20px;
}

/* 热门景点样式 */
.main {
    width: 1092px;
    height: 534px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    position: relative;
}

.main li {
    height: 100%;
    flex: 1;
    border: 1px solid #999;
    position: relative;
    transition: all 0.5s ease;
    overflow: hidden;
}

.main li img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.main li:hover img {
    transform: scale(1.1);
}

.main:hover li {
    flex: 0.9;
    transition: all 0.5s ease;
}

.main li:hover {
    flex: 3.5;
}

.flag {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
}

/* 热门攻略样式 */
.hot-strategies {
    width: 1000px;
    margin: 20px auto;
    text-align: center;
}
.strategy-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;/* 水平居中 */
}

.strategy-row {
    display: flex;
    justify-content: center;
    gap: 20px;/* 可选，增加子项之间的间距 */
}
</style>