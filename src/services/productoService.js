import axios from "axios";

//URL base
const API_URL = "http://localhost:3000/api";

// Obtener todos los productos
export const obtenerProductos = () => {
    return axios.get(`${API_URL}/productos/todos`);
};

// Obtener producto por ID
export const obtenerProductoPorId = (id) => {
    return axios.get(`${API_URL}/productos/${id}`);
};

// Crear producto
export const crearProducto = (producto) => {
    return axios.post(`${API_URL}/productos/crear`, producto);
};

// Actualizar producto
export const actualizarProducto = (id, producto) => {
    return axios.put(`${API_URL}/productos/${id}`, producto);
};

// Eliminar producto
export const eliminarProducto = (id) => {
    return axios.delete(`${API_URL}/productos/ ${id}`);
};