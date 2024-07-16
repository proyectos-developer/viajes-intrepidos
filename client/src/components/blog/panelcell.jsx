import React from 'react'

import TituloPaginaCell from './titulopaginacell.jsx'
import BlogCell from './blogcell.jsx'

export default function NuestroBlogPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'aut0'}}>
            <TituloPaginaCell proporcional={proporcional}/>
            <BlogCell proporcional={proporcional}/>
        </div>
    )
}
