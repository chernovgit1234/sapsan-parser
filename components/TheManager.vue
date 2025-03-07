<style lang='scss' scoped>
.manager {
    background-color: rgb(220, 252, 231); /* bg-green-100 */
    border-radius: 0.75rem; /* rounded-xl (12px) */
    padding: 2.5rem; /* p-10 (40px) */
    display: flex; /* flex */
    flex-direction: column; /* flex-col */
    row-gap: 1.5rem; /* gap-y-6 (24px) */
    margin-bottom: 0.5rem; /* mb-2 (8px) */

    @media (max-width: 768px) {
        padding: 1.5rem;
        row-gap: 1rem;
    }
}
</style>

<template>
<div>
    <div class="manager">
        <p class="font-bold text-2xl">Управление</p>
        <p class="text-xl leading-normal">На странице "Управление" отображаются: 1. пул сайтов в дереве, которые можно выбрать для настройки; 2. настройка конфигурации, где можно выбрать необходимые поля для парсинга; 3. настройка запуска, где можно указать формат выгрузки, название процесса и кнопка запуска</p>
    </div>
    <img src="../assets/img/manager.jpg" class="w-full h-full object-cover rounded-xl">
</div>
</template>

<script lang='ts' setup></script>
