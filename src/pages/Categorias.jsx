import { useEffect, useState } from "react";
import { obtenerCategorias } from "../services/categoriaService";
import Sidebar from "../components/Sidebar";
import "./Categorias.css";

function Categorias() {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        cargarCategorias();
    }, []);

    const cargarCategorias = async () => {
        try {
            const respuesta = await obtenerCategorias();
            setCategorias(respuesta.data.categorias);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="contenedor">

            <Sidebar />

            <div className="contenido">

                <h1 className="titulo">
                    Sistema de Gestión de Categorías
                </h1>

                <div className="categoria-layout">

                    <div className="formulario">

                        <h2 className="subtitulo">
                            Datos de la Categoría
                        </h2>

                        <label>Nombre</label>
                        <input
                            type="text"
                            placeholder="Ingrese nombre de la categoría"
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
                            Lista de Categorías
                        </h2>

                        <table className="tabla">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                </tr>
                            </thead>

                            <tbody>
                                {categorias.map((categoria) => (
                                    <tr key={categoria.id_categoria}>
                                        <td>{categoria.id_categoria}</td>
                                        <td>{categoria.nombre}</td>
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

export default Categorias;