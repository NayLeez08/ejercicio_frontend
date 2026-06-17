import "./Sidebar.css";
import { FaHome, FaBoxOpen, FaTags, FaTruck, FaCubes } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar-header">

                <div className="logo">
                    <FaCubes />
                </div>

                <h2>
                    Sistema de Gestión
                </h2>

            </div>

            <nav className="menu">

                <a href="/" className="menu-item">
                    <FaHome />
                    <span>Inicio</span>
                </a>

                <a href="/productos" className="menu-item">
                    <FaBoxOpen />
                    <span>Productos</span>
                </a>

                <a href="/categorias" className="menu-item">
                    <FaTags />
                    <span>Categorías</span>
                </a>

                <a href="/proveedores" className="menu-item">
                    <FaTruck />
                    <span>Proveedores</span>
                </a>

            </nav>

        </div>
    );
};

export default Sidebar;