import { useEffect, useState } from "react"
import { obtenerProveedores, obtenerProveedorPorId, crearProveedor, actualizarProveedor, eliminarProveedor } from "../services/proveedorService"
import { Layout } from "../components/Layout"
import { TituloPagina } from "../components/TituloPagina"
import { BotonAccion } from "../components/BotonAccion"
import { FaPlus, FaTrash, FaEdit, FaSearch } from "react-icons/fa"

import "./Proveedores.css"

const Proveedores = () => {

    const [proveedores, setProveedores] = useState([])
    const [idProveedor, setIdProveedor] = useState(null)
    const [idBusqueda, setIdBusqueda] = useState("")

    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        cargarProveedores()
    }, [])

    const cargarProveedores = async () => {

        try {

            const respuesta =
                await obtenerProveedores()

            setProveedores(
                respuesta.data.proveedores
            )

        } catch (error) {
            console.error(error)
        }
    }

    const registrarProveedor = async () => {

        try {

            if (!nombre.trim()) {
                alert("Ingrese un nombre")
                return
            }

            await crearProveedor({
                nombre,
                telefono,
                email
            })

            await cargarProveedores()

            setNombre("")
            setTelefono("")
            setEmail("")

            alert(
                "Proveedor registrado correctamente"
            )

        } catch (error) {

            console.error(error)

            alert(
                "Error al registrar el proveedor"
            )
        }
    }

    const consultarProveedor = async () => {

        if (!idBusqueda) {

            alert(
                "Ingrese un ID para consultar"
            )

            return
        }

        try {

            const respuesta =
                await obtenerProveedorPorId(
                    idBusqueda
                )

            const proveedor =
                respuesta.data.proveedor ||
                respuesta.data

            if (!proveedor) {

                alert(
                    "Proveedor no encontrado"
                )

                return
            }

            setProveedores([
                proveedor
            ])

        } catch (error) {

            console.error(error)

            alert(
                "Proveedor no encontrado"
            )
        }
    }

    const mostrarTodosProveedores = async () => {

        try {

            await cargarProveedores()

            setIdBusqueda("")
            setIdProveedor(null)

            setNombre("")
            setTelefono("")
            setEmail("")

        } catch (error) {

            console.error(error)

            alert(
                "Error al cargar los proveedores"
            )
        }
    }

    const modificarProveedor = async () => {

        if (!idProveedor) {

            alert(
                "Seleccione un proveedor de la tabla"
            )

            return
        }

        try {

            await actualizarProveedor(
                idProveedor,
                {
                    nombre,
                    telefono,
                    email
                }
            )

            await cargarProveedores()

            setIdProveedor(null)
            setNombre("")
            setTelefono("")
            setEmail("")
            setIdBusqueda("")

            alert(
                "Proveedor modificado correctamente"
            )

        } catch (error) {

            console.error(error)

            alert(
                "Error al modificar el proveedor"
            )
        }
    }

    const eliminarProveedorHandler = async () => {

        if (!idProveedor) {

            alert(
                "Seleccione un proveedor de la tabla"
            )

            return
        }

        try {

            await eliminarProveedor(
                idProveedor
            )

            await cargarProveedores()

            setIdProveedor(null)
            setNombre("")
            setTelefono("")
            setEmail("")
            setIdBusqueda("")

            alert(
                "Proveedor eliminado correctamente"
            )

        } catch (error) {

            console.error(error)

            alert(
                "Error al eliminar el proveedor"
            )
        }
    }

    const seleccionarProveedor = (proveedor) => {

        setIdProveedor(
            proveedor.id_proveedor
        )

        setNombre(
            proveedor.nombre
        )

        setTelefono(
            proveedor.telefono
        )

        setEmail(
            proveedor.email
        )

        setIdBusqueda(
            proveedor.id_proveedor
        )
    }

    return (

        <Layout>

            <TituloPagina
                texto="Sistema de Gestión de Proveedores"
            />

            <div className="proveedor-layout">

                <div className="formulario">

                    <h2 className="subtitulo">
                        Datos del Proveedor
                    </h2>

                    <label>ID</label>

                    <input
                        type="number"
                        placeholder="Ingrese ID del proveedor solo para consultar"
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
                        placeholder="Ingrese nombre del proveedor"
                        value={nombre}
                        onChange={(e) =>
                            setNombre(
                                e.target.value
                            )
                        }
                    />

                    <label>Teléfono</label>

                    <input
                        type="text"
                        placeholder="Ingrese teléfono"
                        value={telefono}
                        onChange={(e) =>
                            setTelefono(
                                e.target.value
                            )
                        }
                    />

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Ingrese email"
                        value={email}
                        onChange={(e) =>
                            setEmail(
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
                                registrarProveedor
                            }
                        />

                        <BotonAccion
                            icono={<FaTrash />}
                            texto="Eliminar"
                            clase="eliminar"
                            onClick={
                                eliminarProveedorHandler
                            }
                        />

                        <BotonAccion
                            icono={<FaEdit />}
                            texto="Modificar"
                            clase="modificar"
                            onClick={
                                modificarProveedor
                            }
                        />

                        <BotonAccion
                            icono={<FaSearch />}
                            texto="Consultar"
                            clase="consultar"
                            onClick={
                                consultarProveedor
                            }
                        />

                        <BotonAccion
                            icono={<FaSearch />}
                            texto="Mostrar Todos"
                            clase="mostrar-todas boton-mostrar-todas"
                            onClick={
                                mostrarTodosProveedores
                            }
                        />

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

                                <tr
                                    key={
                                        proveedor.id_proveedor
                                    }
                                    onClick={() =>
                                        seleccionarProveedor(
                                            proveedor
                                        )
                                    }
                                    style={{
                                        cursor: "pointer"
                                    }}
                                >
                                    <td>
                                        {proveedor.id_proveedor}
                                    </td>

                                    <td>
                                        {proveedor.nombre}
                                    </td>

                                    <td>
                                        {proveedor.telefono}
                                    </td>

                                    <td>
                                        {proveedor.email}
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

export default Proveedores