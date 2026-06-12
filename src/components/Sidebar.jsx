import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar-header">

                <div className="logo">
                    🏪
                </div>

                <h2>
                    Sistema de Gestión
                </h2>

            </div>

            <nav className="menu">

                <a href="/" className="menu-item">
                    🏠 Inicio
                </a>

                <a href="/productos" className="menu-item">
                    📦 Productos
                </a>

                <a href="/categorias" className="menu-item">
                    📂 Categorías
                </a>

                <a href="/proveedores" className="menu-item">
                    🚚 Proveedores
                </a>

            </nav>



        </div>
    );
}

export default Sidebar;