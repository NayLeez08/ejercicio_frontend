import { useEffect, useState } from "react";
import { obtenerProductos } from "../services/productoService";
import Sidebar from "../components/Sidebar";
import "./Productos.css";

function Productos() {

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

                            <button className="btn registrar">
                                Registrar
                            </button>

                            <button className="btn eliminar">
                                Eliminar
                            </button>

                            <button className="btn modificar">
                                Modificar
                            </button>

                            <button className="btn consultar">
                                Consultar
                            </button>

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