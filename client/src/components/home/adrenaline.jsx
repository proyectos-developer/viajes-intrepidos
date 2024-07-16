import React from 'react'

import adrenalina_00 from '../../assets/image/home/image_adrenalina_00.png'
import adrenalina_01 from '../../assets/image/home/image_adrenalina_01.png'
import adrenalina_03 from '../../assets/image/home/image_adrenalina_02.png'
import adrenalina_02 from '../../assets/image/home/image_adrenalina_03.png'

export default function Adrenaline({proporcional, background}) {

    console.log (background)

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 127 / proporcional, paddingBottom: 123 / proporcional, background: background === undefined ? 'rgb(249, 249, 249)' : 'white'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional}}>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <div style={{width: 'auto', height: 'auto'}}>
                            <h6 style={{fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins',
                                textAlign: 'center'}}>
                                Actividades y más
                            </h6>
                            <h2 style={{fontSize: 50 / proporcional, fontWeight: 600, lineHeight: `${68 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                textAlign: 'center'}}>
                                Elige tu <span style={{color: '#007bff'}}>adrenalina</span>
                            </h2>
                            <p style={{fontSize: 19 / proporcional, fontWeight: 400, lineHeight: `${28 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                textAlign: 'center'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut dolore.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '20%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', padding: '10%'}}>
                                <img src={adrenalina_00} style={{width: '80%', height: 'auto'}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                    textAlign: 'center'}}>
                                    Viaja con nosotros
                                </h4>
                                <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                        marginBottom: 0, textAlign: 'center'}}>
                                        Lorem Ipsum proin gravida nibh velter auctor aenean velitsollicitudin
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{width: '20%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', padding: '10%'}}>
                                <img src={adrenalina_01} style={{width: '80%', height: 'auto'}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                    textAlign: 'center'}}>
                                    O intenta volar
                                </h4>
                                <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                        marginBottom: 0, textAlign: 'center'}}>
                                        Lorem Ipsum proin gravida nibh velter auctor aenean velitsollicitudin
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{width: '20%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', padding: '10%'}}>
                                <img src={adrenalina_02} style={{width: '80%', height: 'auto'}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                    textAlign: 'center'}}>
                                    Canotaje en ríos
                                </h4>
                                <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                        marginBottom: 0, textAlign: 'center'}}>
                                        Lorem Ipsum proin gravida nibh velter auctor aenean velitsollicitudin
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{width: '20%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', padding: '10%'}}>
                                <img src={adrenalina_03} style={{width: '80%', height: 'auto'}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <h4 style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                                    textAlign: 'center'}}>
                                    Escalada de roca
                                </h4>
                                <div style={{width: '100%', height: 'auto', marginTop: 18 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                                        marginBottom: 0, textAlign: 'center'}}>
                                        Lorem Ipsum proin gravida nibh velter auctor aenean velitsollicitudin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}
