<style lang='scss' scoped>
footer {
    -webkit-box-shadow: 0px 5px 5px -5px rgba(58, 69, 77, 0.32) inset;
    -moz-box-shadow: 0px 5px 5px -5px rgba(58, 69, 77, 0.32) inset;
    box-shadow: 0px 5px 5px -5px rgba(58, 69, 77, 0.32) inset;
    min-height: 50px;
    display: flex;
    align-items: center;
    white-space: nowrap;

    @media (max-width: 768px) {
        padding: 0 5px;
    }

}
</style>

<template>
    <footer :style="{'background': props.background ? props.background : '#ffffff'}">
        <div class="container">
            Sapsan 2025 &emsp; Сайт сделал: Sergey Chernov
        </div>
    </footer>
</template>

<script lang='ts' setup>
import {defineProps} from 'vue'
const props = defineProps<{
    background: any
}>()


</script>
