import React, { useState } from 'react'

export default function Formulario({proporcional}) {

    const [nombres_apellidos, setNombresApellidos] = useState('')
    const [correo, setCorreo] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [mensaje, setMensaje] = useState('')

    const [enombres_apellidos, setENombresApellidos] = useState(false)
    const [ecorreo, setECorreo] = useState(false)
    const [enro_telefono, setENroTelefono] = useState(false)
    const [emensaje, setEMensaje] = useState(false)

    const [boton_enviar, setBotonEnviar] = useState(false)

    const enviar_mensaje = () => {
        if (nombres_apellidos === '' || correo === '' || nro_telefono === '' || mensaje === ''){
            setENombresApellidos(nombres_apellidos === '' ? true : false)
            setECorreo(correo === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
            setEMensaje(mensaje === '' ? true : false)
        }else{
            setENombresApellidos(false)
            setECorreo(false)
            setENroTelefono(false)
            setEMensaje(false)

            const data_mensaje = {
                nombres_apellidos: nombres_apellidos,
                correo: correo,
                nro_telefono: nro_telefono,
                mensaje: mensaje
            }

            console.log (data_mensaje)
        }
    }


    return (
        <div style={{width: '100%', height: '100%'}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional}}>
                <h6 style={{fontSize: 12 / proporcional, fontWeight: 600, lineHeight: `${16 / proporcional}px`, color: 'rgb(176, 176, 176)', fontFamily: 'Poppins',
                    textAlign: 'left'}}>
                    Página contacto
                </h6>
                <h2 style={{fontSize: 50 / proporcional, fontWeight: 600, lineHeight: `${68 / proporcional}px`, color: 'rgb(31, 31, 31)', fontFamily: 'Poppins',
                    textAlign: 'left', marginBottom: 8 / proporcional}}>
                    Contáctanos <span style={{color: '#007bff'}}>hoy</span>
                </h2>
                <p style={{fontSize: 19 / proporcional, fontWeight: 400, lineHeight: `${28 / proporcional}px`, color: 'rgb(70, 70, 70)', fontFamily: 'Poppins',
                    textAlign: 'left'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut dolore.
                </p>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <input  
                    id='nombres_apellidos'
                    type='default'
                    className='form-control rounded'
                    value={nombres_apellidos}
                    onChange={(event) => setNombresApellidos(event.target.value)}
                    placeholder='Nombres y apellidos'
                    style={{width: '100%', height: 56 / proporcional, marginBottom: 0 / proporcional, background: 'white', fontSize: 16 / proporcional, fontWeight: 400, 
                        lineHeight: `${56 / proporcional}px`, color: 'rgb(143, 143, 143)', border: enombres_apellidos ? '1px solid red' : '', marginBottom: 9 / proporcional}}/>
                <input  
                    id='correo'
                    type='e-mail'
                    className='form-control rounded'
                    value={correo}
                    onChange={(event) => setCorreo(event.target.value)}
                    placeholder='Correo electrónico'
                    style={{width: '100%', height: 56 / proporcional, marginBottom: 0 / proporcional, background: 'white', fontSize: 16 / proporcional, fontWeight: 400, 
                        lineHeight: `${56 / proporcional}px`, color: 'rgb(143, 143, 143)', border: ecorreo ? '1px solid red' : '', marginBottom: 9 / proporcional}}/>
                <input  
                    id='nro_telefono'
                    type='number'
                    className='form-control rounded'
                    value={nro_telefono}
                    onChange={(event) => setNroTelefono(event.target.value)}
                    placeholder='Nro teléfono'
                    style={{width: '100%', height: 56 / proporcional, marginBottom: 0 / proporcional, background: 'white', fontSize: 16 / proporcional, fontWeight: 400, 
                        lineHeight: `${56 / proporcional}px`, color: 'rgb(143, 143, 143)', border: enro_telefono ? '1px solid red' : '', marginBottom: 9 / proporcional}}/>
                <textarea  
                    id='mensaje'
                    type='default'
                    rows={3}
                    className='form-control rounded'
                    value={mensaje}
                    onChange={(event) => setMensaje(event.target.value)}
                    placeholder='Mensaje'
                    style={{width: '100%', height: 160 / proporcional, marginBottom: 0 / proporcional, background: 'white', fontSize: 16 / proporcional, fontWeight: 400, 
                        lineHeight: `${56 / proporcional}px`, color: 'rgb(143, 143, 143)', border: emensaje ? '1px solid red' : '', marginBottom: 9 / proporcional}}/>
                <div className='rounded' 
                    style={{width: 250 / proporcional, height: 66 / proporcional, marginTop: 35 / proporcional, background: boton_enviar ? 'rgba(0, 123, 255, 0.6)' : 'rgb(0, 123, 255)',
                            cursor: 'pointer'}}
                        onMouseOver={() => setBotonEnviar(true)} onMouseLeave={() => setBotonEnviar(false)} onClick={() => enviar_mensaje()}>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, lineHeight: `${66 / proporcional}px`, color: 'white', fontFamily: 'Poppins, sans-serif',
                        textAlign: 'center'}}>
                        Enviar mensaje
                    </p>
                </div>
            </div>
        </div>
    )
}
