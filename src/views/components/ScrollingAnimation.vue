<template>
  <div>
    <!-- 动态的水平滚动标签 -->
    <div class="scrolled" data-animated="true">
      <ul class="tag-list scrolled__inner">
        <li v-for="(item, index) in tags" :key="index">{{ item }}</li>
      </ul>
    </div>

    <!-- 动态的水平滚动图片 -->
    <div class="scrolled" data-animated="true" data-direction="right" data-duration="slow">
      <div class="scrolled__inner">
        <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" class="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollingAnimation",
  props: {
    tags: {
      type: Array,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.addAnimation();
  },
  methods: {
    addAnimation() {
      const scrolled = document.querySelectorAll(".scrolled");

      scrolled.forEach((scrolled) => {
        if (scrolled.getAttribute("data-animated")) {
          const scrolledInner = scrolled.querySelector(".scrolled__inner");
          const scrolledContent = Array.from(scrolledInner.children);

          scrolledInner.addEventListener("mouseenter", () => {
            scrolledInner.style.animationPlayState = "paused";
          });

          scrolledInner.addEventListener("mouseleave", () => {
            scrolledInner.style.animationPlayState = "running";
          });

          scrolledContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            scrolledInner.appendChild(duplicatedItem);
          });
        }
      });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

:root {
  --clr-neutral-100: hsl(0, 0%, 100%);
  --clr-primary-100: hsl(205, 15%, 58%);
  --clr-primary-400: hsl(215, 25%, 27%);
  --clr-primary-800: hsl(217, 33%, 17%);
  --clr-primary-900: hsl(218, 33%, 9%);
}

html {
  color-scheme: dark;
}

body {
  font-size: 1.125rem;
  background-color: var(--clr-primary-800);
  font-family: 'Poppins', sans-serif;
}

.tag-list {
  margin: 0;
  padding-inline: 0;
  list-style: none;
}

.tag-list li {
  font-size: 5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  /* 调整字体大小 */
  padding: 1rem;
  background: var(--clr-primary-400);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem -0.25rem var(--clr-primary-900);
}

.scrolled {
  max-width: 1000px;
  margin: 1rem auto;
  /* 缩小间隔 */
}

.scrolled__inner {
  width: max-content;
  display: flex;
  gap: 1rem;
  padding-block: 1rem;
  white-space: nowrap;
  animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, normal) linear infinite;
}

.scrolled[data-animated="true"] {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scrolled[data-direction="right"] .scrolled__inner {
  --_animation-direction: reverse;
}

.scrolled[data-direction="left"] .scrolled__inner {
  --_animation-direction: normal;
}

.scrolled[data-duration="fast"] .scrolled__inner {
  --_animation-duration: 20s;
}

.scrolled[data-duration="slow"] .scrolled__inner {
  --_animation-duration: 60s;
}

@keyframes scroll {
  to {
    transform: translateX(-50%);
  }
}

.img {
  width: 500px;
  /* 调整图片宽度 */
  height: 300px;
  /* 调整图片高度 */
  border-radius: 0.5rem;
  object-fit: cover;
}
</style>