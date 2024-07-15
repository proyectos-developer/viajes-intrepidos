import React from 'react'

import MenuSuperiorTablet from '../comun/menusupeiortablet.jsx'
import FooterTablet from '../comun/footertablet.jsx'

import { Outlet } from 'react-router-dom'

export default function GlobalPanelTablet({proporcional}) {

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
            <div className='position-fixed start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                <MenuSuperiorTablet proporcional={proporcional}/>
            </div>
            <Outlet/>
            <FooterTablet proporcional={proporcional}/>
        </div>
    )
}
