<script lang="ts" setup>
const loader = () => useState('loader');

const config = useRuntimeConfig();
definePageMeta({
  layout:'user',  
})

const body = ref([]);
const profile_photo = ref('');
const name = ref('');
const email = ref('');
const phone = ref('');
const country = ref('');
const password = ref('');
const password_confirmation = ref('');


function handleFile(event){
    const selectedFile = event.target.files[0]
    console.log(selectedFile);
    
    if (selectedFile) {
        name.value = 'namefro',
        profile_photo.value = selectedFile
    }
}

const handleRegister = async function () {
   
    loader.value = true;
    await $fetch(`http://eruhi.local/api/register`, {
        method:'POST',
        headers:{
            'accept' : 'application/json',
            'X-MASTER-KEY': config.public.apiSecret,
        }, 
        credentials: 'omit',
        onResponse({response}) {
            loader.value = false;
            console.log(response._data);
        }
    });
    
}
</script>

<template>
    
    <div class="container d-flex justify-content-center align-items-center">

        <br>
        <div class="border shadow rounded p-3" style="width:100%; max-width:400px">
            <h1 class="pt-2 text-center">Register</h1>
            <form v-on:submit.prevent="handleRegister" enctype="multipart/formdata">

                <div class="mb-3">
                    <label for="name" class="form-label">Your Name</label>
                    <input type="text" v-model="name" class="form-control" id="name" placeholder="Lorem Ipsum">
                </div>
               
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" v-model="email" class="form-control" id="email" placeholder="name@example.com">
                </div>

                <div class="mb-3">
                    <label for="Phone" class="form-label">Phone </label>
                    <input type="number" v-model="phone" class="form-control" id="Phone" placeholder="01234-56789">
                </div>

                <div class="mb-3">
                    <label for="country" class="form-label">Country </label>
                    <input type="text" v-model="country" class="form-control" id="country" placeholder="Country Name">
                </div>
                
                <div class="mb-3">
                    <label for="photo" class="form-label">Photo </label>
                    <!-- <input type="file" v-model="profile_photo" class="form-control" id="photo"> -->
                    <input type="file" @change="handleFile" class="form-control" id="photo">
                </div>



                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" v-model="password" class="form-control" id='password' placeholder="**********" />
                    <hr/>
                    <input type='password' v-model="password_confirmation" class="form-control" id="password-confirmation" name="password_confirmation" placeholder="re-type your password " />
                    
                </div>  

                <div class="mb-3 text-center">
                    <button class="btn btn-success btn-md" >Register</button>
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
