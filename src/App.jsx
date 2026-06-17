import { Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Categorias from "./pages/Categorias";
import Productos from "./pages/Productos";
import Proveedores from "./pages/Proveedores";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/proveedores" element={<Proveedores />} />
    </Routes>
  );
}

export default App;