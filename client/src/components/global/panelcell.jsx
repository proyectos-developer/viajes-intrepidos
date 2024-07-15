import React, { useEffect, useState } from 'react'

import facebook from '../../assets/iconos/menusuperior/facebook_blue.png'
import instagram from '../../assets/iconos/menusuperior/instagram_blue.png'
import twitter from '../../assets/iconos/menusuperior/twitter_blue.png'
import tiktok from '../../assets/iconos/menusuperior/tiktok_blue.png'

import MenuSuperiorCell from '../comun/menusupeiorcell.jsx'
import FooterCell from '../comun/footercell.jsx'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function GlobalPanelCell({proporcional}) {

    const location = useLocation()
    const navigate = useNavigate()

    const [menu_pagina, setMenuPagina] = useState ('inicio')
    const [pagina, setPagina] = useState('')

    const {open_menu_main} = useSelector (({data_actions}) => data_actions)

    useEffect(() => {
        setMenuPagina(location.pathname.split ('/')[1] === '' ? 'inicio' : location.pathname.split ('/')[1])
        setPagina(location.pathname.split ('/')[1])
    }, [location.pathname])

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
            <div className={pagina === '' ? 'position-fixed start-0 top-0' : ''} style={{width: '100%', height: 'auto', zIndex: 9999}}>
                <MenuSuperiorCell proporcional={proporcional}/>
            </div>
            {
                open_menu_main ? (
                    <div className='position-absolute start-0' style={{width: '100%', height: '100%', top: 80 / proporcional, zIndex: 99999}}>
                        <div className='d-flex justify-content-end' style={{width: '100%', height: '100%', background: 'rgba(89, 89, 89, 0.8)'}}>
                            <ul className='' style={{width: '60%', height: '100%', paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional,
                                    paddingLeft: 30 / proporcional, paddingRight: 30 / proporcional, background: 'white'}}>
                                <li style={{width: '100%', height: 60 / proporcional, listStyle: 'none', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                                        paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, cursor: 'pointer', 
                                        textDecoration: menu_pagina === 'inicio' ? 'underline' : 'none'}}
                                         onClick={() => navigate ('/')}>
                                    <span style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(31, 31, 31)', fontWeight: 400, fontFamily: 'Poppins',
                                        textAlign: 'right'}}>
                                        Inicio
                                    </span>
                                </li>
                                <li style={{width: '100%', height: 60 / proporcional, listStyle: 'none', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                                        paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, cursor: 'pointer', 
                                        textDecoration: menu_pagina === 'destinos' ? 'underline' : 'none'}}
                                         onClick={() => navigate ('/destinos')}>
                                    <span style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(31, 31, 31)', fontWeight: 400, fontFamily: 'Poppins',
                                        textAlign: 'right'}}>
                                        Destinos
                                    </span>
                                </li>
                                <li style={{width: '100%', height: 60 / proporcional, listStyle: 'none', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                                        paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, cursor: 'pointer', 
                                        textDecoration: menu_pagina === 'acerca-de' ? 'underline' : 'none'}}
                                        onClick={() => navigate ('/acerca-de')}>
                                    <span style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(31, 31, 31)', fontWeight: 400, fontFamily: 'Poppins',
                                        textAlign: 'right'}}>
                                        Acerca de
                                    </span>
                                </li>
                                <li style={{width: '100%', height: 60 / proporcional, listStyle: 'none', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                                        paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, cursor: 'pointer', 
                                        textDecoration: menu_pagina === 'blog' ? 'underline' : 'none'}}
                                         onClick={() => navigate ('/blog')}>
                                    <span style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(31, 31, 31)', fontWeight: 400, fontFamily: 'Poppins',
                                        textAlign: 'right'}}>
                                        Blog
                                    </span>
                                </li>
                                <li style={{width: '100%', height: 60 / proporcional, listStyle: 'none', paddingLeft: 10 / proporcional, paddingRight: 10 / proporcional,
                                        paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, cursor: 'pointer', 
                                        textDecoration: menu_pagina === 'contacto' ? 'underline' : 'none'}}
                                         onClick={() => navigate ('/contacto')}>
                                    <span style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(31, 31, 31)', fontWeight: 400, fontFamily: 'Poppins',
                                        textAlign: 'right'}}>
                                        Contácto
                                    </span>
                                </li>
                                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional}}>
                                    <img src={facebook} style={{width: 60 / proporcional, height: 60 / proporcional, padding: 20 / proporcional}}/>
                                    <img src={instagram} style={{width: 60 / proporcional, height: 60 / proporcional, padding: 20 / proporcional}}/>
                                    <img src={twitter} style={{width: 60 / proporcional, height: 60 / proporcional, padding: 20 / proporcional}}/>
                                    <img src={tiktok} style={{width: 60 / proporcional, height: 60 / proporcional, padding: 20 / proporcional}}/>
                                </div>
                            </ul>
                        </div>
                    </div>
                ) : null
            }
            <Outlet/>
            <FooterCell proporcional={proporcional}/>
        </div>
    )
}
