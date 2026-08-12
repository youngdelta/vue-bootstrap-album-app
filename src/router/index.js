import { createRouter, createWebHistory } from 'vue-router';
import LottoRecommender from '../components/lotto/LottoRecommender.vue';
import SamplePage from '../pages/SamplePage.vue';

export const navigationItems = [
  { path: '/', label: '홈', title: '홈' },
  { path: '/lotto', label: '번호 추천', title: '로또 번호 추천' },
  { path: '/album', label: '앨범', title: '앨범 둘러보기' },
  { path: '/stats', label: '통계', title: '번호 통계' },
  { path: '/history', label: '당첨 이력', title: '당첨 이력' },
  { path: '/guide', label: '이용 안내', title: '이용 안내' },
  { path: '/favorites', label: '즐겨찾기', title: '즐겨찾기' },
  { path: '/about', label: '서비스 소개', title: '서비스 소개' },
  { path: '/contact', label: '문의하기', title: '문의하기' },
  { path: '/settings', label: '설정', title: '설정' },
];

const router = createRouter({
  history: createWebHistory(),
  routes: navigationItems.map((item) => ({
    path: item.path,
    name: item.path === '/' ? 'home' : item.path.slice(1),
    component: item.path === '/lotto' ? LottoRecommender : SamplePage,
    meta: item,
  })),
});

export default router;
