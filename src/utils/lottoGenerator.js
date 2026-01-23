import lottoData from '../data/lotto.json';

// 역대 1등 당첨번호 조합을 Set으로 저장 (빠른 검색을 위해)
const winningCombinations = new Set(
  lottoData.map(item => item.numbers.slice().sort((a, b) => a - b).join(','))
);

/**
 * 6개의 랜덤 로또 번호를 생성
 * @returns {number[]} 정렬된 6개의 번호 배열
 */
function generateRandomNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers.sort((a, b) => a - b);
}

/**
 * 생성된 번호가 역대 당첨번호와 중복되는지 확인
 * @param {number[]} numbers - 확인할 번호 배열
 * @returns {boolean} 중복 여부
 */
function isWinningCombination(numbers) {
  const key = numbers.slice().sort((a, b) => a - b).join(',');
  return winningCombinations.has(key);
}

/**
 * 역대 당첨번호를 제외한 랜덤 번호 생성
 * @returns {number[]} 정렬된 6개의 번호 배열
 */
export function generateExcludingWinners() {
  let numbers;
  let attempts = 0;
  const maxAttempts = 1000;

  do {
    numbers = generateRandomNumbers();
    attempts++;
  } while (isWinningCombination(numbers) && attempts < maxAttempts);

  return numbers;
}

/**
 * 여러 게임의 추천 번호 생성
 * @param {number} count - 생성할 게임 수
 * @returns {Array<{id: number, numbers: number[]}>} 게임 배열
 */
export function generateMultipleGames(count) {
  const games = [];
  const generatedCombinations = new Set();

  for (let i = 0; i < count; i++) {
    let numbers;
    let key;
    let attempts = 0;
    const maxAttempts = 100;

    // 이미 생성된 조합과도 중복되지 않도록 함
    do {
      numbers = generateExcludingWinners();
      key = numbers.join(',');
      attempts++;
    } while (generatedCombinations.has(key) && attempts < maxAttempts);

    generatedCombinations.add(key);
    games.push({
      id: i + 1,
      numbers
    });
  }

  return games;
}

/**
 * 총 당첨 회차 수 반환
 * @returns {number}
 */
export function getTotalRounds() {
  return lottoData.length;
}

/**
 * 최신 회차 정보 반환
 * @returns {{round: number, numbers: number[]}}
 */
export function getLatestRound() {
  return lottoData[lottoData.length - 1];
}
