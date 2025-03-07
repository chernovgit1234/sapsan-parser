<style lang='scss' scoped>
.process {
    background-color: rgb(254, 226, 226); /* bg-rose-100 */
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
        <div class="process">
            <p class="font-bold text-2xl leading-normal ">Процессы</p>
            <p class="text-xl leading-normal">На странице "Процессы" отображаются все запущенные процессы сбора данных. Одновременно может работать 10-20 процессов в зависимости от мощности компьютера. По каждому процессу можно узнать информацию: когда запущено и примерное окончание, процентное состояние процесса сбора, папка куда будет скачан результат сбора</p>
        </div>
        <img src="../assets/img/process.jpg" class="w-full h-full object-cover rounded-xl">
    </div>
</template>
