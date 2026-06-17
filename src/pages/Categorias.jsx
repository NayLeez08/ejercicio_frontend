import { useEffect, useState } from "react"
import { obtenerCategorias, obtenerCategoriaPorId, crearCategoria, actualizarCategoria, eliminarCategoria } from "../services/categoriaService"
import { Layout } from "../components/Layout"
import { TituloPagina } from "../components/TituloPagina"
import { BotonAccion } from "../components/BotonAccion"
import { FaPlus, FaTrash, FaEdit, FaSearch } from "react-icons/fa"
import "./Categorias.css"

const Categorias = () => {

    const [categorias, setCategorias] = useState([])
    const [idCategoria, setIdCategoria] = useState(null)
    const [idBusqueda, setIdBusqueda] = useState("")
    const [nombre, setNombre] = useState("")

    useEffect(() => {
        cargarCategorias()
    }, [])

    const cargarCategorias = async () => {
        try {

            const respuesta =
                await obtenerCategorias()

            setCategorias(
                respuesta.data.categorias
            )

        } catch (error) {
            console.error(error)
        }
    }

    const registrarCategoria = async () => {

        try {

            if (!nombre.trim()) {
                alert("Ingrese un nombre")
                return
            }

            await crearCategoria({
                nombre
            })

            await cargarCategorias()

            setNombre("")

            alert(
                "Categoría registrada correctamente"
            )

        } catch (error) {

            console.error(error)

            alert(
                "Error al registrar la categoría"
            )
        }
    }

    const consultarCategoria = async () => {

        if (!idBusqueda) {
            alert(
                "Ingrese un ID para consultar"
            )
            return
        }

        try {

            const respuesta =
                await obtenerCategoriaPorId(
                    idBusqueda
                )

            setCategorias([
                respuesta.data
            ])

        } catch (error) {

            console.error(error)

            alert(
                "Categoría no encontrada"
            )
        }
    }

    const mostrarTodasCategorias = async () => {

        try {

            await cargarCategorias()

            setIdBusqueda("")
            setIdCategoria(null)
            setNombre("")

        } catch (error) {

            console.error(error)

            alert(
                "Error al cargar las categorías"
            )
        }
    }

    const modificarCategoria = async () => {

        if (!idCategoria) {

            alert(
                "Seleccione una categoría de la tabla"
            )

            return
        }

        try {

            await actualizarCategoria(
                idCategoria,
                { nombre }
            )

            await cargarCategorias()

            setIdCategoria(null)
            setNombre("")
            setIdBusqueda("")

            alert(
                "Categoría modificada correctamente"
            )

        } catch (error) {

            console.error(error)

            alert(
                "Error al modificar la categoría"
            )
        }
    }

    const eliminarCategoriaHandler = async () => {

        if (!idCategoria) {

            alert(
                "Seleccione una categoría de la tabla"
            )

            return
        }

        try {

            await eliminarCategoria(
                idCategoria
            )

            await cargarCategorias()

            setIdCategoria(null)
            setNombre("")
            setIdBusqueda("")

            alert(
                "Categoría eliminada correctamente"
            )

        } catch (error) {

            console.error(error)

            alert(
                "Error al eliminar la categoría"
            )
        }
    }

    const seleccionarCategoria = (categoria) => {

        setIdCategoria(
            categoria.id_categoria
        )

        setNombre(
            categoria.nombre
        )

        setIdBusqueda(
            categoria.id_categoria
        )
    }

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

                    <label>ID</label>

                    <input
                        type="number"
                        placeholder="Ingrese ID de la categoría, solo para consultar"
                        value={idBusqueda}
                        onChange={(e) =>
                            setIdBusqueda(
                                e.target.value
                            )
                        }
                    />

                    <label>Nombre</label>

                    <input
                        type="text"
                        placeholder="Ingrese nombre de la categoría"
                        value={nombre}
                        onChange={(e) =>
                            setNombre(
                                e.target.value
                            )
                        }
                    />

                    <div className="botones">

                        <BotonAccion
                            icono={<FaPlus />}
                            texto="Registrar"
                            clase="registrar"
                            onClick={
                                registrarCategoria
                            }
                        />

                        <BotonAccion
                            icono={<FaTrash />}
                            texto="Eliminar"
                            clase="eliminar"
                            onClick={
                                eliminarCategoriaHandler
                            }
                        />

                        <BotonAccion
                            icono={<FaEdit />}
                            texto="Modificar"
                            clase="modificar"
                            onClick={
                                modificarCategoria
                            }
                        />

                        <BotonAccion
                            icono={<FaSearch />}
                            texto="Consultar"
                            clase="consultar"
                            onClick={
                                consultarCategoria
                            }
                        />

                        <BotonAccion
                            icono={<FaSearch />}
                            texto="Mostrar Todas"
                            clase="mostrar-todas boton-mostrar-todas"
                            onClick={mostrarTodasCategorias}
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
                                    key={
                                        categoria.id_categoria
                                    }
                                    onClick={() =>
                                        seleccionarCategoria(
                                            categoria
                                        )
                                    }
                                    style={{
                                        cursor: "pointer"
                                    }}
                                >
                                    <td>
                                        {
                                            categoria.id_categoria
                                        }
                                    </td>

                                    <td>
                                        {
                                            categoria.nombre
                                        }
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </Layout>
    )
}

export default Categorias