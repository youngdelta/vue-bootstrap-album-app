<template>
  <span :class="['lotto-ball', ballColorClass]">
    {{ number }}
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  number: {
    type: Number,
    required: true
  }
});

/**
 * 번호에 따른 색상 클래스 반환
 * 1-10: 노랑, 11-20: 파랑, 21-30: 빨강, 31-40: 회색, 41-45: 초록
 */
const ballColorClass = computed(() => {
  if (props.number <= 10) return 'ball-yellow';
  if (props.number <= 20) return 'ball-blue';
  if (props.number <= 30) return 'ball-red';
  if (props.number <= 40) return 'ball-gray';
  return 'ball-green';
});
</script>

<style scoped>
.lotto-ball {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin: 0 4px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 
    inset 0 -3px 6px rgba(0, 0, 0, 0.2),
    inset 0 3px 6px rgba(255, 255, 255, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.2);
}

.ball-yellow {
  background: linear-gradient(145deg, #ffd700, #ffb300);
  color: #333;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
}

.ball-blue {
  background: linear-gradient(145deg, #4dabf7, #1971c2);
}

.ball-red {
  background: linear-gradient(145deg, #ff6b6b, #c92a2a);
}

.ball-gray {
  background: linear-gradient(145deg, #868e96, #495057);
}

.ball-green {
  background: linear-gradient(145deg, #51cf66, #2f9e44);
}
</style>
