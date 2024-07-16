import React from 'react'

import TituloPaginaCell from './titulopaginacell.jsx'
import NosotrosCell from './nosotroscell.jsx'
import AdrenalineCell from '../home/adrenalinecell.jsx'
import ViajaConNostrosCell from '../home/viajaconnosotroscell.jsx'
import NestroEquipoCell from '../home/nuestroequipocell.jsx'

export default function AcercaDePanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'aut0'}}>
            <TituloPaginaCell proporcional={proporcional}/>
            <NosotrosCell proporcional={proporcional}/>
            <AdrenalineCell proporcional={proporcional} background={'white'}/>
            <ViajaConNostrosCell proporcional={proporcional}/>
            <NestroEquipoCell proporcional={proporcional}/>
        </div>
    )
}
