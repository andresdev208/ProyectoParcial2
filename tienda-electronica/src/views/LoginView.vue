<template>
  <div class="container mt-5" style="max-width: 400px;">
    <h3 class="text-center mb-4">Iniciar Sesión</h3>

    <div class="card p-4 shadow-sm">
      <form @submit.prevent="login">
        <div class="mb-3">
          <label class="form-label">Usuario</label>
          <input v-model="usuario" type="text" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input v-model="contrasena" type="password" class="form-control" required />
        </div>

        <div v-if="error" class="alert alert-danger py-2 text-center">
          Usuario o contraseña incorrectos
        </div>

        <button class="btn btn-primary w-100" type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import usuarios from "../data/usuarios.json"

export default {
  name: "LoginView",
  data() {
    return {
      usuario: "",
      contrasena: "",
      error: false
    }
  },
  methods: {
    login() {
      const user = usuarios.find(
        u => u.usuario === this.usuario && u.contrasena === this.contrasena
      )

      if (user) {
        localStorage.setItem("usuarioActivo", this.usuario)
        this.$router.push("/dashboard")
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style>
body {
  background-color: #f8f9fa;
}
</style>
