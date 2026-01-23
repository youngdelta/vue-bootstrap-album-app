<template>
  <div class="lotto-recommender">
    <header class="header">
      <h1>Lotto 6/45</h1>
    </header>

    <div class="action-section">
      <button 
        :class="['generate-btn', { generating: isGenerating }]" 
        @click="handleGenerate" 
        :disabled="isGenerating"
      >
        {{ isGenerating ? '번호 생성중...' : `${GAME_COUNT}게임 번호 생성` }}
      </button>
    </div>

    <div v-if="games.length > 0" class="games-section">
      <div class="games-list">
        <LottoGame 
          v-for="game in games" 
          :key="game.id" 
          :game="game" 
        />
      </div>
    </div>

    <footer class="footer">
      <p>* 역대 1등 당첨번호 조합은 생성에서 제외됩니다.</p>
      <p>* 로또는 무작위 추첨으로 당첨을 보장하지 않습니다.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { generateMultipleGames } from '../../utils/lottoGenerator';
import LottoGame from './LottoGame.vue';

const GAME_COUNT = 150;

const games = ref([]);
const isGenerating = ref(false);

const handleGenerate = () => {
  isGenerating.value = true;

  // 애니메이션 효과를 위한 약간의 딜레이
  setTimeout(() => {
    const newGames = generateMultipleGames(GAME_COUNT);
    games.value = newGames;
    isGenerating.value = false;
  }, 300);
};
</script>

<style scoped>
.lotto-recommender {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.5rem;
  margin: 0;
  background: linear-gradient(135deg, #ffd700, #ff6b6b, #4dabf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: #adb5bd;
  margin: 8px 0 16px;
  font-size: 1rem;
}

.info-box {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: #868e96;
}

.info-box span {
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  border-radius: 20px;
}

.action-section {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.generate-btn {
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #4dabf7, #1971c2);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(77, 171, 247, 0.3);
}

.generate-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(77, 171, 247, 0.4);
}

.generate-btn:active:not(:disabled) {
  transform: translateY(0);
}

.generate-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.generate-btn.generating {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

.games-section {
  margin-top: 20px;
}

.section-title {
  font-size: 1.2rem;
  margin-bottom: 16px;
  color: #f8f9fa;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.games-list {
  max-height: 700px;
  overflow-y: auto;
  padding-right: 8px;
}

.games-list::-webkit-scrollbar {
  width: 6px;
}

.games-list::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.games-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.games-list::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

.footer {
  margin-top: 30px;
  text-align: center;
  font-size: 0.8rem;
  color: #868e96;
}

.footer p {
  margin: 4px 0;
}

@media (max-width: 480px) {
  .lotto-recommender {
    padding: 16px;
  }

  .header h1 {
    font-size: 2rem;
  }

  .info-box {
    flex-direction: column;
    gap: 8px;
  }

  .generate-btn {
    padding: 14px 30px;
    font-size: 1rem;
  }
}
</style>
