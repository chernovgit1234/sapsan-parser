<style lang='scss' scoped>
.reader {
    background-color: rgb(224, 231, 255); /* bg-indigo-100 */
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
        <div class="reader">
            <p class="font-bold text-2xl">Редактор</p>
            <p class="text-xl">На странице "Редактор" можно посмотреть, отредактировать сгенерированный файл</p>
        </div>
        <img src="../assets/img/reader.jpg" class="w-full h-full object-cover rounded-xl">
    </div>
</template>

