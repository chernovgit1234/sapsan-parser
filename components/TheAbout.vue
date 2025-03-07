<style lang="scss">
.about {
    background-color: rgb(219 234 254); /* bg-blue-100 */
    border-radius: 0.75rem; /* rounded-xl (12px) */
    padding: 2.5rem; /* p-10 (40px) */
    display: flex; /* flex */
    flex-direction: column; /* flex-col */
    row-gap: 1.5rem; /* gap-y-6 (24px) */

    @media (max-width: 768px) {
        padding: 1.5rem;
        row-gap: 1rem;
    }

    &__text {
        color: rgb(44, 45, 46); /* text-[#2c2d2e] */

        p {
            font-size: 3.25rem; /* text-4xl (36px) */
            line-height: 2.5rem; /* text-4xl (40px) */
        }

        h1 {
            font-size: 2.25rem; /* text-4xl (36px) */
        }


        @media (max-width: 768px) {
            p {
                font-size: 2.25rem; /* text-4xl (36px) */
                line-height: 2.75rem; /* text-4xl (40px) */
            }

            h1 {
                font-size: 1.75rem; /* text-4xl (36px) */
                line-height: 2rem;
            }
        }
    }

    
}


</style>

<template>
    <div class="about">
        <div class="about__text">
            <p class="font-bold">Sapsan — </p>
            <h1>Личный инструмент для парсинга сайтов</h1>
        </div>
        <div class="pl-6">
            <ul class="list-disc text-xl leading-loose">
                <li v-for="(item, i) in items" :key="i">
                    <span>{{item}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang='ts' setup>
const items = [
    'Desktop программа устанавливается на Ваш личный компьютер',
    'Возможность парсить Ваш персональный пул сайтов и ресурсов',
    'Автоматическое обновление программы',
    'Настройка конфигурации данных',
    'Одновременно от 10 до 20 независимых процессов сбора данных',
    'Планирование процессов парсинга',
    '4 формата выгрузки',
    'Соблюдение законов РФ'
]
</script>
    