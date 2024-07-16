import React from 'react'

import TituloPagina from './titulopagina.jsx'
import Nosotros from './nosotros.jsx'
import Adrenaline from '../home/adrenaline'
import ViajaConNostros from '../home/viajaconnosotros.jsx'
import NestroEquipo from '../home/nuestroequipo.jsx'

export default function AcercaDePanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'aut0'}}>
            <TituloPagina proporcional={proporcional}/>
            <Nosotros proporcional={proporcional}/>
            <Adrenaline proporcional={proporcional} background={'white'}/>
            <ViajaConNostros proporcional={proporcional}/>
            <NestroEquipo proporcional={proporcional}/>
        </div>
    )
}
