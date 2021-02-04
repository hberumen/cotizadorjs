import { useState } from 'react'
import Header from "./componets/Header";
import styled from '@emotion/styled'
import Formulario from "./componets/Formulario";
import Resumen from "./componets/Resumen";
import Resultado from "./componets/Resultado";
import Spinner from "./componets/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin:0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

function App() {

  const [resumen, updateResumen] = useState({})
  const [cargando, updateCargando] = useState(false)
  const { cotizacion, cotizador } = resumen

  return (
    <Contenedor>
        <Header 
          titulo="Cotizador" 
        />

        <ContenedorFormulario>
          <Formulario 
            updateResumen={updateResumen}
            updateCargando={updateCargando}
          />

          { cargando ? <Spinner />: null }   
          { cotizacion && <Resumen cotizador={cotizador}/>}
          {!cargando ? <Resultado cotizacion={cotizacion}/>  : null}
                   
          
        </ContenedorFormulario>
    </Contenedor>      
  );
}

export default App;
