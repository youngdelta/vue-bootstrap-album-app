<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const page = computed(() => {
  const pages = {
    '/': {
      eyebrow: 'LOTTO 6/45',
      description: '번호 추천부터 당첨 이력까지 한곳에서 확인하는 샘플 홈입니다.',
      action: '번호 추천 시작',
      stats: [['150', '추천 게임'], ['1,207', '누적 회차'], ['45', '공 번호']],
    },
    '/album': {
      eyebrow: 'COLLECTION',
      description: '최근 회차와 추천 조합을 카드 형태로 모아보는 앨범 화면입니다.',
      action: '컬렉션 보기',
      stats: [['12', '저장된 카드'], ['6', '이번 주 업데이트'], ['3', '새로운 테마']],
    },
    '/stats': {
      eyebrow: 'INSIGHTS',
      description: '번호별 출현 빈도와 조합 분포를 확인하는 통계 샘플입니다.',
      action: '통계 확인',
      stats: [['38회', '최다 출현'], ['7개', '분석 지표'], ['45개', '분석 번호']],
    },
    '/history': {
      eyebrow: 'ARCHIVE',
      description: '역대 당첨번호를 회차별로 빠르게 찾을 수 있는 이력 샘플입니다.',
      action: '이력 검색',
      stats: [['1,207', '전체 회차'], ['6개', '회차별 번호'], ['2002', '시작 연도']],
    },
    '/guide': {
      eyebrow: 'HOW IT WORKS',
      description: '추천 번호를 생성하고 저장하는 흐름을 안내하는 샘플입니다.',
      action: '가이드 읽기',
      stats: [['01', '번호 생성'], ['02', '조합 확인'], ['03', '저장 및 공유']],
    },
    '/favorites': {
      eyebrow: 'YOUR PICKS',
      description: '마음에 드는 조합을 모아두는 즐겨찾기 샘플입니다.',
      action: '즐겨찾기 추가',
      stats: [['0', '저장 조합'], ['0', '최근 추가'], ['무제한', '보관 한도']],
    },
    '/about': {
      eyebrow: 'ABOUT THE APP',
      description: '간결하고 빠른 번호 추천 경험을 위한 서비스 소개 샘플입니다.',
      action: '서비스 둘러보기',
      stats: [['Vue', '프레임워크'], ['Vite', '빌드 도구'], ['6/45', '게임 방식']],
    },
    '/contact': {
      eyebrow: 'SUPPORT',
      description: '사용 중 불편한 점이나 제안사항을 전달하는 문의 샘플입니다.',
      action: '문의 남기기',
      stats: [['24시간', '평균 응답'], ['3가지', '문의 유형'], ['1:1', '답변 방식']],
    },
    '/settings': {
      eyebrow: 'PREFERENCES',
      description: '화면과 추천 방식에 대한 개인 설정을 관리하는 샘플입니다.',
      action: '설정 저장',
      stats: [['다크', '현재 테마'], ['150', '기본 게임 수'], ['한국어', '표시 언어']],
    },
  };

  return pages[route.path] || pages['/'];
});
</script>

<template>
  <main class="sample-page">
    <section class="sample-hero">
      <p class="eyebrow">{{ page.eyebrow }}</p>
      <h1>{{ route.meta.title }}</h1>
      <p class="description">{{ page.description }}</p>
      <button type="button" class="primary-action">{{ page.action }} <span aria-hidden="true">→</span></button>
    </section>

    <section class="stats-grid" aria-label="페이지 요약">
      <article v-for="stat in page.stats" :key="stat[1]" class="stat-card">
        <strong>{{ stat[0] }}</strong>
        <span>{{ stat[1] }}</span>
      </article>
    </section>

    <section class="sample-content">
      <div>
        <p class="eyebrow">SAMPLE VIEW</p>
        <h2>다음 화면을 위한 자리</h2>
      </div>
      <p>상위 메뉴에서 다른 샘플로 이동해 보세요. 이 영역은 실제 기능을 확장할 때 사용할 수 있습니다.</p>
    </section>
  </main>
</template>
