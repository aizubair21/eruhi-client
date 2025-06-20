<script lang="ts" setup>

definePageMeta({
    layout:'user',
})

const loader = useState('loader');
loader.value = true;
const config = useRuntimeConfig();
const route = useRoute();

const category = ref([]);

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

</script>

<template>
    <div class="container">
        <div  class="mb-3">
        <div style="display: grid; justify-content:center; grid-template-columns: repeat(auto-fill, minmax(120px, auto)); grid-gap:10px">
          <div v-for="ct in category"   class="position-relative border rounded-md" style="height:120px">

            <NuxtLink :to="{ name: 'product-cat-category', params: { category: ct.id } }">
              <img :src="`${config.public.assetUrl}/storage/${ct.image}`" alt="" srcset="">
              <p class="position-absolute bottom-0 w-100 text-center" >
               {{ ct.name }} 
              </p>
            </NuxtLink>
          
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="postcss" scoped>
    
</style>
