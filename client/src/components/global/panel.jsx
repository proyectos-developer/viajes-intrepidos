import React from 'react'

import MenuSuperior from '../comun/menusupeior.jsx'
import Footer from '../comun/footer.jsx'

import { Outlet } from 'react-router-dom'

export default function GlobalPanel({proporcional}) {

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
            <div className='position-fixed start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                <MenuSuperior proporcional={proporcional}/>
            </div>
            <Outlet/>
            <Footer proporcional={proporcional}/>
        </div>
    )
}
