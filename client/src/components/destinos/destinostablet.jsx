import React from 'react'

import destino_00 from '../../assets/image/destinos/destino_canotaje_00.png'
import destino_01 from '../../assets/image/destinos/destino_aventura_01.png'
import destino_02 from '../../assets/image/destinos/destino_playas_02.png'
import destino_03 from '../../assets/image/destinos/destino_huascaran_03.png'
import destino_04 from '../../assets/image/destinos/destino_ciudad_04.png'
import destino_05 from '../../assets/image/destinos/destino_ciclismo_05.png'
import destino_06 from '../../assets/image/destinos/destino_atardecer_06.png'
import destino_07 from '../../assets/image/destinos/destino_aventura_07.png'
import destino_08 from '../../assets/image/destinos/destino_escalar_08.png'
import destino_09 from '../../assets/image/destinos/destino_colca_09.png'
import destino_10 from '../../assets/image/destinos/destino_cuzco_10.png'
import destino_11 from '../../assets/image/destinos/destino_amazonas_11.png'

import CardDestinoTablet from './card/destinotablet.jsx'

export default function DestinosTablet({proporcional}) {

    const destinos = [
        {id: '0', image: destino_00, titulo: 'Canotaje en el amazonas', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore en dolore.'},
        {id: '1', image: destino_01, titulo: 'Aventura en la Sierra', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore en dolore.'},
        {id: '2', image: destino_02, titulo: 'Verano en la playa', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore en dolore.'},
        {id: '3', image: destino_03, titulo: 'Conociendo el huascarán', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore en dolore.'},
        {id: '4', image: destino_04, titulo: 'Tour en la ciudad de Lima', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore en dolore.'},
        {id: '5', image: destino_05, titulo: 'Ciclismo montañero', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore en dolore.'},
        {id: '6', image: destino_06, titulo: 'Atardecer en la playa', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore en dolore.'},
        {id: '7', image: destino_07, titulo: 'Aventura en las montañas', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore en dolore.'},
        {id: '8', image: destino_08, titulo: 'Escalar montañas', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore en dolore.'},
        {id: '9', image: destino_09, titulo: 'Valle del colca', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore en dolore.'},
        {id: '0', image: destino_10, titulo: 'Machu Picchu', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore en dolore.'},
        {id: '11', image: destino_11, titulo: 'Conociendo el amazonas', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore en dolore.'}
    ]

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, background: 'rgb(249, 249, 249)'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 80 / proporcional}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <CardDestinoTablet proporcional={proporcional} destino={destinos[0]}/>
                    </div>
                    <div style={{width: '48%', height: 'auto'}}>
                        <CardDestinoTablet proporcional={proporcional} destino={destinos[1]}/>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 80 / proporcional}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <CardDestinoTablet proporcional={proporcional} destino={destinos[2]}/>
                    </div>
                    <div style={{width: '48%', height: 'auto'}}>
                        <CardDestinoTablet proporcional={proporcional} destino={destinos[3]}/>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 80 / proporcional}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <CardDestinoTablet proporcional={proporcional} destino={destinos[4]}/>
                    </div>
                    <div style={{width: '48%', height: 'auto'}}>
                        <CardDestinoTablet proporcional={proporcional} destino={destinos[5]}/>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 80 / proporcional}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <CardDestinoTablet proporcional={proporcional} destino={destinos[6]}/>
                    </div>
                    <div style={{width: '48%', height: 'auto'}}>
                        <CardDestinoTablet proporcional={proporcional} destino={destinos[7]}/>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 80 / proporcional}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <CardDestinoTablet proporcional={proporcional} destino={destinos[8]}/>
                    </div>
                    <div style={{width: '48%', height: 'auto'}}>
                        <CardDestinoTablet proporcional={proporcional} destino={destinos[9]}/>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 80 / proporcional}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <CardDestinoTablet proporcional={proporcional} destino={destinos[10]}/>
                    </div>
                    <div style={{width: '48%', height: 'auto'}}>
                        <CardDestinoTablet proporcional={proporcional} destino={destinos[11]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
