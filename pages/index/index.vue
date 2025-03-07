<style lang="scss">
.sections {
    display: flex;
    flex-direction: column;
    gap: 80px;

    @media (max-width: 768px) {
        gap: 30px;
    }
}
</style>

<template>
    <div class="sections">
        <section id="aboutSection" class="select-none">
            <TheAbout></TheAbout>
        </section>
        <section id="managerSection" class=" select-none">
            <TheManager></TheManager>
        </section>
        <section id="processSection" class="select-none">
            <TheProcess></TheProcess>
        </section>
        <section id="readerSection" class="select-none">
            <TheReader></TheReader>
        </section>
        <section id="saleSection" class="select-none">
            <TheSale></TheSale>
        </section>
        <section id="contactSection" class="select-none">
            <TheContact></TheContact>
        </section>
        </div>
</template>

<script setup>
import TheAbout from './components/TheAbout.vue'
import TheManager from './components/TheManager.vue'
import TheProcess from './components/TheProcess.vue'
import TheReader from './components/TheReader.vue'
import TheContact from './components/TheContact.vue'
import TheSale from './components/TheSale.vue'

/* import { useSeoMeta } from '#imports'

useSeoMeta({
    title: 'Sapsan Parser - Ваш личный парсер',
    description: 'Sapsan Parser - это мощный инструмент для парсинга данных. Узнайте больше о наших возможностях.',
    ogTitle: 'Sapsan Parser - Ваш личный парсер',
    ogDescription: 'Sapsan Parser - это мощный инструмент для парсинга данных. Узнайте больше о наших возможностях.',
    ogImage: '../../assets/img/process.jpg', // Путь к изображению для предпросмотра
}) */

/* useHead({
    title: 'Парсинг сайтов каталогов',
    meta: [
    { name: 'description', content: 'Парсинг сайтов' },
    { name: 'keywords', content: 'Parser, парсер, парсинг, скрайбинг' }
    ]
}) */
</script>