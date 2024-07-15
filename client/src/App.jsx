import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles.css'

import GlobalPanel from './components/global/panel.jsx'
import GlobalPanelTablet from './components/global/paneltablet.jsx'
import GlobalPanelCell from './components/global/panelcell.jsx'

import HomePanel from './components/home/panel.jsx'
import HomePanelTablet from './components/home/paneltablet.jsx'
import HomePanelCell from './components/home/panelcell.jsx'

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
                                                
                </Route>
          </Routes>
      </BrowserRouter>
    )
}