<script lang="ts" setup>
const route = useRoute();

const product_id = route.params.product;

const products = ref({})

definePageMeta({
    layout:'user',
})


$fetch(`https://eruhi.gorombazar.com/api/products/${product_id}`, {
  method:'get',
    headers:{
    'Content-Type': 'application/json',
    'accept' : 'Application/Json',
    'X-MASTER-KEY': '17f4f177db16d4ec4571bb',
  },
  onResponse({ response }) {
    if (response._data) {
        products.value = response._data.data;
    }
  }
});

</script>

<template>
    <div class="container">

        <Spinner v-if="!products.title" />
        <div class="p-2 " v-else >
            <ProductSingle :products="products" />
        </div>


    </div>
</template>

<style lang="postcss" scoped>
    
</style>
