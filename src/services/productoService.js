import axios from "axios";

const API_URL = "http://localhost:3000/api";

// Obtener todos los productos
export const obtenerProductos = () => {
    return axios.get(`${API_URL}/todos`);
};

// Obtener producto por ID
export const obtenerProductoPorId = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Crear producto
export const crearProducto = (producto) => {
    return axios.post(`${API_URL}/crear`, producto);
};

// Actualizar producto
export const actualizarProducto = (id, producto) => {
    return axios.put(`${API_URL}/${id}`, producto);
};

// Eliminar producto
export const eliminarProducto = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};