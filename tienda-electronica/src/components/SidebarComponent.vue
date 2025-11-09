<template>
  <div class="bg-dark text-white p-3" style="width: 220px; height: 100vh;">
    <h5 class="text-center mb-4">Tienda Electrónica</h5>
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/dashboard/productos" class="nav-link text-white">
          Productos
        </router-link>
      </li>
      <li class="nav-item mt-3">
        <button @click="$emit('cerrar-sesion')" class="btn btn-sm btn-danger w-100">
          Cerrar sesión
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent"
}
</script>

<style scoped>
.nav-link:hover {
  background-color: #495057;
  border-radius: 5px;
}
</style>
