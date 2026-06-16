import Sidebar from "./Sidebar";

export const Layout = ({ children }) => {
    return (
        <div className="contenedor">

            <Sidebar />

            <div className="contenido">
                {children}
            </div>

        </div>
    );
};