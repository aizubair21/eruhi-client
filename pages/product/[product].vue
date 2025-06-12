<script lang="ts" setup>
const route = useRoute();

const product_id = route.params.product;

const products = ref({})

definePageMeta({
    layout:'user',
})


$fetch(`https://eruhi.gorombazar.com/web/api/products?index=${product_id}`, {
  method:'get',
  onResponse({ response }) {
    if (response._data) {
        products.value = response._data;
    }
  }
});

</script>

<template>
    <div class="container">

        <div class="p-2 ">
            <ProductSingle :products="products" />
        </div>


    </div>
</template>

<style lang="postcss" scoped>
    
</style>
