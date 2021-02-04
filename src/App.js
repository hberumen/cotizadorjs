import { useState } from 'react'
import Header from "./componets/Header";
import styled from '@emotion/styled'
import Formulario from "./componets/Formulario";
import Resumen from "./componets/Resumen";
import Resultado from "./componets/Resultado";

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
  const { cotizacion, cotizador } = resumen

  return (
    <Contenedor>
        <Header 
          titulo="Cotizador" 
        />

        <ContenedorFormulario>
          <Formulario 
            updateResumen={updateResumen}
          />

          {
            cotizacion && <Resumen 
              cotizador={cotizador}
            />
          }

          <Resultado 
            cotizacion={cotizacion}
            />          
          
        </ContenedorFormulario>
    </Contenedor>      
  );
}

export default App;
