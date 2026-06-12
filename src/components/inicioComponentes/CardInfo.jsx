import React from 'react'

export const CardInfo = ({  titulo, parrafo }) => {
    return (
        <div className="card-info productos">

           

            <h2>{titulo}</h2>

            <p>
                {parrafo}
            </p>

        </div>
    )
}
