import React from 'react'

import TituloPagina from './titulopagina.jsx'
import Destinos from './destinos.jsx'

export default function DestinosPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <TituloPagina proporcional={proporcional}/>
            <Destinos proporcional={proporcional}/>
        </div>
    )
}
