<template>
  <div class="lotto-game">
    <span class="game-number">{{ String(game.id).padStart(2, '0') }}</span>
    <div class="balls-container">
      <LottoBall 
        v-for="(num, index) in game.numbers" 
        :key="index" 
        :number="num" 
      />
    </div>
  </div>
</template>

<script setup>
import LottoBall from './LottoBall.vue';

defineProps({
  game: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.lotto-game {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  margin-bottom: 8px;
  transition: background 0.2s ease;
}

.lotto-game:hover {
  background: rgba(255, 255, 255, 0.1);
}

.game-number {
  font-size: 14px;
  font-weight: 600;
  color: #adb5bd;
  min-width: 30px;
  margin-right: 12px;
}

.balls-container {
  display: flex;
  gap: 4px;
}

@media (max-width: 480px) {
  .lotto-game {
    padding: 10px 12px;
  }
  
  .balls-container {
    gap: 2px;
  }
}
</style>
