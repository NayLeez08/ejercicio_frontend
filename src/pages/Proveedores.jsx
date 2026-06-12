import { useEffect, useState } from "react";
import { obtenerProveedores } from "../services/proveedorService";
import Sidebar from "../components/Sidebar";
import "./Proveedores.css";

function Proveedores() {

    const [proveedores, setProveedores] = useState([]);

    useEffect(() => {
        cargarProveedores();
    }, []);

    const cargarProveedores = async () => {
        try {
            const respuesta = await obtenerProveedores();
            setProveedores(respuesta.data.proveedores);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="contenedor">

            <Sidebar />

            <div className="contenido">

                <h1 className="titulo">
                    Sistema de Gestión de Proveedores
                </h1>

                <div className="proveedor-layout">

                    <div className="formulario">

                        <h2 className="subtitulo">
                            Datos del Proveedor
                        </h2>

                        <label>Nombre</label>
                        <input
                            type="text"
                            placeholder="Ingrese nombre del proveedor"
                        />

                        <label>Teléfono</label>
                        <input
                            type="text"
                            placeholder="Ingrese teléfono"
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Ingrese correo electrónico"
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
                            Lista de Proveedores
                        </h2>

                        <table className="tabla">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Teléfono</th>
                                    <th>Email</th>
                                </tr>
                            </thead>

                            <tbody>
                                {proveedores.map((proveedor) => (
                                    <tr key={proveedor.id_proveedor}>
                                        <td>{proveedor.id_proveedor}</td>
                                        <td>{proveedor.nombre}</td>
                                        <td>{proveedor.telefono}</td>
                                        <td>{proveedor.email}</td>
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

export default Proveedores;