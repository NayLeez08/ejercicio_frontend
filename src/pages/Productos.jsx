import { useEffect, useState } from "react";
import { obtenerProductos } from "../services/productoService";
import Sidebar from "../components/Sidebar";
import { BotonAccion } from "../components/BotonAccion";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import "./Productos.css";

function Productos() {//funciones de flecha

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            const respuesta = await obtenerProductos();
            setProductos(respuesta.data.productos);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="contenedor">

            <Sidebar />

            <div className="contenido">

                <h1 className="titulo">
                    Sistema de Gestión de Productos
                </h1>

                <div className="producto-layout">

                    <div className="formulario">

                        <h2 className="subtitulo">
                            Datos del Producto
                        </h2>

                        <label>Nombre</label>
                        <input
                            type="text"
                            placeholder="Ingrese nombre del producto"
                        />

                        <label>Precio</label>
                        <input
                            type="number"
                            placeholder="Ingrese precio"
                        />

                        <label>Stock</label>
                        <input
                            type="number"
                            placeholder="Ingrese stock"
                        />

                        <div className="botones">

                            <BotonAccion
                                icono={<FaPlus />}
                                texto="Registrar"
                                clase="registrar"
                            />

                            <BotonAccion
                                icono={<FaTrash />}
                                texto="Eliminar"
                                clase="eliminar"
                            />

                            <BotonAccion
                                icono={<FaEdit />}
                                texto="Modificar"
                                clase="modificar"
                            />

                            <BotonAccion
                                icono={<FaSearch />}
                                texto="Consultar"
                                clase="consultar"
                            />

                        </div>

                    </div>

                    <div className="tabla-container">

                        <h2 className="subtitulo-tabla">
                            Lista de Productos
                        </h2>

                        <table className="tabla">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>

                            <tbody>
                                {productos.map((producto) => (
                                    <tr key={producto.id_producto}>
                                        <td>{producto.id_producto}</td>
                                        <td>{producto.nombre}</td>
                                        <td>${producto.precio}</td>
                                        <td>{producto.stock}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Productos;