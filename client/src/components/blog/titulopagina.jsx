import React from 'react'

export default function TituloPagina({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 88 / proporcional, paddingBottom: 88 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <h6 style={{color: 'rgb(176, 176, 176)', fontSize: 12 / proporcional, fontFamily: 'Poppins', lineHeight: `${16 / proporcional}px`, marginBottom: 0,
                        fontWeight: 600, textAlign: 'center'}}>
                        Agencia Viajes Intrépidos
                    </h6>
                    <h1 style={{color: 'rgb(31, 31, 31)', fontWeight: 600, fontSize: 65 / proporcional, lineHeight: `${70 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins',
                        fontFamily: 'Poppins', textAlign: 'center'}}>
                        Revisa nuestro blog
                    </h1>
                </div>
            </div>
        </div>
    )
}
