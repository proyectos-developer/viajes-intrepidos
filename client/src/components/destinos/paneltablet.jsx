import React from 'react'

import TituloPaginaTablet from './titulopaginatablet.jsx'
import DestinosTablet from './destinostablet.jsx'

export default function DestinosPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <TituloPaginaTablet proporcional={proporcional}/>
            <DestinosTablet proporcional={proporcional}/>
        </div>
    )
}
