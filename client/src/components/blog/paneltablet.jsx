import React from 'react'

import TituloPaginaTablet from './titulopaginatablet.jsx'
import BlogTablet from './blogtablet.jsx'

export default function NuestroBlogPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'aut0'}}>
            <TituloPaginaTablet proporcional={proporcional}/>
            <BlogTablet proporcional={proporcional}/>
        </div>
    )
}
