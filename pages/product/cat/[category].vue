<script lang="ts" setup>

const config = useRuntimeConfig();
const catPdr = ref([]);
const ctr = ref([]);
const route = useRoute();
const isLoading = ref(true);
const cat_id = route.params.category;
definePageMeta({
    layout:'user',
})

$fetch(`${config.public.baseApi}/category`, 
  {
    method:'get',
    headers:{
      'Content-Type': 'application/json',
      'accept' : 'Application/Json',
      'X-MASTER-KEY': config.public.apiSecret,
    } ,

    onResponse({response}){
      if (response.status == 200) {
        ctr.value = response._data.data.data;
        // console.log(response._data.data);
        
      }else{
        console.warn('Unexpected respons:', response._data);
        
      }
    }
  }
);

await $fetch(`${config.public.baseApi}/products/where-category/${cat_id}`, {
    method:'get',
    headers:{
        'accept':'application/json',
        'X-MASTER-KEY':config.public.apiSecret,
    }, 
    onResponse({response}){
        // console.log(response);
        isLoading.value = false;
        if (response.status == 200) {
            catPdr.value = response._data.data.data;
        }else{
            console.warn(response?._data);
        }
    }
});
</script>

<template>
    <div class="container">

        <spinner v-if="isLoading" />
        <!-- <div v-else-if="error">{{error}}</div> -->
        <div v-else-if="catPdr.length">
            <div class="product_section "
            style="display: grid; justify-content:center; grid-template-columns: repeat(auto-fill, 160px); grid-gap:10px">

                <div v-for="items in catPdr">
                    <ProductCart :items/>
                </div>

            </div>
        </div> 
        <div v-else>
            No Product Found.
        </div>
    
        <hr>


            <div>

      <!-- <Spinner v-if="!ctr.length" /> -->
      <div  class="mt-3">
        <div style="display: grid; justify-content:center; grid-template-columns: repeat(auto-fill, minmax(120px, auto)); grid-gap:10px">
          <div v-for="ct in ctr"   class="position-relative border rounded-md" style="height:120px">

            <NuxtLink :to="{ name: 'product-cat-category', params: { category: ct.id } }">
              <img :src="`${config.public.assetUrl}/storage/${ct.image}`" alt="" srcset="">
              <p class=" position-absolute bottom-0 w-100 text-center" >
               {{ ct.name }} 
              </p>
            </NuxtLink>
          
          </div>
        </div>
      </div>
    
    </div>
    </div>
</template>

<style lang="postcss" scoped>
    
</style>
