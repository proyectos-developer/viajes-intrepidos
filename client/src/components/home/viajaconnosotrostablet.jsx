import React from 'react'

import connosotros from '../../assets/image/home/image_nosotros.png'

export default function ViajaConNostrosTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 700 / proporcional, backgroundImage: `url(${connosotros})`, backgroundSize: 'cover', backgroundPosition: 'center', 
            paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, backgroundRepeat: 'no-repeat'}}>
            <div className='position-relative' style={{width: '100%', height: 700 / proporcional}}>
                <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                    <h3 style={{fontSize: 93 / proporcional, lineHeight: `${93 / proporcional}px`, color: 'white', fontWeight: 600, marginBottom: 0, fontFamily: 'Poppins',
                            textAlign: 'center'}}>
                        Realiza Viajes <span style={{color: '#007bff'}}>Intrépidos</span> <br/>con nostros
                    </h3>
                </div>
            </div>
        </div>
    )
}
