<script setup>
import { navigationItems } from '../router';
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
    </div>
  </header>
</template>
