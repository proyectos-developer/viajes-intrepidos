import React from 'react'

import TituloPaginaCell from './titulopaginacell.jsx'
import FormularioCell from './formulariocell.jsx'
import ContactoCell from './contactocell.jsx'

export default function ContactanosPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'aut0'}}>
            <TituloPaginaCell proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, background: 'rgb(249, 249, 249'}}>
                <div style={{width: '100%', height: '100%'}}>
                    <FormularioCell proporcional={proporcional}/>
                </div>
                <div style={{width: '100%', height: '100%'}}>
                    <ContactoCell proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}
