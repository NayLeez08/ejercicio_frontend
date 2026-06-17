import { useEffect, useState } from "react"
import {obtenerProductos, obtenerProductoPorId, crearProducto, actualizarProducto,eliminarProducto} from "../services/productoService"
import { Layout } from "../components/Layout"
import { TituloPagina } from "../components/TituloPagina"
import { BotonAccion } from "../components/BotonAccion"
import {FaPlus, FaTrash, FaEdit,FaSearch} from "react-icons/fa"

import "./Productos.css"

const Productos = () => {

    const [productos, setProductos] = useState([])
    const [idProducto, setIdProducto] = useState(null)
    const [idBusqueda, setIdBusqueda] = useState("")

    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState("")
    const [stock, setStock] = useState("")

    useEffect(() => {
        cargarProductos()
    }, [])

    const cargarProductos = async () => {

        try {

            const respuesta =
                await obtenerProductos()

            setProductos(
                respuesta.data.productos
            )

        } catch (error) {
            console.error(error)
        }
    }

    const registrarProducto = async () => {

        try {

            if (!nombre.trim()) {
                alert("Ingrese un nombre")
                return
            }

            await crearProducto({
                nombre,
                precio,
                stock
            })

            await cargarProductos()

            setNombre("")
            setPrecio("")
            setStock("")

            alert(
                "Producto registrado correctamente"
            )

        } catch (error) {

            console.error(error)

            alert(
                "Error al registrar el producto"
            )
        }
    }

    const consultarProducto = async () => {

        if (!idBusqueda) {

            alert(
                "Ingrese un ID para consultar"
            )

            return
        }

        try {

            const respuesta =
                await obtenerProductoPorId(
                    idBusqueda
                )

            const producto =
                respuesta.data.producto ||
                respuesta.data

            if (!producto) {

                alert(
                    "Producto no encontrado"
                )

                return
            }

            setProductos([
                producto
            ])

        } catch (error) {

            console.error(error)

            alert(
                "Producto no encontrado"
            )
        }
    }

    const mostrarTodosProductos = async () => {

        try {

            await cargarProductos()

            setIdBusqueda("")
            setIdProducto(null)

            setNombre("")
            setPrecio("")
            setStock("")

        } catch (error) {

            console.error(error)

            alert(
                "Error al cargar los productos"
            )
        }
    }

    const modificarProducto = async () => {

        if (!idProducto) {

            alert(
                "Seleccione un producto de la tabla"
            )

            return
        }

        try {

            await actualizarProducto(
                idProducto,
                {
                    nombre,
                    precio,
                    stock
                }
            )

            await cargarProductos()

            setIdProducto(null)
            setNombre("")
            setPrecio("")
            setStock("")
            setIdBusqueda("")

            alert(
                "Producto modificado correctamente"
            )

        } catch (error) {

            console.error(error)

            alert(
                "Error al modificar el producto"
            )
        }
    }

    const eliminarProductoHandler = async () => {

        if (!idProducto) {

            alert(
                "Seleccione un producto de la tabla"
            )

            return
        }

        try {

            await eliminarProducto(
                idProducto
            )

            await cargarProductos()

            setIdProducto(null)
            setNombre("")
            setPrecio("")
            setStock("")
            setIdBusqueda("")

            alert(
                "Producto eliminado correctamente"
            )

        } catch (error) {

            console.error(error)

            alert(
                "Error al eliminar el producto"
            )
        }
    }

    const seleccionarProducto = (producto) => {

        setIdProducto(
            producto.id_producto
        )

        setNombre(
            producto.nombre
        )

        setPrecio(
            producto.precio
        )

        setStock(
            producto.stock
        )

        setIdBusqueda(
            producto.id_producto
        )
    }

    return (

        <Layout>

            <TituloPagina
                texto="Sistema de Gestión de Productos"
            />

            <div className="producto-layout">

                <div className="formulario">

                    <h2 className="subtitulo">
                        Datos del Producto
                    </h2>

                    <label>ID</label>

                    <input
                        type="number"
                        placeholder="Ingrese ID del producto solo para consultar"
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
                        placeholder="Ingrese nombre del producto"
                        value={nombre}
                        onChange={(e) =>
                            setNombre(
                                e.target.value
                            )
                        }
                    />

                    <label>Precio</label>

                    <input
                        type="number"
                        placeholder="Ingrese precio"
                        value={precio}
                        onChange={(e) =>
                            setPrecio(
                                e.target.value
                            )
                        }
                    />

                    <label>Stock</label>

                    <input
                        type="number"
                        placeholder="Ingrese stock"
                        value={stock}
                        onChange={(e) =>
                            setStock(
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
                                registrarProducto
                            }
                        />

                        <BotonAccion
                            icono={<FaTrash />}
                            texto="Eliminar"
                            clase="eliminar"
                            onClick={
                                eliminarProductoHandler
                            }
                        />

                        <BotonAccion
                            icono={<FaEdit />}
                            texto="Modificar"
                            clase="modificar"
                            onClick={
                                modificarProducto
                            }
                        />

                        <BotonAccion
                            icono={<FaSearch />}
                            texto="Consultar"
                            clase="consultar"
                            onClick={
                                consultarProducto
                            }
                        />
                        <BotonAccion
                            icono={<FaSearch />}
                            texto="Mostrar Todos"
                            clase="mostrar-todas boton-mostrar-todas"
                            onClick={
                                mostrarTodosProductos
                            }
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

                                <tr
                                    key={
                                        producto.id_producto
                                    }
                                    onClick={() =>
                                        seleccionarProducto(
                                            producto
                                        )
                                    }
                                    style={{
                                        cursor: "pointer"
                                    }}
                                >
                                    <td>
                                        {producto.id_producto}
                                    </td>

                                    <td>
                                        {producto.nombre}
                                    </td>

                                    <td>
                                        {producto.precio}
                                    </td>

                                    <td>
                                        {producto.stock}
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

export default Productos