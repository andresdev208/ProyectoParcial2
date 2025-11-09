<template>
  <div>
    <h3 class="mb-3">Gestión de Productos</h3>

    <button class="btn btn-primary mb-3" @click="cargarProductos">
    
    </button>

    <!-- Formulario para agregar producto -->
    <div class="card p-3 mb-4">
      <h5>Agregar nuevo producto</h5>
      <div class="row g-2">
        <div class="col-md-5">
          <input v-model="nuevoProducto.title" class="form-control" placeholder="Nombre" />
        </div>
        <div class="col-md-3">
          <input v-model="nuevoProducto.price" type="number" class="form-control" placeholder="Precio" />
        </div>
        <div class="col-md-3">
          <input v-model="nuevoProducto.image" class="form-control" placeholder="URL imagen" />
        </div>
        <div class="col-md-1">
          <button class="btn btn-success w-100" @click="agregarProducto">+</button>
        </div>
      </div>
    </div>

    <!-- Mensaje de carga -->
    <div v-if="cargando" class="alert alert-info">Cargando productos...</div>

    <!-- Tabla -->
    <table v-else class="table table-striped table-bordered align-middle">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productos" :key="producto.id">
          <td>{{ producto.id }}</td>
          <td>{{ producto.title }}</td>
          <td>${{ producto.price }}</td>
          <td><img :src="producto.image" alt="img" width="50" /></td>
          <td>
            <button class="btn btn-sm btn-warning me-2" @click="editar(producto)">Editar</button>
            <button class="btn btn-sm btn-danger" @click="eliminar(producto.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { obtenerProductos, crearProducto, eliminarProducto, editarProducto } from "../services/productService";

export default {
  name: "ProductView",
  data() {
    return {
      productos: [],
      cargando: true,
      nuevoProducto: { title: "", price: "", image: "" },
    };
  },
  methods: {
    async cargarProductos() {
  this.cargando = true;
  const data = await obtenerProductos();
  // Filtrar solo los productos de electrónica
  this.productos = data.filter(p => p.category === "electronics");
  this.cargando = false;
},
    async agregarProducto() {
      if (!this.nuevoProducto.title || !this.nuevoProducto.price) return alert("Completa los campos");
      await crearProducto(this.nuevoProducto);
      alert("Producto agregado (simulado)");
      this.nuevoProducto = { title: "", price: "", image: "" };
      this.cargarProductos();
    },
    async eliminar(id) {
      if (confirm("¿Eliminar producto?")) {
        await eliminarProducto(id);
        alert("Producto eliminado (simulado)");
        this.cargarProductos();
      }
    },
    async editar(producto) {
      const nuevoNombre = prompt("Nuevo nombre:", producto.title);
      if (nuevoNombre) {
        producto.title = nuevoNombre;
        await editarProducto(producto.id, producto);
        alert("Producto editado (simulado)");
        this.cargarProductos();
      }
    },
  },
  mounted() {
    this.cargarProductos();
  },
};
</script>
