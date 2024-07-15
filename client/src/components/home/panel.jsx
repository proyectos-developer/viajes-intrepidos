import React from 'react'

import BannerPrincipal from './bannerprincipal.jsx'
import DestinosPopulares from './destinospopulares.jsx'
import CarouselFrases from './carouselfrases.jsx'
import Adrenaline from './adrenaline.jsx'
import LugaresDescanso from './lugaresdescanso.jsx'
import ViajaConNostros from './viajaconnosotros.jsx'
import NuevoBlog from './nuevoblog.jsx'

export default function HomePanel({proporcional}) {
        
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <BannerPrincipal proporcional={proporcional}/>
            <DestinosPopulares proporcional={proporcional}/>
            <CarouselFrases proporcional={proporcional}/>
            <Adrenaline proporcional={proporcional}/>
            <LugaresDescanso proporcional={proporcional}/>
            <ViajaConNostros proporcional={proporcional}/>
            <NuevoBlog proporcional={proporcional}/>
        </div>
    )
}
