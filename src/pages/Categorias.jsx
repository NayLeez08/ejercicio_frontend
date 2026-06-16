import { useEffect, useState } from "react";
import { obtenerCategorias } from "../services/categoriaService";
import { Layout } from "../components/Layout";
import { TituloPagina } from "../components/TituloPagina";
import { BotonAccion } from "../components/BotonAccion";
import { FaPlus, FaTrash, FaEdit, FaSearch } from "react-icons/fa";

import "./Categorias.css";

function Categorias() {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        cargarCategorias();
    }, []);

    const cargarCategorias = async () => {
        try {

            const respuesta = await obtenerCategorias();

            setCategorias(
                respuesta.data.categorias
            );

        } catch (error) {

            console.error(error);

        }
    };

    return (
        <Layout>
            <TituloPagina
                texto="Sistema de Gestión de Categorías"
            />

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

                                <tr
                                    key={categoria.id_categoria}
                                >
                                    <td>
                                        {categoria.id_categoria}
                                    </td>

                                    <td>
                                        {categoria.nombre}
                                    </td>
                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </Layout>
    );
}

export default Categorias;