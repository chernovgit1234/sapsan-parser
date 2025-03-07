
<style lang='scss' scoped>
.sale {
    background-color: rgb(240, 253, 244); /* bg-lime-100 */
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
    <div class="sale">
        <p class="font-bold text-2xl leading-normal">Формат продажи</p>
        <p class="text-xl leading-normal">Пользование платформой бесплатно</p>
        <p class="text-xl leading-normal">Платно - написание для Вас скриптов для Вашего пула сайтов и ресурсов, которые будут работать на данной платформе; правка платформы под Ваши запросы</p>
    </div>
</template>
