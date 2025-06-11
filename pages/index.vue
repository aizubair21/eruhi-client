<script lang="ts" setup>
definePageMeta({
  layout: 'user'
})

// Runtime config (if needed)
const config = useRuntimeConfig();

const pdr = ref([]);

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
//       console.log(response._data.data.length);
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

function getData () {
   const { data, pending, error } = useFetch('https://eruhi.gorombazar.com/web/api/products', {
    
    onResponse({ response }) {
      if (response._data) {
        pdr.value = response._data.data;
        console.log(pdr);
        
      }
    }
  });

}
getData();

setTimeout(() => {
  getData();
}, 10);

onMounted(() => {

  const el = document.getElementById('some-id');
  if (el?.parentNode) {
    el.parentNode.removeChild(el);
  }
  
});

</script>
<template>

  <!-- product cart  -->
  <div class="container">

    <div class="product_section layout_padding"  style="display: grid; justify-content:center; grid-template-columns: repeat(auto-fill, minmax(160px, auto)); grid-gap:10px">
    
    <div v-for="items in pdr">
        
      <div class="box border bg-white">
      
        <div v-show="items.offer_type == 'yes'" class="discount-badge bg_primary" style="">0%</div>
        <div class="option_container hidden lg:block" style="background-color:hsla(24, 100%, 90%, 0.419);; transform:blur(10px)">
            <div class="flex flex-col justify-between items-center" style="height:100%; width:100%">
                <div class="flex flex-col justify-center w-full text-center flex-1">
        
                  <div>
                      <button class="shadow p-2 text-sm mb-3 bg-transfarent text-center w-full" type="submit">
                          <i class="fas fa-cart-plus mx-2"></i> To Cart
                      </button>
                  </div>
        
        
                  <a href="{{route('products.details', ['id' => items.id, 'slug' => items.slug])}}" class="text-xs">
                      View Details <i class="fas fa-arrow-right mx-2"></i>
                  </a>
                </div>
                <x-nav-link class="py-2 text-center bg-white flex items-center justify-center" style="font-weight:bold;color:var(--brand-primary); width:100%" href="{{route('product.makeOrder', ['slug' => items.slug])}}">
                    Order Now <i class="fas fa-arrow-right mx-2"></i>
                </x-nav-link>
            </div>
        </div>
        <div class="img-box">
          <img :src="`https://eruhi.gorombazar.com/storage/${items.thumbnail}`">
        </div>
        <div class="details_box p-2 flex flex-col justify-between">
        
            <div class="w-full mb-2 flex items-start justify-between text-white" >
              <a wire:navigate href="{{route('products.details', ['id' => items.id, 'slug' => items.slug])}}" class="text-xs text-truncate text-black">
                  {{ items.title ?? "N/A"}}
              </a>
            </div>
        
            <div style="height:32px; width:100%; display:flex; flex-direction:colums-reverse; align-items: end; font-size:14px; @if(items.offer_type)justify-content:space-between @else justify-content:center @endif" class=" py-1">
        
                  <div v-if="items.offer_type">
                      <div class="text-md @if(items.offer_type ) pr-2 @else align-self:center @endif" style="font-weight: bold; text-align:right">
                          {{items.discount}} TK
                      </div>
                      <div class="text-xs">
                          <del>
                              MRP {{items.price}} TK
                          </del>
                      </div>
                  </div>
                  <div v-else class=" test-md @if(items.offer_type ) pr-2 @else align-self:center @endif" style="font-weight: bold; text-align:right">
                      {{items.price}} TK
                  </div>
            </div>
        
            <a type="button" class="text-sm btn_hover hover_zoom d-block text-center flex items-center justify-center" style="font-weight:bold; color:var(--brand-primary); width:100%" href="{{route('product.makeOrder', ['slug' => pdr.slug])}}">
                <i class="fas fa-cart-plus mx-2"></i>Order Now
            </a>
        </div>
        
      </div>
    
    </div>

    </div>
  </div>

</template>


<style></style>