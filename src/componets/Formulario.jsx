import React, { useState } from 'react'
import styled from '@emotion/styled'
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helper'

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

const Label = styled.label`
    flex: 0 0 100px;
`

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`

const InputRadio = styled.input`
    margin: 0 1em;
`

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1 rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`    

const Formulario = ({updateResumen}) => {

    const valida = values =>{
        
        const errors = {}
        if(!values.marca){
            errors.marca = "*Debes seleccionar una marca"
        }
        if(!values.year){
            errors.year = "*Debes seleccionar una año"
        }
        if(!values.plan){
            errors.plan = "*Debes seleccionar un plan"
        }

        return errors
    }

    const [cotizador, updateCotizador] = useState({
        'marca': '',
        'year': '',
        'plan':'',
        'errors': {}
    })

    const {marca, year, plan, errors} = cotizador

    const handleOnchange = e =>{
        updateCotizador({
            ...cotizador,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {        
        e.preventDefault()

        const {errors, ...otrosDatos} = cotizador
        const result = valida(otrosDatos)

        updateCotizador({
            ...cotizador,
            'errors': result
        })

        if(Object.keys(result).length === 0){
            let resultado = 2000;
            const diferencia = obtenerDiferenciaYear(year)
            resultado -= ((diferencia * 3) * resultado)/100
            resultado = calcularMarca(marca) * resultado
            const incrementoPlan = obtenerPlan(plan)
            resultado = parseFloat( incrementoPlan * resultado).toFixed(2)

            updateResumen({
                cotizacion: resultado,
                cotizador: otrosDatos
            })
            
            return
        }        
    }

    return (
        <form onSubmit={handleSubmit}>
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={handleOnchange}
                >
                    <option value="">-- Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>                
            </Campo>
            {errors.marca && <Error>{errors.marca}</Error>}

            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={handleOnchange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            {errors.year && <Error>{errors.year}</Error>}

            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={handleOnchange}
                />Básico

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={handleOnchange}
                />Completo
            </Campo>
            {errors.plan && <Error>{errors.plan}</Error>}

            <Boton
                type="submit">
                    Cotizar
                </Boton>
        </form>
    )
}

export default Formulario