import React from 'react'

import TituloPagina from './titulopagina.jsx'
import Formulario from './formulario.jsx'
import Contacto from './contacto.jsx'

export default function ContactanosPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'aut0'}}>
            <TituloPagina proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto', paddingTop: 150 / proporcional, paddingBottom: 150 / proporcional, background: 'rgb(249, 249, 249'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional}}>
                    <div style={{width: '58%', height: '100%'}}>
                        <Formulario proporcional={proporcional}/>
                    </div>
                    <div style={{width: '38%', height: '100%'}}>
                        <Contacto proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
