<template>
  <div class="min-h-full"> 
    <NuxtLayout @scrollTo="scrollToSection">
        <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>

import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Sapsan - Парсинг сайтов и каталогов',
  description: 'Sapsan - личный инструмент для парсинга сайтов и каталогов, настольный парсер | sapsan parser',
  ogTitle: 'Sapsan - Парсинг сайтов и каталогов',
  ogDescription: 'Sapsan - личный инструмент для парсинга сайтов и каталогов, настольный парсер | sapsan parser',
  ogImage: '../../assets/img/process.jpg', // Путь к изображению для предпросмотра
  keywords: 'парсер, парсинг, парсер сайтов, парсинг сайтов, парсинг каталогов, лучший парсер, быстрый парсинг, универсальный парсер, sapsan parser' // Добавляем ключевые слова
})

const scrollToSection = (sectionId, offset = 100) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = sectionPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
</script>