<script lang="ts" setup>
const {items} = defineProps(['items']);
</script>

<template>
    <div class="box border bg-white">

        <div v-show="items.offer_type == 'yes'" class="discount-badge bg_primary" style="">0%</div>
        <div class="option_container hidden lg:block"
        style="background-color:hsla(24, 100%, 90%, 0.419);; transform:blur(10px)">
            <div class="d-flex flex-column justify-content-between align-items-center" style="height:100%; width:100%">
                <div class="d-flex flex-column justify-content-center w-full text-center flex-1">

                    <div>
                        <button class="btn  p-2 text-sm mb-3 bg-transfarent text-center w-full" type="submit">
                        <i class="fas fa-cart-plus mx-2"></i> To Cart
                        </button>
                    </div>

                    <NuxtLink :to="{ name: 'product-product', params: { product: items.id } }">
                        View Details
                    </NuxtLink>

                </div>
                <a class="py-2 text-center bg-white d-flex align-items-center justify-content-center"
                style="font-weight:bold;color:var(--brand-primary); width:100%"
                href="{{route('product.makeOrder', ['slug' => items.slug])}}">
                Order Now <i class="fas fa-arrow-right mx-2"></i>
                </a>
            </div>
        </div>
        <div class="img-box">
            <img :src="`https://eruhi.gorombazar.com/storage/${items.thumbnail}`" />
        </div>
        <div class="details_box p-2 d-flex flex-column justify-content-between">

            <div class="w-100 mb-2 d-flex align-items-start justify-content-between text-white">
                <a wire:navigate href="{{route('products.details', ['id' => items.id, 'slug' => items.slug])}}"
                class="text-xs text-truncate text-black">
                {{ items.title ?? "N/A" }}
                </a>
            </div>

            <div
                style="height:32px; width:100%; display:flex; flex-direction:colums-reverse; align-items: end; font-size:14px;"
                class=" py-1">

                <div v-if="items.offer_type">
                    <div class=""
                        style="font-weight: bold; text-align:right">
                        {{ items.discount }} TK
                    </div>
                    <div class="fw-6">
                        <del>
                        MRP {{ items.price }} TK
                        </del>
                    </div>
                </div>
                <div v-else class=" "
                style="font-weight: bold; text-align:right">
                {{ items.price }} TK
                </div>
            </div>

            <a type="button" class="text-sm btn_hover hover_zoom d-block text-center d-flex align-items-center justify-center"
                style="font-weight:bold; color:var(--brand-primary); width:100%"
                href="{{route('product.makeOrder', ['slug' => pdr.slug])}}">
                <i class="fas fa-cart-plus mx-2"></i>Order Now
            </a>
        </div>

    </div>
</template>

<style lang="postcss" scoped>
    
</style>
