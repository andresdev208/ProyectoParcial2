<template>
  <div>
    <h2>Gestión de Productos</h2>

    <!-- Formulario -->
    <div class="card p-3 mt-3">
      <h5>{{ editing ? 'Editar' : 'Agregar' }} Producto</h5>
      <div class="row g-2 mt-2">
        <input v-model="form.title" class="col form-control" placeholder="Nombre" />
        <input v-model="form.price" type="number" class="col form-control" placeholder="Precio" />
        <input v-model="form.image" class="col form-control" placeholder="URL imagen" />
        <button class="btn btn-success col-1" @click="saveProduct">{{ editing ? '✓' : '+' }}</button>
        <button v-if="editing" class="btn btn-secondary col-1" @click="cancelEdit">✕</button>
      </div>
    </div>

    <!-- Tabla -->
    <table class="table table-striped table-hover mt-4">
      <thead class="table-dark">
        <tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Imagen</th><th>Acciones</th></tr>
      </thead>
      <tbody>
        <tr v-for="p in products" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.title }}</td>
          <td>${{ p.price }}</td>
          <td><img :src="p.image" width="50" /></td>
          <td>
            <button class="btn btn-warning btn-sm me-2" @click="edit(p)">Editar</button>
            <button class="btn btn-danger btn-sm" @click="remove(p.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Vista en tarjetas -->
   
  </div>
</template>

<script>
import ProductCardComponent from "../components/ProductCardComponent.vue";

export default {
  name: "ProductView",
  components: { ProductCardComponent },
  data: () => ({
    products: [],
    form: { title: "", price: "", image: "" },
    editing: null,
  }),
  methods: {
    async getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        // Solo productos de electrónica
        this.products = data.filter(p => p.category === "electronics");
      } catch (e) {
        console.error("Error cargando productos:", e);
      }
    },
    async saveProduct() {
      if (!this.form.title || !this.form.price || !this.form.image) return alert("Completa todos los campos.");
      if (this.editing) return this.updateProduct();
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...this.form, category: "electronics" }),
        });
        const newProduct = await res.json();
        this.products.push(newProduct);
        this.resetForm();
        alert("Producto agregado");
      } catch {
        alert("Error al agregar producto");
      }
    },
    async updateProduct() {
      try {
        await fetch(`https://fakestoreapi.com/products/${this.editing.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form),
        });
        Object.assign(this.editing, this.form);
        this.cancelEdit();
        alert("Producto actualizado");
      } catch {
        alert("Error al actualizar producto");
      }
    },
    async remove(id) {
      if (!confirm("¿Eliminar producto?")) return;
      await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" });
      this.products = this.products.filter(p => p.id !== id);
    },
    edit(p) {
      this.editing = p;
      this.form = { ...p };
    },
    cancelEdit() {
      this.editing = null;
      this.resetForm();
    },
    resetForm() {
      this.form = { title: "", price: "", image: "" };
    },
    verDetalle(p) {
      alert(`Detalles:\n${p.title}\nPrecio: $${p.price}`);
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
