import React from 'react'

export default function CardBlogTablet({proporcional, blog}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 24 / proporcional}}>
                <img src={blog.image} style={{width: '100%', height: 460 / proporcional}}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{color: 'rgb(176, 176, 176)', fontWeight: 600, fontSize: 12 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 7 / proporcional,
                    fontFamily: 'Poppins', textAlign: 'left'}}>
                    {blog.fecha}
                </p>
                <h4 style={{color: 'rgb(31, 31, 31)', fontWeight: 600, fontSize: 22 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 12 / proporcional,
                    fontFamily: 'Poppins', textAlign: 'left'}}>
                    {blog.titulo}
                </h4>
                <p style={{color: 'rgb(70, 70, 70)', fontWeight: 400, fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional,
                    fontFamily: 'Poppins', textAlign: 'left'}}>
                    {blog.descripcion}
                </p>
            </div>
        </div>
    )
}
