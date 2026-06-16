import React from 'react'

export const CardInfo = ({ icono, titulo, parrafo, clase }) => {
    return (
        <div className={`card-info ${clase}`}>
            <div className="icono">
                {icono}
            </div>

            <h2>{titulo}</h2>
            <p>{parrafo}</p>
        </div>
    )
}