import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles.css'

import GlobalPanel from './components/global/panel.jsx'
import GlobalPanelTablet from './components/global/paneltablet.jsx'
import GlobalPanelCell from './components/global/panelcell.jsx'

import HomePanel from './components/home/panel.jsx'
import HomePanelTablet from './components/home/paneltablet.jsx'
import HomePanelCell from './components/home/panelcell.jsx'

import DestinosPanel from './components/destinos/panel.jsx'
import DestinosPanelTablet from './components/destinos/paneltablet.jsx'
import DestinosPanelCell from './components/destinos/panelcell.jsx'

import AcercaDePanel from './components/acercade/panel.jsx'
import AcercaDePanelTablet from './components/acercade/paneltablet.jsx'
import AcercaDePanelCell from './components/acercade/panelcell.jsx'

export default function App() {

    const [width, setWidth] = useState(window.outerWidth)

    useEffect(() => {
        window.addEventListener('resize', handle_resize)

        return () => {
            window.removeEventListener('resize', handle_resize)
        }
    }, [])

    const handle_resize = () => {
        setWidth(window.outerWidth)
    }

    return (
      <BrowserRouter>
          <Routes>
                <Route path='/' element={width < 500 ? <GlobalPanelCell proporcional={499 / width}/> :
                                         width < 991 ? <GlobalPanelTablet proporcional={991 / width}/> :
                                                       <GlobalPanel proporcional={1920 / width}/>}>
                                                
                    <Route index element={width < 500 ? <HomePanelCell proporcional={499 / width}/> :
                                          width < 991 ? <HomePanelTablet proporcional={991 / width}/> :
                                                        <HomePanel proporcional={1920 / width}/>}/>

                    <Route path='destinos' element={width < 500 ? <DestinosPanelCell proporcional={499 / width}/> :
                                                    width < 991 ? <DestinosPanelTablet proporcional={991 / width}/> :
                                                                  <DestinosPanel proporcional={1920 / width}/>}/>

                    <Route path='acerca-de' element={width < 500 ? <AcercaDePanelCell proporcional={499 / width}/> :
                                                     width < 991 ? <AcercaDePanelTablet proporcional={991 / width}/> :
                                                                   <AcercaDePanel proporcional={1920 / width}/>}/>
                                                
                </Route>
          </Routes>
      </BrowserRouter>
    )
}