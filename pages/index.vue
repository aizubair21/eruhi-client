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
        // console.log(response._data.data);
        
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
        // console.log(response._data.data.data);
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

      <!-- <Spinner v-if="!ctr.length" /> -->
      <div  class="mb-3">
        <div style="display: grid; justify-content:center; grid-template-columns: repeat(auto-fill, minmax(120px, auto)); grid-gap:10px">
          <div v-for="ct in ctr"   class="position-relative border rounded-md" style="height:120px">

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

    <spinner v-if="!pdr.length"/>
    <!-- <div v-if="!pdr.length">Loading...</div> -->
    <div v-else class="product_section "
      style="display: grid; justify-content:center; grid-template-columns: repeat(auto-fill, 160px); grid-gap:10px">

      <div v-for="items in pdr">

        <!-- product cart component  -->
        <ProductCart :items />

      </div>

    </div>


    <hr>

    <!-- <div>accordion</div>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div> -->

  </div>

  <!-- <button @click.prevent="add">
    incress - {{ counter }}
  </button> -->
</template>


<style></style>