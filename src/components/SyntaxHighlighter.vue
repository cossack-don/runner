<template>
  <pre>
    <code ref="code">
      <slot></slot>
    </code>
  </pre>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import hljs from 'highlight.js'; // Импортируем highlight.js

// Определяем пропсы
interface Props {
  language?: string;
}

const props = withDefaults(defineProps<Props>(), {
  language: 'javascript', // Язык по умолчанию
});

// Ссылка на элемент <code>
const code = ref<HTMLElement | null>(null);

// Функция для подсветки кода
const highlightCode = () => {
  if (code.value) {
    hljs.highlightElement(code.value);
  }
};

// Подсветка кода после монтирования компонента
onMounted(() => {
  highlightCode();
});

// Переподсветка при изменении языка
watch(() => props.language, highlightCode);
</script>

<style scoped>
code {
  border-radius: 6px;
}
</style>