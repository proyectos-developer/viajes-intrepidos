import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FooterTablet({proporcional}) {

    const navigate = useNavigate()

    return (
        <div style={{width: '100%', height: 'auto', background: '#007bff', paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional}}>
            <div className='d-flex justify-conten-between' style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional,
                paddingBottom: 60 / proporcional, marginTop: 120 / proporcional}}>
                <div style={{width: '48%', height: 'auto'}}>
                    <h1 style={{fontSize: 40 / proporcional, lineHeight: `${40 / proporcional}px`, fontFamily: 'Bebas Neue, sans-serif', fontWeight: 400, color: 'white',
                                marginBottom: 0, cursor: 'pointer'}} onClick={() => navigate ('/')}>
                        VIAJES INTRÉPIDOS
                    </h1>
                </div>

                <div style={{width: '48%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <h5 style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 25 / proporcional, fontWeight: 600, color: 'white', 
                            fontFamily: 'Poppins'}}>
                            Únete a nosotros
                        </h5>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/destinos')}>
                                Destinos
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/seguridad')}>
                                Seguridad
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/acerca-de')}>
                                Acerca de nosotros
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/blog')}>
                                Nuestro blog
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/contacto')}>
                                Contácto
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                
            <div className='d-flex justify-conten-between' style={{width: '100%', height: 'auto', borderBottom: '1px solid rgba(255, 255, 255, 0.6)', paddingTop: 50 / proporcional,
                paddingBottom: 60 / proporcional}}>
                <div style={{width: '48%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <h5 style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 25 / proporcional, fontWeight: 600, color: 'white', 
                            fontFamily: 'Poppins'}}>
                            Links útiles
                        </h5>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/equipo')}>
                                Nuestro equipo
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/tours')}>
                                Tours
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/noticias')}>
                                Noticias
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/como')}>
                                ¿Cómo?
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/boletin')}>
                                Boletín informativo
                            </p>
                        </div>
                    </div>
                </div>
                
                
                <div style={{width: '48%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <h5 style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 25 / proporcional, fontWeight: 600, color: 'white', 
                            fontFamily: 'Poppins'}}>
                            Social
                        </h5>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/equipo')}>
                                Dribble
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/tours')}>
                                Instagram
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, fontFamily: 'Poppins', fontWeight: 400, color: 'white', 
                                marginBottom: 7 / proporcional, cursor: 'pointer'}}
                                onClick={() => navigate ('/noticias')}>
                                Twitter
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 70 / proporcional, paddingTop: 22 / proporcional, paddingBottom: 22 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 26 / proporcional}}>
                    <div className='d-flex justify-content-start' style={{width: '50%', height: 26 / proporcional}}>
                        <p style={{fontSize: 12 / proporcional, fontWeight: 400, lineHeight: `${26 / proporcional}px`, marginBottom: 0, textDecoration: 'underline',
                            color: 'white', marginBottom: 0, fontFamily: 'Poppins', cursor: 'pointer'}} onClick={() => navigate ('terminos-condiciones')}>
                            Términos y condiciones
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '50%', height: 26 / proporcional}}>
                        <p style={{fontSize: 12 / proporcional, fontWeight: 400, lineHeight: `${26 / proporcional}px`, marginBottom: 0, textDecoration: 'none',
                            color: 'white', marginBottom: 0, fontFamily: 'Poppins'}}>
                            @ 2024 Developer Ideas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
