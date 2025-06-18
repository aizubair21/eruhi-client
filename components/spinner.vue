<script lang="ts" setup>
// const props = defineProps<Props>(['isLoading'])
</script>

<template>
    <div class="wrapper-div">

        <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
        </div>
    
    </div>
</template>

<style  lang="postcss" scoped>
    .wrapper-div {
        position: sticky;
        top: 50%;
        left: 50px;
        transform: translate(-50%, -50%);
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 43px;
    }
</style>
