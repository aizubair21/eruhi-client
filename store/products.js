export const useProductStore = defineStore('product', {
    state: () => (
        {
            loading: true,
            id: '',
            products: [],
        }
    ),

    actions: {
        async getProducts() {
            const res = await fetch(`${useRuntimeConfig().public.baseApi}/web/api/products`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/json'
                    }
                }
            );

            return res;
        }
    }
});