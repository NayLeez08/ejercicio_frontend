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

                    <div className="card-info productos">

                        <div className="icono">
                            📦
                        </div>

                        <h2>Productos</h2>

                        <p>
                            Gestión y control de inventario
                        </p>

                    </div>

                    <div className="card-info categorias">

                        <div className="icono">
                            📂
                        </div>

                        <h2>Categorías</h2>

                        <p>
                            Organización de productos
                        </p>

                    </div>

                    <div className="card-info proveedores">

                        <div className="icono">
                            🚚
                        </div>

                        <h2>Proveedores</h2>

                        <p>
                            Administración de proveedores
                        </p>

                    </div>

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

                {/* INFORMACION */}

               

            </div>

        </div>
    );
}

export default Inicio;