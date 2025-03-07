
<style lang='scss' scoped>
.contact {
    background-color: rgb(252, 231, 205); /* bg-orange-200 */
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
        <div class="contact">
            <p class="font-bold text-2xl leading-normal">Контакты</p>
            <p class="text-xl leading-normal">
                Телеграм автора: <a href="https://t.me/ChernovSD" class="font-bold">ChernovSD</a>  
            </p>
        </div>
    </div>
</template>

