<script lang="ts" setup>
definePageMeta({
  layout:'user',  
})

const handleLogin = function () {
    alert('log');
}
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="border shadow rounded" style="width:100%; max-width:400px">
            <h1 class="pt-2 text-center">LOG IN</h1>
            <form v-on:submit.prevent="handleLogin">

                <div class="border-b p-3 space-y-3">
                    <input type="text" id="email" placeholder="E-Mail" class="form-control">
                    <input type="password" id="password" placeholder="**********" class="mt-2 form-control">
                </div>
                
                <div class=" pb-2 text-center">
                    <button class="btn btn-success btn-md" type="submit">Log In</button>
                </div>
                
            </form>
            <div class="text-center py-1">
                <NuxtLink to="/">Back to Home</NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
    
</style>
