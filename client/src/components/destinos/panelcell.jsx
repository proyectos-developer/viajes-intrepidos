import React from 'react'

import TituloPaginaCell from './titulopaginacell.jsx'
import DestinosCell from './destinoscell.jsx'

export default function DestinosPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <TituloPaginaCell proporcional={proporcional}/>
            <DestinosCell proporcional={proporcional}/>
        </div>
    )
}
