import React from 'react'

const Resumen = ({cotizador}) => {
    const { marca, year, plan } = cotizador
    return (
        <div>
            <h2>Resumen</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Año: {year}</li>
                <li>Plan: {plan}</li>
            </ul>
        </div>
    )
}

export default Resumen