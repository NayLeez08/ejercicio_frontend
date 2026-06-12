import { CardInfo } from "../components/inicioComponentes/CardInfo";
import Sidebar from "../components/Sidebar";
import "./Inicio.css";

function Inicio() {
    return (
        <div className="contenedor">

            <Sidebar />

            <div className="contenido">

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
                        parrafo="Gestion y control de inventario"

                    />
                    <CardInfo
                        titulo="Categorías"
                        parrafo="Organización de productos"

                    />
                    <CardInfo
                        titulo="Proveedores"
                        parrafo="Administración de proveedores"

                    />

                </div>

                {/* BIENVENIDA */}

                <div className="bienvenida">

                    <div className="bienvenida-texto">

                        <h2>
                            Bienvenido al Sistema
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

            </div>

        </div>
    );
}

export default Inicio;