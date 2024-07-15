import React from 'react'

import equipo_00 from '../../assets/image/home/equipo_00.png'
import equipo_01 from '../../assets/image/home/equipo_01.png'
import equipo_02 from '../../assets/image/home/equipo_02.png'
import equipo_03 from '../../assets/image/home/equipo_03.png'
import equipo_04 from '../../assets/image/home/equipo_04.png'
import equipo_05 from '../../assets/image/home/equipo_05.png'
import equipo_06 from '../../assets/image/home/equipo_06.png'
import equipo_07 from '../../assets/image/home/equipo_07.png'
import equipo_08 from '../../assets/image/home/equipo_08.png'

import { useNavigate } from 'react-router-dom'

export default function NestroEquipoTablet({proporcional}) {

    const navigate = useNavigate()

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, background: 'rgb(249, 249, 249)'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <div style={{width: 'auto', height: 'auto'}}>
                            <h6 style={{fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins',
                                textAlign: 'center'}}>
                                Nuestro equipo
                            </h6>
                            <h2 style={{fontSize: 50 / proporcional, fontWeight: 600, lineHeight: `${68 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                textAlign: 'center'}}>
                                Tenemos un gran <br/>equipo
                            </h2>
                            <p style={{fontSize: 19 / proporcional, fontWeight: 400, lineHeight: `${28 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                textAlign: 'center'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut dolore.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 67 / proporcional}}>
                        <div className='' style={{width: '32%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 172 / proporcional, marginBottom: 24 / proporcional}}>
                                <img src={equipo_00} style={{width: 172 / proporcional, height: 172 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 172 / proporcional, height: 'auto'}}>
                                    <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                        textAlign: 'center '}}>
                                        Isabel Johnson
                                    </h4>
                                    <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                            marginBottom: 0, textAlign: 'center'}}>
                                            Guía turística
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='' style={{width: '32%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 172 / proporcional, marginBottom: 24 / proporcional}}>
                                <img src={equipo_01} style={{width: 172 / proporcional, height: 172 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 172 / proporcional, height: 'auto'}}>
                                    <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                        textAlign: 'center '}}>
                                        Andre haynes
                                    </h4>
                                    <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                            marginBottom: 0, textAlign: 'center'}}>
                                            Guía turística
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='' style={{width: '32%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 172 / proporcional, marginBottom: 24 / proporcional}}>
                                <img src={equipo_02} style={{width: 172 / proporcional, height: 172 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 172 / proporcional, height: 'auto'}}>
                                    <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                        textAlign: 'center '}}>
                                        Bruno White
                                    </h4>
                                    <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                            marginBottom: 0, textAlign: 'center'}}>
                                            Guía turística
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 67 / proporcional}}>
                        <div className='' style={{width: '32%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 172 / proporcional, marginBottom: 24 / proporcional}}>
                                <img src={equipo_03} style={{width: 172 / proporcional, height: 172 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 172 / proporcional, height: 'auto'}}>
                                    <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                        textAlign: 'center '}}>
                                        Bronx Moos
                                    </h4>
                                    <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                            marginBottom: 0, textAlign: 'center'}}>
                                            Guía turística
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='' style={{width: '32%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 172 / proporcional, marginBottom: 24 / proporcional}}>
                                <img src={equipo_04} style={{width: 172 / proporcional, height: 172 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 172 / proporcional, height: 'auto'}}>
                                    <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                        textAlign: 'center '}}>
                                        Lea Smith
                                    </h4>
                                    <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                            marginBottom: 0, textAlign: 'center'}}>
                                            Guía turística
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='' style={{width: '32%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 172 / proporcional, marginBottom: 24 / proporcional}}>
                                <img src={equipo_05} style={{width: 172 / proporcional, height: 172 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 172 / proporcional, height: 'auto'}}>
                                    <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                        textAlign: 'center '}}>
                                        Otto Salmi
                                    </h4>
                                    <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                            marginBottom: 0, textAlign: 'center'}}>
                                            Guía turística
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 67 / proporcional}}>
                        <div className='' style={{width: '32%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 172 / proporcional, marginBottom: 24 / proporcional}}>
                                <img src={equipo_06} style={{width: 172 / proporcional, height: 172 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 172 / proporcional, height: 'auto'}}>
                                    <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                        textAlign: 'center '}}>
                                        Ines Iqbal
                                    </h4>
                                    <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                            marginBottom: 0, textAlign: 'center'}}>
                                            Guía turística
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='' style={{width: '32%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 172 / proporcional, marginBottom: 24 / proporcional}}>
                                <img src={equipo_07} style={{width: 172 / proporcional, height: 172 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 172 / proporcional, height: 'auto'}}>
                                    <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                        textAlign: 'center '}}>
                                        Archie Gough
                                    </h4>
                                    <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                            marginBottom: 0, textAlign: 'center'}}>
                                            Guía turística
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='' style={{width: '32%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 172 / proporcional, marginBottom: 24 / proporcional}}>
                                <img src={equipo_08} style={{width: 172 / proporcional, height: 172 / proporcional}}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 172 / proporcional, height: 'auto'}}>
                                    <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                        textAlign: 'center '}}>
                                        Rocco Oblack
                                    </h4>
                                    <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                            marginBottom: 0, textAlign: 'center'}}>
                                            Guía turística
                                        </p>
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
