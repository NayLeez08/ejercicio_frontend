import axios from "axios";

const API_URL = "http://localhost:3000/api/";

export const obtenerCategorias = () => {
    return axios.get(`${API_URL}categorias/`);
};

export const obtenerCategoriaPorId = (id) => {
    return axios.get(`${API_URL}categorias/${id}`);
};

export const crearCategoria = (categoria) => {
    return axios.post(`${API_URL}categorias/crear`, categoria);
};

export const actualizarCategoria = (id, categoria) => {
    return axios.put(`${API_URL}categorias/${id}`, categoria);
};

export const eliminarCategoria = (id) => {
    return axios.delete(`${API_URL}categorias/${id}`);
};