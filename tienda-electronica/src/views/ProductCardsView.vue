<template>
  <div>
    <h2>Tienda</h2>
    <div class="row row-cols-2 row-cols-md-4 g-3 mt-3">
      <div v-for="item in products" :key="item.id" class="col">
        <ProductCardComponent :product="item" @ver-detalle="verDetalle" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCardComponent from "../components/ProductCardComponent.vue";

export default {
  name: "ProductCardsView",
  components: { ProductCardComponent },
  data() {
    return { products: [] };
  },
  methods: {
    async getProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      this.products = data.filter(p => p.category === "electronics");
    },
    verDetalle(product) {
      alert(`Detalles del producto:\n${product.title}\nPrecio: $${product.price}`);
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>
