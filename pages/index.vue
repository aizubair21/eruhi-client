<script lang="ts" setup>
definePageMeta({
  layout: 'user'
})

// Runtime config (if needed)
const config = useRuntimeConfig();

const pdr = ref([]);
const counter = ref(0);

// // Call API
// const { data, status, error, refresh } = await useFetch('https://eruhi.gorombazar.com/web/api/products', {
//   onRequest({ options }) {
//     options.headers = {
//       ...options.headers,
//       'X-Master-Key': 'your_master_token_here',
//     };
//   },

//   onResponse({ response }) {
//     if (response._data && Array.isArray(response._data.data)) {
//       pdr.value = response._data.data;
//       // console.log(response._data.data.length);
//     } else {
//       console.warn('Unexpected response:', response._data);
//     }
//   },

//   onRequestError({ error }) {
//     console.error('Request error:', error);
//   },

//   onResponseError({ response }) {
//     console.error('Response error:', response._data);
//   }
// });


$fetch('https://eruhi.gorombazar.com/web/api/products', {
  method:'get',
  onResponse({ response }) {
    if (response._data) {
      pdr.value = response._data.data;
    }
  }
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

    <div class="product_section layout_padding"
      style="display: grid; justify-content:center; grid-template-columns: repeat(auto-fill, minmax(160px, auto)); grid-gap:10px">

      <div v-for="items in pdr">

        <!-- product cart component  -->
        <ProductCart :items />

      </div>

    </div>

  </div>

  <button @click.prevent="add">
    incress - {{ counter }}
  </button>
</template>


<style></style>