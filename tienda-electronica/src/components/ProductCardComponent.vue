<template>
  <div class="card h-100 text-center">
    <img :src="product.image" class="card-img-top p-3" alt="Imagen del producto" style="height: 150px; object-fit: contain;">
    <div class="card-body">
      <h6 class="card-title">{{ product.title }}</h6>
      <p class="text-muted mb-1">Categoría: {{ product.category }}</p>
      <p class="fw-bold">${{ product.price }}</p>
      <button class="btn btn-outline-primary btn-sm" @click="$emit('ver-detalle', product)">
        Ver detalles
      </button>
    </div>
  </div>
</template>
<h5 class="mt-5">Vista en tarjetas</h5>

<script>
export default {
  name: "ProductCardComponent",
  props: {
    product: Object
  }
};
</script>
