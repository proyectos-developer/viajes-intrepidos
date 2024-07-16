import React from 'react'

import blog_00 from '../../assets/image/blog/blog_00.png'
import blog_01 from '../../assets/image/blog/blog_01.png'
import blog_02 from '../../assets/image/blog/blog_02.png'
import blog_03 from '../../assets/image/blog/blog_03.png'
import blog_04 from '../../assets/image/blog/blog_04.png'
import blog_05 from '../../assets/image/blog/blog_05.png'
import blog_06 from '../../assets/image/blog/blog_06.png'
import blog_07 from '../../assets/image/blog/blog_07.png'
import blog_08 from '../../assets/image/blog/blog_08.png'

import CardBlogCell from './card/blogcell.jsx'

export default function BlogCell({proporcional}) {

    const blogs = [
        {id: '0', image: blog_00, fecha: 'Nombiembre 3, 2023', titulo: 'Los mejores lugares para tomar helado', descripcion: 'Tepteur sint occaecat cupidatat. non proident, sunt in culpa qui officia deserun'},
        {id: '1', image: blog_01, fecha: 'Nombiembre 4, 2023', titulo: 'Consejos sobre cómo empacar', descripcion: 'Tepteur sint occaecat cupidatat. non proident, sunt in culpa qui officia deserun'},
        {id: '2', image: blog_02, fecha: 'Nombiembre 5, 2023', titulo: 'Consejos de viaje y descuentos', descripcion: 'Tepteur sint occaecat cupidatat. non proident, sunt in culpa qui officia deserun'},
        {id: '3', image: blog_03, fecha: 'Diciembre 31, 2023', titulo: 'Los mejores lugares alrededor', descripcion: 'Tepteur sint occaecat cupidatat. non proident, sunt in culpa qui officia deserun'},
        {id: '4', image: blog_04, fecha: 'Enero 1, 2024', titulo: 'Solicitar maratones', descripcion: 'Tepteur sint occaecat cupidatat. non proident, sunt in culpa qui officia deserun'},
        {id: '5', image: blog_05, fecha: 'Enero 2, 2024', titulo: 'Explorando nuevas cocinas', descripcion: 'Tepteur sint occaecat cupidatat. non proident, sunt in culpa qui officia deserun'},
        {id: '6', image: blog_06, fecha: 'Marco 28, 2023', titulo: 'Los 5 mejores sitios arqueológicos', descripcion: 'Tepteur sint occaecat cupidatat. non proident, sunt in culpa qui officia deserun'},
        {id: '7', image: blog_07, fecha: 'Marco 29, 2024', titulo: 'Travel insurance', descripcion: 'Tepteur sint occaecat cupidatat. non proident, sunt in culpa qui officia deserun'},
        {id: '8', image: blog_08, fecha: 'Marco 30, 2024', titulo: 'Cómo conseguir las mejores ofertas', descripcion: 'Tepteur sint occaecat cupidatat. non proident, sunt in culpa qui officia deserun'}
    ]

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 88 / proporcional}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <CardBlogCell proporcional={proporcional} blog={blogs[0]}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 88 / proporcional}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <CardBlogCell proporcional={proporcional} blog={blogs[1]}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 88 / proporcional}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <CardBlogCell proporcional={proporcional} blog={blogs[2]}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 88 / proporcional}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <CardBlogCell proporcional={proporcional} blog={blogs[3]}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 88 / proporcional}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <CardBlogCell proporcional={proporcional} blog={blogs[4]}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 88 / proporcional}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <CardBlogCell proporcional={proporcional} blog={blogs[5]}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 88 / proporcional}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <CardBlogCell proporcional={proporcional} blog={blogs[6]}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 88 / proporcional}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <CardBlogCell proporcional={proporcional} blog={blogs[7]}/>
                </div>
            </div>
        </div>
    )
}
