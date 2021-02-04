import React from 'react'
import styled from '@emotion/styled'
import { primeraMayuscula } from '../helper'
import PropTypes from "prop-types";

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`

const Resumen = ({cotizador}) => {
    const { marca, year, plan } = cotizador
    return (
        <ContenedorResumen>
            <h2>Resumen</h2>
            <ul>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Año: {year}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>
    )
}

Resumen.propTypes = {
    cotizador: PropTypes.object.isRequired    
}

export default Resumen