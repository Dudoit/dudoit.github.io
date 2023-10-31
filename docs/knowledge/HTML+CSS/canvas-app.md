# Canvas

## 文字水印

<canvas ref="canvas1" width="500" height="100"></canvas>

<script setup>
import { ref, onMounted } from 'vue'

const canvas1 = ref()

onMounted(() => {
  runCtx1(canvas1)
})

const runCtx1 = (canvas) => {
  const ctx = canvas.value.getContext('2d')
  let g = ctx.createLinearGradient(0, 0, 120, 0)
  g.addColorStop(0, 'red')
  g.addColorStop(0.25, 'yellow')
  g.addColorStop(0.5, 'orange')
  g.addColorStop(0.75, 'hotpink')
  g.addColorStop(1, 'purple')
  ctx.fillStyle = g;
  ctx.font = '700 30px Arial'
  ctx.fillText('@dudoit', 0, 50)
}
</script>