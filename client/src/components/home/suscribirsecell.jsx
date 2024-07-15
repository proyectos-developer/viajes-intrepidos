import React, { useState } from 'react'

export default function SuscribirseCell({proporcional}) {

    const [boton_suscribirse, setBotonSuscribirse] = useState(false)

    return (
        <div style={{width: '100%', height: 172 / proporcional, background: 'rgba(0, 123, 251, 0.6)', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div style={{width: '100%', height: 172 / proporcional, paddingTop: 51 / proporcional, paddingBottom: 51 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auo'}}>
                    <h3 style={{fontSize: 30 / proporcional, color: 'white', fontWeight: 600, lineHeight: `${36 / proporcional}px`, fontFamily: 'Poppins'}}>
                        Suscríbete ahora y sacia tu pasión <br/>por los viajes
                    </h3>
                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                        <div className='rounded' 
                            style={{width: 250 / proporcional, height: 72 / proporcional, background: boton_suscribirse ? 'rgba(255, 255, 255, 0.8)' : 'rgb(255, 255, 255)', cursor: 'pointer'}}
                            onMouseOver={() => setBotonSuscribirse(true)} onMouseLeave={() => setBotonSuscribirse(false)}>
                            <p style={{fontSize: 12 / proporcional, lineHeight: `${72 / proporcional}px`, fontWeight: 600, color: 'black', marginBottom: 0, textAlign: 'center',
                                fontFamily: 'Poppins, sans-serif'}}>
                                Suscribirse
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
