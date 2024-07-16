import React from 'react'

import TituloPaginaTablet from './titulopaginatablet.jsx'
import NosotrosTablet from './nosotrostablet.jsx'
import AdrenalineTablet from '../home/adrenalinetablet.jsx'
import ViajaConNostrosTablet from '../home/viajaconnosotrostablet.jsx'
import NestroEquipoTablet from '../home/nuestroequipotablet.jsx'

export default function AcercaDePanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'aut0'}}>
            <TituloPaginaTablet proporcional={proporcional}/>
            <NosotrosTablet proporcional={proporcional}/>
            <AdrenalineTablet proporcional={proporcional} background={'white'}/>
            <ViajaConNostrosTablet proporcional={proporcional}/>
            <NestroEquipoTablet proporcional={proporcional}/>
        </div>
    )
}
