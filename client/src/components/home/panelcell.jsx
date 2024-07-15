import React from 'react'

import BannerPrincipalCell from './bannerprincipalcell.jsx'
import DestinosPopularesCell from './destinospopularescell.jsx'
import CarouselFrasesCell from './carouselfrasescell.jsx'
import AdrenalineCell from './adrenalinecell.jsx'
import LugaresDescansoCell from './lugaresdescansocell.jsx'
import ViajaConNostrosCell from './viajaconnosotroscell.jsx'
import NuevoBlogCell from './nuevoblogcell.jsx'

export default function HomePanelCell({proporcional}) {
        
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <BannerPrincipalCell proporcional={proporcional}/>
            <DestinosPopularesCell proporcional={proporcional}/>
            <CarouselFrasesCell proporcional={proporcional}/>
            <AdrenalineCell proporcional={proporcional}/>
            <LugaresDescansoCell proporcional={proporcional}/>
            <ViajaConNostrosCell proporcional={proporcional}/>
            <NuevoBlogCell proporcional={proporcional}/>
        </div>
    )
}
