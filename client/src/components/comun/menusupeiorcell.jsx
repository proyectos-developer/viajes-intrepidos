import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'

import menu_bar from '../../assets/iconos/menusuperior/menu_blue.png'

import { useNavigate } from 'react-router-dom'

import {set_open_menu_main} from '../../redux/actions/data.js'

export default function MenuSuperiorCell({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {open_menu_main} = useSelector (({data_actions}) => data_actions)

    return (
        <div className='shadow' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, background: 'transparent'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 80 / proporcional}}>
                <div style={{width: '80%', height: 80 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional}}>
                    <div style={{width: '100%', height: 40 / proporcional}}>
                        <h1 style={{fontSize: 40 / proporcional, lineHeight: `${40 / proporcional}px`, fontFamily: 'Bebas Neue, sans-serif', fontWeight: 400, color: '#007bff',
                                    marginBottom: 0, cursor: 'pointer'}} onClick={() => navigate ('/')}>
                            VIAJES INTRÉPIDOS
                        </h1>
                    </div>
                </div>
                <div className='d-flex justify-content-end' 
                    style={{width: '20%', height: 80 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional}}>
                    <img src={menu_bar} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}
                        onClick={() => dispatch(set_open_menu_main(!open_menu_main))}/>
                </div>
            </div>
        </div>
    )
}
