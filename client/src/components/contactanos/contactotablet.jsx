import React from 'react'

import facebook from '../../assets/iconos/contacto/facebook_black.png'
import instagram from '../../assets/iconos/contacto/instagram_black.png'
import twitter from '../../assets/iconos/contacto/twitter_black.png'
import tiktok from '../../assets/iconos/contacto/tiktok_black.png'

export default function ContactoTablet({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: '100%', paddingTop: 91 / proporcional}}>

                <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <h5 style={{fontSize: 18 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                        textAlign: 'left', marginBottom: 28 / proporcional}}>
                        Contacto Uno
                    </h5>
                    <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: 'rgb(30, 30, 30)', 
                            fontFamily: 'Poppins', marginBottom: 8 / proporcional}}>
                            Lima, Miraflores
                        </p>
                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: 'rgb(30, 30, 30)', 
                            fontFamily: 'Poppins', marginBottom: 8 / proporcional}}>
                            Lun - Sab 08:00 - 16:00
                        </p>
                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: 'rgb(30, 30, 30)', 
                            fontFamily: 'Poppins', marginBottom: 8 / proporcional}}>
                            correo@dominio.com
                        </p>
                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: 'rgb(30, 30, 30)', 
                            fontFamily: 'Poppins', marginBottom: 8 / proporcional}}>
                            +51 999 - XXXXXX
                        </p>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <h5 style={{fontSize: 14 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                            textAlign: 'left', marginBottom: 0 / proporcional}}>
                            Síguenos en:
                        </h5>
                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 24 / proporcional}}>
                            <img src={facebook} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                            <img src={instagram} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                            <img src={tiktok} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                            <img src={twitter} style={{width: 24 / proporcional, height: 24 / proporcional, padding: 3 / proporcional}}/>
                        </div>
                    </div>
                </div>

                <div style={{width: '100%', height: 'auto'}}>
                    <h5 style={{fontSize: 18 / proporcional, fontWeight: 600, lineHeight: `${24 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                        textAlign: 'left', marginBottom: 28 / proporcional}}>
                        Contacto Dos
                    </h5>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: 'rgb(30, 30, 30)', 
                            fontFamily: 'Poppins', marginBottom: 8 / proporcional}}>
                            Lima, Miraflores
                        </p>
                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: 'rgb(30, 30, 30)', 
                            fontFamily: 'Poppins', marginBottom: 8 / proporcional}}>
                            Lun - Sab 08:00 - 16:00
                        </p>
                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: 'rgb(30, 30, 30)', 
                            fontFamily: 'Poppins', marginBottom: 8 / proporcional}}>
                            correo@dominio.com
                        </p>
                        <p style={{fontSize: 18 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: 'rgb(30, 30, 30)', 
                            fontFamily: 'Poppins', marginBottom: 8 / proporcional}}>
                            +51 999 - XXXXXX
                        </p>
                    </div>
                </div>

        </div>
    )
}
