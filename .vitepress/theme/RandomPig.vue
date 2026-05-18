<template>
  <img :src="img" alt="pig" class="pig-deco" />
</template>

<script setup>
const pigs = [
  '/不赖猪.jpg', '/俯视猪.jpg', '/分布猪.png', '/唱片猪(旋转猪).gif',
  '/干嘛…….jpg', '/抽象猪.png', '/拱翻群友.jpg', '/更多的猪.jpg',
  '/畅销猪.png', '/笨蛋.png', '/董卓猪(真是一对苦命鸳鸯啊).png',
  '/诶_.png', '/辅猪 (1).jpg', '/当你想对我恶语相向时,请注意屏幕后面的我可是这样的.jpg',
]
const img = pigs[Math.floor(Math.random() * pigs.length)]
</script>

<style scoped>
.pig-deco {
  display: block;
  margin: 24px auto;
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 16px;
  opacity: 0.85;
}
</style>
