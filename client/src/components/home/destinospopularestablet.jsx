import React from 'react'

import destino_00 from '../../assets/image/home/image_destino_00.png'
import destino_01 from '../../assets/image/home/image_destino_01.png'
import destino_02 from '../../assets/image/home/image_destino_02.png'

import { useNavigate } from 'react-router-dom'

export default function CarouselFrasesTablet({proporcional}) {

    const navigate = useNavigate()

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, background: 'rgb(249, 249, 249)'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <div style={{width: 'auto', height: 'auto'}}>
                            <h6 style={{fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins',
                                textAlign: 'center'}}>
                                Destinos
                            </h6>
                            <h2 style={{fontSize: 50 / proporcional, fontWeight: 600, lineHeight: `${68 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                textAlign: 'center'}}>
                                Nuestros destinos <br/>más populares
                            </h2>
                            <p style={{fontSize: 19 / proporcional, fontWeight: 400, lineHeight: `${28 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                textAlign: 'center'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut dolore.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '48%', height: 'auto', marginBottom: 32 / proporcional}}>
                            <img src={destino_00} style={{width: '100%', height: 'auto'}}/>
                            <div style={{width: '100%', height: 'auto'}}>
                                <h6 style={{fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins',
                                    textAlign: 'left '}}>
                                    Destinos
                                </h6>
                                <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                    textAlign: 'left '}}>
                                    Machu Picchu
                                </h4>
                                <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                        marginBottom: 0}}>
                                        Lorem Ipsum proin gravida nibh velter auctor aenean velitsollicitudin
                                    </p>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginTop: 16 / proporcional}}>
                                    <span style={{fontSize: 14 / proporcional, fontWeight: 600, lineHeight: `${28 / proporcional}px`, fontFamily: 'Poppins, sans-serif', marginBottom: 0,
                                        color: 'rgb(30, 30, 30)', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => navigate (`/destinos/machu-picchu`)}>
                                        Leer más
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{width: '48%', height: 'auto'}}>
                            <img src={destino_01} style={{width: '100%', height: 'auto'}}/>
                            <div style={{width: '100%', height: 'auto'}}>
                                <h6 style={{fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins',
                                    textAlign: 'left '}}>
                                    Destinos
                                </h6>
                                <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                    textAlign: 'left '}}>
                                    Valle del colca
                                </h4>
                                <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                        marginBottom: 0}}>
                                        Lorem Ipsum proin gravida nibh velter auctor aenean velitsollicitudin
                                    </p>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginTop: 16 / proporcional}}>
                                    <span style={{fontSize: 14 / proporcional, fontWeight: 600, lineHeight: `${28 / proporcional}px`, fontFamily: 'Poppins, sans-serif', marginBottom: 0,
                                        color: 'rgb(30, 30, 30)', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => navigate (`/destinos/valle-colca`)}>
                                        Leer más
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '48%', height: 'auto'}}>
                            <img src={destino_02} style={{width: '100%', height: 'auto'}}/>
                            <div style={{width: '100%', height: 'auto'}}>
                                <h6 style={{fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins',
                                    textAlign: 'left '}}>
                                    Destinos
                                </h6>
                                <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                    textAlign: 'left'}}>
                                    El husacarán
                                </h4>
                                <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                        marginBottom: 0}}>
                                        Lorem Ipsum proin gravida nibh velter auctor aenean velitsollicitudin
                                    </p>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginTop: 16 / proporcional}}>
                                    <span style={{fontSize: 14 / proporcional, fontWeight: 600, lineHeight: `${28 / proporcional}px`, fontFamily: 'Poppins, sans-serif', marginBottom: 0,
                                        color: 'rgb(30, 30, 30)', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => navigate (`/destinos/el-huascaran`)}>
                                        Leer más
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}
