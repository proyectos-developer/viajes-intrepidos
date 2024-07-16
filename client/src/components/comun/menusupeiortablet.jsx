import React, { useEffect, useState } from 'react'

import facebook from '../../assets/iconos/menusuperior/facebook_blue.png'
import instagram from '../../assets/iconos/menusuperior/instagram_blue.png'
import twitter from '../../assets/iconos/menusuperior/twitter_blue.png'
import tiktok from '../../assets/iconos/menusuperior/tiktok_blue.png'
import { useLocation, useNavigate } from 'react-router-dom'

export default function MenuSuperiorTablet({proporcional}) {

    const location = useLocation()
    const navigate = useNavigate()

    const [menu_pagina, setMenuPagina] = useState ('inicio')
    const [mouse_menu, setMouseMenu] = useState('')

    useEffect(() => {
        setMenuPagina(location.pathname.split ('/')[1] === '' ? 'inicio' : location.pathname.split ('/')[1])
    }, [location.pathname])

    return (
        <div className='shadow' style={{width: '100%', height: 'auto', paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, background: 'transparent'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 60 / proporcional}}>
                <div style={{width: '50%', height: 60 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                    <div style={{width: '100%', height: 40 / proporcional}}>
                        <h1 style={{fontSize: 40 / proporcional, lineHeight: `${40 / proporcional}px`, fontFamily: 'Bebas Neue, sans-serif', fontWeight: 400, color: '#007bff',
                                    marginBottom: 0, cursor: 'pointer'}} onClick={() => navigate ('/')}>
                            VIAJES INTRÉPIDOS
                        </h1>
                    </div>
                </div>
                <div className='d-flex justify-content-end' 
                    style={{width: '50%', height: 60 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                    <a href='https://facebook.com' style={{width: 'auto', height: 'auto'}} target='_blank'>
                        <img src={facebook} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                    </a>
                    <a href='https://instagram.com' style={{width: 'auto', height: 'auto'}} target='_blank'>
                        <img src={instagram} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                    </a>
                    <a href='https://twitter.com' style={{width: 'auto', height: 'auto'}} target='_blank'>
                        <img src={twitter} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                    </a>
                    <a href='https://tiktok.com' style={{width: 'auto', height: 'auto'}} target='_blank'>
                        <img src={tiktok} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                    </a>
                </div>
            </div>
            <div className='' 
                style={{width: '100%', height: 60 / proporcional}}>
                <ul className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                    <li style={{width: 'auto', height: 60 / proporcional, marginRight: 21 / proporcional, listStyle: 'none', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                            paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, cursor: 'pointer', 
                            textDecoration: menu_pagina === 'inicio' || mouse_menu === 'inicio' ? 'underline' : 'none'}}
                            onMouseOver={() => setMouseMenu('inicio')} onMouseLeave={() => setMouseMenu()} onClick={() => navigate ('/')}>
                        <span style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(31, 31, 31)', fontWeight: 400, fontFamily: 'Poppins'}}>
                            Inicio
                        </span>
                    </li>
                    <li style={{width: 'auto', height: 60 / proporcional, marginRight: 21 / proporcional, listStyle: 'none', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                            paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, cursor: 'pointer', 
                            textDecoration: menu_pagina === 'destinos' || mouse_menu === 'destinos' ? 'underline' : 'none'}}
                            onMouseOver={() => setMouseMenu('destinos')} onMouseLeave={() => setMouseMenu()} onClick={() => navigate ('/destinos')}>
                        <span style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(31, 31, 31)', fontWeight: 400, fontFamily: 'Poppins'}}>
                            Destinos
                        </span>
                    </li>
                    <li style={{width: 'auto', height: 60 / proporcional, marginRight: 21 / proporcional, listStyle: 'none', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                            paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, cursor: 'pointer', 
                            textDecoration: menu_pagina === 'acerca-de' || mouse_menu === 'acerca-de' ? 'underline' : 'none'}}
                            onMouseOver={() => setMouseMenu('acerca-de')} onMouseLeave={() => setMouseMenu()} onClick={() => navigate ('/acerca-de')}>
                        <span style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(31, 31, 31)', fontWeight: 400, fontFamily: 'Poppins'}}>
                            Acerca de
                        </span>
                    </li>
                    <li style={{width: 'auto', height: 60 / proporcional, marginRight: 21 / proporcional, listStyle: 'none', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                            paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, cursor: 'pointer', 
                            textDecoration: menu_pagina === 'nuestro-blog' || mouse_menu === 'blog' ? 'underline' : 'none'}}
                            onMouseOver={() => setMouseMenu('blog')} onMouseLeave={() => setMouseMenu()} onClick={() => navigate ('/nuestro-blog')}>
                        <span style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(31, 31, 31)', fontWeight: 400, fontFamily: 'Poppins'}}>
                            Blog
                        </span>
                    </li>
                    <li style={{width: 'auto', height: 60 / proporcional, marginRight: 21 / proporcional, listStyle: 'none', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                            paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, cursor: 'pointer', 
                            textDecoration: menu_pagina === 'contacto' || mouse_menu === 'contacto' ? 'underline' : 'none'}}
                            onMouseOver={() => setMouseMenu('contacto')} onMouseLeave={() => setMouseMenu()} onClick={() => navigate ('/contacto')}>
                        <span style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(31, 31, 31)', fontWeight: 400, fontFamily: 'Poppins'}}>
                            Contácto
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
