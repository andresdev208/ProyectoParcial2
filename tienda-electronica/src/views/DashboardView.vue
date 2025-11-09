<template>
  <div class="d-flex">
    <!-- Sidebar -->
    <SidebarComponent @cerrar-sesion="cerrarSesion" />

    <!-- Contenido principal -->
    <div class="flex-grow-1">
      <!-- Navbar -->
      <NavbarComponent />

      <div class="p-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "../components/SidebarComponent.vue"
import NavbarComponent from "../components/NavbarComponent.vue"

export default {
  name: "DashboardView",
  components: {
    SidebarComponent,
    NavbarComponent
  },
  methods: {
    cerrarSesion() {
      localStorage.removeItem("usuarioActivo")
      this.$router.push("/login")
    }
  }
}
</script>
