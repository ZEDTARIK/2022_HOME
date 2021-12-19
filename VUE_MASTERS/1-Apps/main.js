const app = new Vue({
    el: '#app', 
    data() {
        return {
            product: 'Stock',
            inStock: false,
            image: './assets/img_green.png',
            inventory : 0,
            details:  ["60% cotton", "20% polyster", "Gender-neutral"],
            cart: 0,
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: "./assets/img_green.png"
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "./assets/img_blue.png"
                }
            ]
        }
    },
    methods: {
        AddToCart() {
            this.cart += 1;
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    },
});