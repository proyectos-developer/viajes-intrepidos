import React from 'react'

import blog_00 from '../../assets/image/home/blog_00.png'
import blog_01 from '../../assets/image/home/blog_01.png'
import blog_02 from '../../assets/image/home/blog_03.png'

import { useNavigate } from 'react-router-dom'

export default function NueoBlog({proporcional}) {

    const navigate = useNavigate()

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 127 / proporcional, paddingBottom: 123 / proporcional, background: 'rgb(249, 249, 249)'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional}}>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <div style={{width: 'auto', height: 'auto'}}>
                            <h6 style={{fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins',
                                textAlign: 'center'}}>
                                Nuestro blog y noticias
                            </h6>
                            <h2 style={{fontSize: 50 / proporcional, fontWeight: 600, lineHeight: `${68 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                textAlign: 'center'}}>
                                De nuestro nuevo <span style={{color: '#007bff'}}>blog</span>
                            </h2>
                            <p style={{fontSize: 19 / proporcional, fontWeight: 400, lineHeight: `${28 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                textAlign: 'center'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut dolore.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '31%', height: 'auto'}}>
                            <img src={blog_00} style={{width: '100%', height: 500 / proporcional}}/>
                            <div style={{width: '100%', height: 'auto'}}>
                                <h6 style={{fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins',
                                    textAlign: 'left '}}>
                                    Nomviembre 3, 2023 / Viaje
                                </h6>
                                <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                    textAlign: 'left '}}>
                                    Mejores lugares para helados
                                </h4>
                                <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                        marginBottom: 0}}>
                                        Tepteur sint occaecat cupidatat. non proident, sunt in culpa qui officia deserun
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{width: '31%', height: 'auto'}}>
                            <img src={blog_01} style={{width: '100%', height: 500 / proporcional}}/>
                            <div style={{width: '100%', height: 'auto'}}>
                                <h6 style={{fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins',
                                    textAlign: 'left '}}>
                                    Nomviembre 4, 2023 / Viajes
                                </h6>
                                <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                    textAlign: 'left '}}>
                                    Tips de como empacar
                                </h4>
                                <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                        marginBottom: 0}}>
                                        Tepteur sint occaecat cupidatat. non proident, sunt in culpa qui officia deserun
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{width: '31%', height: 'auto'}}>
                            <img src={blog_02} style={{width: '100%', height: '100%'}}/>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}
