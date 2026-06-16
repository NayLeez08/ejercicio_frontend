import React from "react";

export const BotonAccion = ({ icono, texto, clase, onClick }) => {
    return (
        <button
            className={`btn ${clase}`}
            onClick={onClick}
        >
            {icono}
            <span>{texto}</span>
        </button>
    );
};