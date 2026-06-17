import { CardInfo } from "../components/inicioComponentes/CardInfo";
import { Layout } from "../components/Layout";
import { FaBoxOpen, FaTags, FaTruck } from "react-icons/fa";
import "./Inicio.css";

const Inicio = () => {
    return (
        <Layout>
            {/* ENCABEZADO */}
            <div className="hero">

                <h1 className="titulo">
                    Tienda de Abarrotes "Lo Que Sea"
                </h1>

                <p className="slogan">
                    Sistema de Gestión de Inventario
                </p>

            </div>

            {/* TARJETAS */}
            <div className="dashboard">

                <CardInfo
                    titulo="Productos"
                    parrafo="Gestión y control de inventario"
                    icono={<FaBoxOpen />}
                    clase="productos"
                />

                <CardInfo
                    titulo="Categorías"
                    parrafo="Organización de productos"
                    icono={<FaTags />}
                    clase="categorias"
                />

                <CardInfo
                    titulo="Proveedores"
                    parrafo="Administración de proveedores"
                    icono={<FaTruck />}
                    clase="proveedores"
                />

            </div>

            {/* BIENVENIDA */}
            <div className="bienvenida">
                <div className="bienvenida-texto">
                    <h2>
                        BIENVENIDO AL SISTEMA
                    </h2>

                    <p>
                        Desde esta plataforma podrá administrar
                        productos, categorías y proveedores
                        de manera rápida y organizada.
                    </p>

                    <p>
                        Utilice el menú lateral para acceder
                        a los diferentes módulos del sistema.
                    </p>

                </div>
            </div>

        </Layout>
    );
}

export default Inicio;