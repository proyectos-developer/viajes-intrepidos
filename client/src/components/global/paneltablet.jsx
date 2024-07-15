import React, { useEffect, useState } from 'react'

import MenuSuperiorTablet from '../comun/menusupeiortablet.jsx'
import FooterTablet from '../comun/footertablet.jsx'

import { Outlet, useLocation } from 'react-router-dom'

export default function GlobalPanel({proporcional}) {

    const location = useLocation()

    const [pagina, setPagina] = useState('')

    useEffect(() => {
        setPagina(location.pathname.split ('/')[1])
    }, [location.pathname.split (1)])
    
    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
            <div className={pagina === '' ? 'position-fixed start-0 top-0' : ''} style={{width: '100%', height: 'auto', zIndex: 9999}}>
                <MenuSuperiorTablet proporcional={proporcional}/>
            </div>
            <Outlet/>
            <FooterTablet proporcional={proporcional}/>
        </div>
    )
}
