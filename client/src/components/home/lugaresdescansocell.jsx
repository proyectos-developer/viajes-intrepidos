import React from 'react'

import ReactPlayer from 'react-player'

import video_00 from '../../assets/videos/home/tour_00.mp4'
import video_01 from '../../assets/videos/home/tour_01.mp4'

import dot from '../../assets/iconos/home/dot_black.png'

export default function LugaresDescansoCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 33 / proporcional}}>
                        <h6 style={{fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins',
                            textAlign: 'left'}}>
                            Destinos
                        </h6>
                        <h2 style={{fontSize: 50 / proporcional, fontWeight: 600, lineHeight: `${68 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                            textAlign: 'left', marginBottom: 8 / proporcional}}>
                            Lugares <span style={{color: '#007bff'}}>impresionantes</span>
                        </h2>
                        <p style={{fontSize: 19 / proporcional, fontWeight: 400, lineHeight: `${28 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                            textAlign: 'left'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut dolore.
                        </p>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <h5 style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: 'Poppins', color: 'rgb(31, 31, 31)',
                            textAlign: 'left'}}>
                            Nuestros tours
                        </h5>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                            <img src={dot} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 8 / proporcional, marginRight: 16 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(100, 100, 100)', fontFamily: 'Poppins',
                                textAlign: 'left', marginBottom: 0}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                            <img src={dot} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 8 / proporcional, marginRight: 16 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(100, 100, 100)', fontFamily: 'Poppins',
                                textAlign: 'left', marginBottom: 0}}>
                                Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                            <img src={dot} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 8 / proporcional, marginRight: 16 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(100, 100, 100)', fontFamily: 'Poppins',
                                textAlign: 'left', marginBottom: 0}}>
                                Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                            <img src={dot} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 8 / proporcional, marginRight: 16 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(100, 100, 100)', fontFamily: 'Poppins',
                                textAlign: 'left', marginBottom: 0}}>
                                Et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                            <img src={dot} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 8 / proporcional, marginRight: 16 / proporcional}}/>
                            <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: 'rgb(100, 100, 100)', fontFamily: 'Poppins',
                                textAlign: 'left', marginBottom: 0}}>
                                Omni et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div style={{width: '90%', height: 230 / proporcional}}>
                        <ReactPlayer
                            className=''
                            url= {video_00}
                            width='100%'
                            height={230 / proporcional}
                            style={{background: '#efefef'}}
                            playing={true}
                            loop={true}/>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '90%', height: 230 / proporcional}}>
                        <ReactPlayer
                            className=''
                            url= {video_01}
                            width='100%'
                            height={230 / proporcional}
                            style={{background: '#efefef'}}
                            playing={true}
                            loop={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
