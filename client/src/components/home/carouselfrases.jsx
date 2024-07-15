import React from 'react'

export default function CarouselFrases({proporcional}) {

    return (
        <div style={{width: '100%', height: 500 / proporcional, paddingLeft: 250 / proporcional, paddingRight: 250 / proporcional, background: '#007bff'}}>
            <div className='position-relative' style={{width: '100%', height: 500 / proporcional}}>
                <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                    <div id='carouselhomefrases' className='carousel slide' style={{width: '100%', height: 'auto'}}>
                        <div className='carousel-inner' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}} className='carousel-item active'
                                data-bs-interval='2000'>
                                <h3 style={{color: 'white', fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 600, marginBottom: 30 / proporcional,
                                    fontFamily: 'Poppins', textAlign: 'center'}}>
                                    Ornare aenean euismod elementum nisi. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Massa massa ultricies mi quis.
                                </h3>
                                <h6 style={{color: 'white', fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, fontFamily: 'Poppins', 
                                    marginBottom: 0, textAlign: 'center'}}>
                                    Otto Skarsgård
                                </h6>
                            </div>
                            <div style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}} className='carousel-item'
                                data-bs-interval='2000'>
                                <h3 style={{color: 'white', fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 600, marginBottom: 30 / proporcional,
                                    fontFamily: 'Poppins', textAlign: 'center'}}>
                                    Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Ornare arcu odio ut sem nulla pharetra diam sit. Purus sit amet luctus.
                                </h3>
                                <h6 style={{color: 'white', fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, fontFamily: 'Poppins', 
                                    marginBottom: 0, textAlign: 'center'}}>
                                    Daniel Baier
                                </h6>
                            </div>
                            <div style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}} className='carousel-item'
                                data-bs-interval='2000'>
                                <h3 style={{color: 'white', fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 600, marginBottom: 30 / proporcional,
                                    fontFamily: 'Poppins', textAlign: 'center'}}>
                                    Ametuid sui consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada, fames ac turpis egestas.
                                </h3>
                                <h6 style={{color: 'white', fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, fontFamily: 'Poppins', 
                                    marginBottom: 0, textAlign: 'center'}}>
                                    Hellena Gamborini
                                </h6>
                            </div>
                            <div style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}} className='carousel-item'
                                data-bs-interval='2000'>
                                <h3 style={{color: 'white', fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 600, marginBottom: 30 / proporcional,
                                    fontFamily: 'Poppins', textAlign: 'center'}}>
                                    Ornare aenean euismod elementum nisi. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Massa massa ultricies mi quis.
                                </h3>
                                <h6 style={{color: 'white', fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, fontFamily: 'Poppins', 
                                    marginBottom: 0, textAlign: 'center'}}>
                                    Otto Skarsgård
                                </h6>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselhomefrases" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselhomefrases" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
