<script lang="ts" setup>
const {products} = defineProps(['products'])

console.log(products);

</script>

<template>
    <div class="container" v-if="products">
        <div class="lg:flex justify-between item-start p-2">
            <div class="w-full lg:w-1/2 ">
                <div class="img-display">
                    <div class="img-showcase">
                        <img id="preview" :src="`https://eruhi.gorombazar.com/storage/${products.thumbnail}`" class=" p-2 rounded" style="width: 100%; object-fit:contain; max-width:400px; height:300px" height="400" alt="image">
                    </div>

                   
                    <div v-show="products.showcase" class="d-flex align-items-center" style="flex-wrap: wrap">
                        <button class="p-1 rounded mb-1">
                            <img class=" border p-1 rounded" :src="`https://eruhi.gorombazar.com/storage/${products.thumbnail}`" width="45px" height="45px" alt="">
                        </button>

                        <button v-for="img in products.showcase" class="p-1 rounded mb-1">
                            <img width="45px" height="45px"  class=" border p-1 rounded" :src="`https://eruhi.gorombazar.com/storage/${img.image}`" alt="">
                        </button>

                    </div>
                    

                </div>
            </div>

            <div class="w-full lg:w-1/2 py-3 lg:py-0 lg:px-0">
                <div>

                    <div class="text-green-900 w-auto text-xs">
                        Shop : 
                        <strong>
                            Show Name Here
                        </strong>
                    </div>
                    <div style="font-size: 28px; font-weight:bold;">{{products.title}}</div>
                    <div class="flex justify-between items-center py-2 border-x" style="font-size: 14px">
                        
                        <div class="flex items-center">
                            <i class="text_primary fas fa-star"></i>
                            <i class="text_primary fas fa-star"></i>
                            <i class="text_primary fas fa-star"></i>
                            <i style="color: #737272" class=" fas fa-star"></i>
                            <i style="color: #737272" class=" fas fa-star"></i>
                            <div class="px-1" style="color: #737272">
                                7/10
                            </div>
                        </div>
                        
                        <div class="cursor-pointer flex items-center">
                            <i style="color:var(--brand-primary);" class="fas fa-heart mr-2"></i>
                            <div>save for later</div>
                        </div>

                    </div>
                </div>

                
                <div class="pt-3 flex items-center">
                    Category:  
                    <div class="ps-3 text_primary bold rounded">
                        <a wire:navigate >
                           category Name
                        </a>
                    </div>
                </div>
                
                
                <!-- <div v-if="products.attr.value" class="py-2 my-3 border-y">
                    <h4> {{ products.attr?->name }} </h4>
                    @php
                        $arrayOfAttr = explode(',', products.attr?->value);
                    @endphp
                    <div class="flex justify-start items-center my-1" style="flex-wrap: wrap;gap: 10px;">
                        @foreach ($arrayOfAttr as $attr)
                            <div class="border rounded mr-2 d-none @if($attr) d-block @endif" style="width:45px; height:35px; align-content:center; text-align:center">
                                {{ $attr }}
                            </div>
                        @endforeach
                    </div>
                </div> -->


                <div class="py-3">
                    
                    <div v-if="products.offer_type == 'yes'">
                        <div style="font-size:22px; margin-right:12px"> Price : <strong class="text_secondary bold"> {{products.discount}} TK  </strong></div>
                    

                        <div class="" style="font-size: 14px">
                            MRP:
                            <del class="px-1">
                                {{products.price ?? "n/a"}} TK
                            </del> / 
                           
                            <div >0 % OFF</div>
                        </div>
                  
                    </div>
                    <div v-else style="font-weight:bold;font-size:22px; color:var(--brand-primary); margin-right:12px"> Price : {{products.price ?? "n/a"}} TK </div>
                   
                
                </div>
                
                <div class="purchase-info flex justify-evenly items-center w-full" >
                    <NuxtLink class="mr-2 rounded px-3 py-1 text-center">
                        <i class="fas fa-arrow-right mx-2"></i>Buy Now 
                    </NuxtLink>
                
                    <button type="button" class="option1">
                        <i class="fas fa-cart-plus mx-2"></i> <span class="hidden md:block">To Cart</span>
                    </button>
                   
                
                </div>
               
            </div>


            <!-- <script>
                function previewImage(element){
                    const file = element.src;
                    console.log(file);
                    document.getElementById('preview').src = file;
                    // const reader = new FileReader();
                    // reader.onload = () => {
                    //     const preview = document.getElementById('preview');
                    //     preview.src = reader.result;
                    // };
                    // reader.readAsDataURL(file);
                        
                }
            </script> -->
        </div>
    </div>
</template>

<style lang="postcss" scoped>
    
</style>
