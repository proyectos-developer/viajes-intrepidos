import React from 'react'

import BannerPrincipalTablet from './bannerprincipaltablet.jsx'
import DestinosPopularesTablet from './destinospopularestablet.jsx'
import CarouselFrasesTablet from './carouselfrasestablet.jsx'
import AdrenalineTablet from './adrenalinetablet.jsx'
import LugaresDescansoTablet from './lugaresdescansotablet.jsx'
import ViajaConNostrosTablet from './viajaconnosotrostablet.jsx'
import NuevoBlogTablet from './nuevoblogtablet.jsx'

export default function HomePanelTablet({proporcional}) {
        
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <BannerPrincipalTablet proporcional={proporcional}/>
            <DestinosPopularesTablet proporcional={proporcional}/>
            <CarouselFrasesTablet proporcional={proporcional}/>
            <AdrenalineTablet proporcional={proporcional}/>
            <LugaresDescansoTablet proporcional={proporcional}/>
            <ViajaConNostrosTablet proporcional={proporcional}/>
            <NuevoBlogTablet proporcional={proporcional}/>
        </div>
    )
}
