import React from 'react'

import image from '../../assets/image/acercade/nosotros.png'

import equipo from '../../assets/image/home/equipo_01.png'

export default function Nosotros({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 150 / proporcional, paddingBottom: 150 / proporcional, background: 'rgb(249, 249, 249)'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div className='position-relative' style={{width: '48%', height: 580 / proporcional}}>
                        <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto', marginBottom: 33 / proporcional}}>
                                <h6 style={{fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins',
                                    textAlign: 'left'}}>
                                    Acerca de nosotros
                                </h6>
                                <h2 style={{fontSize: 50 / proporcional, fontWeight: 600, lineHeight: `${68 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                    textAlign: 'left', marginBottom: 8 / proporcional}}>
                                    Desde el <span style={{color: '#007bff'}}>principo</span>
                                </h2>
                                <p style={{fontSize: 19 / proporcional, fontWeight: 400, lineHeight: `${28 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                    textAlign: 'left'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut dolore.
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                    textAlign: 'left'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <div className='rounded-circle' style={{width: 69 / proporcional, height: 69 / proporcional, marginRight: 24 / proporcional}}>
                                    <img className='rounded-circle' src={equipo} style={{width: 69 / proporcional, height: 69 / proporcional}}/>
                                </div>
                                <div style={{width: 'auto', height: 69 / proporcional}}>
                                    <h5 style={{fontSize: 18 / proporcional, fontWeight: 600, color: 'rgb(31, 31, 31)', lineHeight: `${34.5 / proporcional}px`, marginBottom: 0, 
                                        fontFamily: 'Poppins'}}>
                                        Michael Jonson
                                    </h5>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 400, color: 'rgb(70, 70, 70)', lineHeight: `${34.5 / proporcional}px`, marginBottom: 0, 
                                        fontFamily: 'Poppins'}}>
                                        CEO
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '48%', height: 580 / proporcional}}>
                        <div style={{width: '100%', height: 500 / proporcional, marginBottom: 20 / proporcional}}>
                            <img src={image} style={{width: '100%', height: 580 / proporcional}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
