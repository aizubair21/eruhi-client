<script lang="ts" setup>
definePageMeta({
    layout:'user',
})

const loader = useState('loader');
loader.value = true;
const config = useRuntimeConfig();
const route = useRoute();
const category = ref([]);
const products = ref([]);

$fetch(`${config.public.baseApi}/category`, {
    method:'get',
    headers:{
        'accept' : 'application/json',
        'X-MASTER-KEY':config.public.apiSecret,
    },
    onResponse({response}){
        loader.value = false;
        if (response.status == 200) {
            category.value = response._data.data.data;
        }else{
            console.warn('Error :', response._data);
        }
    }
});

$fetch(`${config.public.baseApi}/products`, {
  method:'get',
  headers:{
    'Content-Type': 'application/json',
    'accept' : 'Application/Json',
    'X-MASTER-KEY': config.public.apiSecret,
  },

    onResponse({ response }) {
      if (response.status == 200) {
        loader.value = false;
        // console.log(response._data.data.data);
        products.value = response._data.data.data;
      } else {
        console.warn('Unexpected response:', response._data);
      }
    },

});


</script>

<template>
    <div class="container">
        <h3>Products</h3>
        <br>
        <div class="product_section "
            style="display: grid; justify-content:center; grid-template-columns: repeat(auto-fill, 160px); grid-gap:10px">

            <div v-for="items in products">

                <!-- product cart component  -->
                <ProductCart :items />

            </div>

        </div>
    </div>
</template>

<style lang="postcss" scoped>
    
</style>
