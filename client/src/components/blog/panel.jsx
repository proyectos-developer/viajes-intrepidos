import React from 'react'

import TituloPagina from './titulopagina.jsx'
import Blog from './blog.jsx'

export default function NuestroBlogPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'aut0'}}>
            <TituloPagina proporcional={proporcional}/>
            <Blog proporcional={proporcional}/>
        </div>
    )
}
