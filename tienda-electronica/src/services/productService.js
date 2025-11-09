const API_URL = "https://fakestoreapi.com/products";

// Obtener todos los productos (GET)
export async function obtenerProductos() {
  const res = await fetch(API_URL);
  return await res.json();
}

// Crear un nuevo producto (POST)
export async function crearProducto(producto) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  return await res.json();
}

// Actualizar producto (PUT)
export async function editarProducto(id, producto) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  return await res.json();
}

// Eliminar producto (DELETE)
export async function eliminarProducto(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return await res.json();
}
