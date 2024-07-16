import React from 'react'

import TituloPaginaTablet from './titulopaginatablet.jsx'
import FormularioTablet from './formulariotablet.jsx'
import ContactoTablet from './contactotablet.jsx'

export default function ContactanosPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'aut0'}}>
            <TituloPaginaTablet proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, background: 'rgb(249, 249, 249'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                    <div style={{width: '63%', height: '100%'}}>
                        <FormularioTablet proporcional={proporcional}/>
                    </div>
                    <div style={{width: '33%', height: '100%'}}>
                        <ContactoTablet proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
