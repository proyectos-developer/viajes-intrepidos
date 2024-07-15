import React from 'react'

export default function CardDestinoCell({proporcional, destino}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                <img src={destino.image} style={{width: '100%', height: 300 / proporcional}}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <h6 style={{color: 'rgb(176, 176, 176)', fontSize: 12 / proporcional, fontFamily: 'Poppins', lineHeight: `${16 / proporcional}px`, marginBottom: 8 / proporcional,
                    fontWeight: 600, textAlign: 'left'}}>
                    Destinos
                </h6>
                <h4 style={{color: 'rgb(31, 31, 31)', fontWeight: 600, fontSize: 22 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 18 / proporcional, fontFamily: 'Poppins',
                    fontFamily: 'Poppins', textAlign: 'left'}}>
                    {destino.titulo}
                </h4>
                <div style={{width: '100%', height: 'auto', paddingRight: 20 / proporcional}}>
                    <p style={{color: 'rgb(70, 70, 70)', fontWeight: 400, fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontFamily: 'Poppins',
                        fontFamily: 'Poppins', textAlign: 'left'}}>
                        {destino.descripcion}
                    </p>
                </div>
            </div>
        </div>
    )
}
