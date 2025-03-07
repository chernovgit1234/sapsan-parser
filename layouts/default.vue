<style lang='scss' scoped>
.layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    padding: 20px 0 40px 0;
    flex: 1;

    @media (max-width: 768px) {
        padding: 20px 5px;
    }
}

.header {
    z-index: 100;
    position: sticky; 
    top: 0;    
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E2E8F0;
    
    @media (min-width: 768px) {
        backdrop-filter: blur(5.7px);
        -webkit-backdrop-filter: blur(5.7px);
    }
    @media (max-width: 768px) {
        background-color: #fff;
        height: 60px;
    }
    
    &__body {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
        padding: 0 15px;
    }

    &__logo {
        font-family: "Rubic", sans-serif;
        font-size: 20px;
        line-height: 12px !important;
        user-select: none;

        
    }
    &__logo-main {
        display: block;
        font-weight: bold; /* или 700 */
        font-size: 2.25rem; /* 36px */
        line-height: 2.5rem; /* 40px */
        color: rgb(44, 45, 46); /* #2c2d2e */

        @media (max-width: 768px) {
            font-size: 1.5rem;
            line-height: 1.5rem;

        }
    }
    

    &__logo-label {
        display: block;
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem; /* 20px */
        color: rgb(255, 82, 38); /* #ff5226 */

        @media (max-width: 768px) {

            font-size: 1rem;
            line-height: 1.5rem;
        }
    }
    
}


.navigate {
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }


    &__item {
        height: 40px;
        cursor: pointer;
        outline: 2px dashed #4B5563;
        padding: 1px 20px ;
        color: #2c2d2e;
        user-select: none;
        background-color: white;
        
        &:hover {
            background-color: #4B5563;
            outline: 5px dashed #4B5563;
            color: white;
            transition: outline 0.1s ease-in 0s;
            transition: padding 0.3s ease-out 0s;
            padding: 8px 20px ;
        }
    }

    &__name {
        font-weight: 600;
        font-size: 1rem;
        white-space: nowrap;
    }
}

</style>

<template>
    <div class="layout">
        <header class="header">
            <div class="header__body container-header">
                <div class="header__logo">
                    <span class="header__logo-main">Sapsan</span>
                    <span class="header__logo-label">личный парсер</span>
                </div>
                <ul class="navigate">
                    <li class="navigate__item" v-for="(item, i) in items" :key="i" @click="scrollTo(item.id)">
                        <p class="navigate__name">{{item.name}}</p>
                    </li>
                </ul>
            </div>
        </header>
        <main class="container">
            <slot>нет страницы</slot>
        </main>
        <TheFooter :background="'#fff'"/>
    </div>
</template>


<script lang='ts' setup>
import { useRequestHeaders } from 'nuxt/app';
import TheFooter from '~/components/TheFooter.vue';

const emit = defineEmits(['scrollTo'])


const items = [
{name: 'О парсере', id: 'aboutSection'},
{name: 'Управление', id: 'managerSection'},
{name: 'Процессы', id: 'processSection'},
{name: 'Редактор', id: 'readerSection'},
{name: 'Формат продажи', id: 'saleSection'},
{name: 'Контакты', id: 'contactSection'},
]

function scrollTo(id: string) {
    emit('scrollTo', id)
}

/* let isMobile = ref(false)
onMounted(()=> {
    let headers = useRequestHeaders();
    let userAgent = headers['user-agent'];
    if (userAgent) {
        return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(userAgent);
    } else {
        return false
    }
}) */
/* 
watchEffect(() => {
    if (isMobile.value) {
        console.log('Сайт открыт на смартфоне');
    } else {
        console.log('Сайт открыт не на смартфоне');
    }
}) */

</script>

