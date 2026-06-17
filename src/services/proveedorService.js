import axios from "axios";

//URL base
const API_URL = "http://localhost:3000/api";

// Obtener todos los proveedores
export const obtenerProveedores = () => {
    return axios.get(`${API_URL}/proveedores/todos`);
};

// Obtener un proveedor por ID
export const obtenerProveedorPorId = (id) => {
    return axios.get(`${API_URL}/proveedores/${id}`);
};

// Crear proveedor
export const crearProveedor = (proveedor) => {
    return axios.post(`${API_URL}/proveedores/crear`, proveedor);
};

// Actualizar proveedor
export const actualizarProveedor = (id, proveedor) => {
    return axios.put(`${API_URL}/proveedores/${id}`, proveedor);
};

// Eliminar proveedor
export const eliminarProveedor = (id) => {
    return axios.delete(`${API_URL}/proveedores/${id}`);
};