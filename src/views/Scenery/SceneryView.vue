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
        <div div class="hot-strategies">
            <p class="section-title">热门攻略</p>
            <p class="section-subtitle">Popular Strategies</p>
            <div class="strategy-list">
                <!-- 按行显示策略 -->
                <div div class="strategy-row" v-for="(row, rowIndex) in chunkedStrategies" :key="rowIndex">
                    <StrategyItem v-for="(strategy, index) in row" :key="index" :imageUrl="strategy.imageUrl"
                        :name="strategy.name" :location="strategy.location" :bestSeason="strategy.bestSeason"
                        :description="strategy.description" />
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./SceneryView.js"></script>
<style src="./SceneryView.css" scoped></style>