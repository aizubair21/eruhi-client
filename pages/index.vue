<script lang="ts" setup>

definePageMeta({
  layout: 'user'
})

// Runtime config (if needed)
const config = useRuntimeConfig();

const pdr = ref([]);
const ctr = ref([]);
const counter = ref(0);

// // Call API
// const { data, pending, status, error, refresh } = await useFetch('https://eruhi.gorombazar.com/api/products', {
//   onRequest({ options }) {
//     options.headers = {
//       'Content-Type': 'application/json',
//       'accept' : 'Application/Json',
//       'X-MASTER-KEY': config.public.apiSecret,
//     };
//   },

//   onResponse({ response }) {
//     if (response._data.data) {
//       pdr.value = response._data.data;
//       console.log(response._data.data.length);
//     } else {
//       console.warn('Unexpected response:', response._data.data);
//     }
//   },

//   onRequestError({ error }) {
//     console.error('Request error:', error);
//   },

//   onResponseError({ response }) {
//     console.error('Response error:', response._data);
//   }
// });


// const {data, pending, error}  = await useFetch('https://eruhi.gorombazar.com/api/products', {
//   method:'get',
//   headers:{
//     'Content-Type': 'application/json',
//     'accept' : 'Application/Json',
//     'X-MASTER-KEY': config.public.apiSecret,
//   },

// });

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
        console.log(response._data.data);
        
      }else{
        console.warn('Unexpected respons:', response._data);
        
      }
    }
  }
);


$fetch(`${config.public.baseApi}/products`, {
  method:'get',
  headers:{
    'Content-Type': 'application/json',
    'accept' : 'Application/Json',
    'X-MASTER-KEY': config.public.apiSecret,
  },

    onResponse({ response }) {
      if (response.status == 200) {
        console.log(response._data.data.data);
        pdr.value = response._data.data.data;
      } else {
        console.warn('Unexpected response:', response._data);
      }
    },

});



onMounted(() => {

  const el = document.getElementById('some-id');
  if (el?.parentNode) {
    el.parentNode.removeChild(el);
  }

});  

function add() 
{
  counter.value ++;
}


</script>
<template>

  <!-- product cart  -->
  <div class="container">
    
    <!-- <div v-else-if="error">Error: {{ error.message }}</div> -->
    <div>

      <Spinner v-if="pending" />
      <div v-else class="mb-3">
        <div style="display: grid; justify-content:center; grid-template-columns: repeat(auto-fill, minmax(120px, auto)); grid-gap:10px">
          <NuxtLink to="" v-for="ct in ctr" class="position-relative border rounded-md" style="height:120px">

            <div>
              <img :src="`${config.public.assetUrl}/${ct.image}`" alt="" srcset="">
              <p class="display-6 position-absolute bottom-0 w-100 text-center" >
               {{ ct.name }} 
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    
    </div>

    <spinner v-if="!pdr.length"/>
    <!-- <div v-if="!pdr.length">Loading...</div> -->
    <div v-else class="product_section "
      style="display: grid; justify-content:center; grid-template-columns: repeat(auto-fill, minmax(160px, auto)); grid-gap:10px">

      <div v-for="items in pdr">

        <!-- product cart component  -->
        <ProductCart :items />

      </div>

    </div>

  </div>

  <!-- <button @click.prevent="add">
    incress - {{ counter }}
  </button> -->
</template>


<style></style>