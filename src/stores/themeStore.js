import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const STORAGE_KEY = 'lotto-lab-theme';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('dark');

  const isDark = computed(() => theme.value === 'dark');

  function applyTheme() {
    document.documentElement.dataset.theme = theme.value;
    document.documentElement.style.colorScheme = theme.value;
  }

  function setTheme(nextTheme) {
    if (nextTheme !== 'dark' && nextTheme !== 'light') return;

    theme.value = nextTheme;
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme();
  }

  function toggleTheme() {
    setTheme(isDark.value ? 'light' : 'dark');
  }

  function initialize() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'dark' || savedTheme === 'light') {
      theme.value = savedTheme;
    }
    applyTheme();
  }

  return { theme, isDark, initialize, setTheme, toggleTheme };
});
