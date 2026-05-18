<template>
  <div class="pig-gallery">
    <img v-for="img in images" :key="img" :src="img" :alt="img" />
  </div>
</template>

<script setup>
const images = [
  '/不赖猪.jpg',
  '/俯视猪.jpg',
  '/分布猪.png',
  '/唱片猪(旋转猪).gif',
  '/干嘛…….jpg',
  '/抽象猪.png',
  '/拱翻群友.jpg',
  '/更多的猪.jpg',
  '/畅销猪.png',
  '/笨蛋.png',
  '/董卓猪(真是一对苦命鸳鸯啊).png',
  '/诶_.png',
  '/辅猪 (1).jpg',
  '/当你想对我恶语相向时,请注意屏幕后面的我可是这样的.jpg',
]
</script>

<style scoped>
.pig-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  padding: 48px 24px;
}
.pig-gallery img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.2s;
}
.pig-gallery img:hover {
  transform: scale(1.1);
}
</style>
