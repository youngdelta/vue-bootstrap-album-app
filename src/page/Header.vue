<script setup>
import { navigationItems } from '../router';
import { useThemeStore } from '../stores/themeStore';

const themeStore = useThemeStore();
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink to="/" class="brand" aria-label="Lotto home">
        <span class="brand-mark">6/45</span>
        <span>LOTTO LAB</span>
      </RouterLink>

      <nav class="main-nav" aria-label="주요 메뉴">
        <RouterLink
          v-for="item in navigationItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="is-active"
          exact-active-class="is-active"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <button
        type="button"
        class="theme-toggle"
        :aria-label="themeStore.isDark ? '라이트 모드로 전환' : '다크 모드로 전환'"
        :title="themeStore.isDark ? '라이트 모드' : '다크 모드'"
        @click="themeStore.toggleTheme"
      >
        <span aria-hidden="true">{{ themeStore.isDark ? '☀' : '☾' }}</span>
        <span class="theme-label">{{ themeStore.isDark ? '라이트' : '다크' }}</span>
      </button>
    </div>
  </header>
</template>
