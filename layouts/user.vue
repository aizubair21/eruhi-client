
<script lang="ts" setup>
const loader = useState('loader');
const counter = useState('counter', () => 0);

useHead({
   script: [

      // {
      //    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
      //    type: "text/javascript",
      // },

   ],
})

</script>

<template>
<div style="height:100vh">

   <UserHeader />
   <Spinner v-if="loader" />
   
   <div class="flex-1" >
      <slot />
      
   </div>
   
</div>

</template>

<style lang="postcss" scoped>
   
</style>
