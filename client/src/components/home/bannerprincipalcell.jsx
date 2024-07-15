import React, { useState } from 'react'

import image from '../../assets/image/home/home_main_cell.png'

export default function BannerPrincipalCell({proporcional}) {

    const [nombres, setNombres] = useState('')
    const [email, setEmail] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    
    const [boton_contactar, setBotonContactar] = useState(false)

    return (
        <div style={{width: '100%', height: 950 / proporcional, backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div style={{width: '100%', height: 950 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div className='position-relative' style={{width: '100%', height: 950 / proporcional}}>
                    <div className='position-absolute start-50 translate-middle' style={{width: '100%', height: 'auto', marginTop: 85 / proporcional, top: '45%'}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div style={{width: 459 / proporcional, height: 'auto'}}>
                                <h6 style={{fontSize: 12 / proporcional, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins', fontWeight: 600, lineHeight: `${16 / proporcional}px`}}>
                                    Agencia de viajes
                                </h6>
                                <h1 style={{fontSize: 65 / proporcional, color: 'rgb(31, 31, 31)', fontWeight: 600, lineHeight: `${70 / proporcional}px`, fontFamily: 'Poppins'}}>
                                    Planea <span style={{color: '#007bff'}}>un viaje familiar</span>
                                </h1>
                                <p style={{marginTop: 18 / proporcional, color: 'rgb(70, 70, 70)', fontWeight: 400, fontSize: 19 / proporcional, lineHeight: `${28 / proporcional}px`,
                                    fontFamily: 'Poppins', marginBottom: 0}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                                </p>
                                <div style={{width: 'auto', height: 28 / proporcional, marginTop: 16 / proporcional}}>
                                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${28 / proporcional}px`, color: 'rgb(30, 30, 30)', fontFamily: 'Poppins, sans-serif',
                                        marginBottom: 0, textDecoration: 'underline'}}>
                                        <span>¿Listo?</span>
                                    </p>
                                </div>
                            </div>
                            <div className='rounded' style={{width: '100%', height: 'auto', marginTop: 200 / proporcional, background: '#f9f9f9',
                                    padding: 26 / proporcional, paddingBottom: 15 / proporcional}}>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <div style={{width: '100%', height: 56 / proporcional, marginBottom: 10 / proporcional}}>
                                        <input 
                                            id='nombres'
                                            type='default'
                                            className='form-control border-0'
                                            value={nombres}
                                            onChange={(event) => setNombres(event.target.value)}
                                            style={{width: '100%', height: 56 / proporcional, background: 'white', fontSize: 16 / proporcional, color: 'rgb(70, 70, 70)',
                                                    fontWeight: 400, lineHeight: `${56 / proporcional}px`, fontFamily: 'Poppins'}}
                                            placeholder='Nombres'/>
                                    </div>
                                    <div style={{width: '100%', height: 56 / proporcional, marginBottom: 10 / proporcional}}>
                                        <input 
                                            id='email'
                                            type='e-mail'
                                            className='form-control border-0'
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            style={{width: '100%', height: 56 / proporcional, background: 'white', fontSize: 16 / proporcional, color: 'rgb(70, 70, 70)',
                                                    fontWeight: 400, lineHeight: `${56 / proporcional}px`, fontFamily: 'Poppins'}}
                                            placeholder='E-mail'/>
                                    </div>
                                    <div style={{width: '100%', height: 56 / proporcional, marginBottom: 10 / proporcional}}>
                                        <input 
                                            id='nro_telefono'
                                            type='number'
                                            className='form-control border-0'
                                            value={nro_telefono}
                                            onChange={(event) => setNroTelefono(event.target.value)}
                                            style={{width: '100%', height: 56 / proporcional, background: 'white', fontSize: 16 / proporcional, color: 'rgb(70, 70, 70)',
                                                    fontWeight: 400, lineHeight: `${56 / proporcional}px`, fontFamily: 'Poppins'}}
                                            placeholder='Teléfono'/>
                                    </div>
                                    <div style={{width: '100%', height: 56 / proporcional, marginBottom: 10 / proporcional}}>
                                        <div className='rounded' style={{width: '100%', height: 56 / proporcional, background: boton_contactar ? 'rgb(0, 123, 255)' : 'rgba(0, 123, 255, 0.8)',
                                                cursor: 'pointer'}}
                                            onMouseOver={() => setBotonContactar(true)} onMouseLeave={() => setBotonContactar(false)}>
                                            <p style={{fontSize: 12 / proporcional, lineHeight: `${56 / proporcional}px`, marginBottom: 0, fontWeight: 600, fontFamily: 'Poppins, sans-serif',
                                                color: 'white', textAlign: 'center'}}>Contactar</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
