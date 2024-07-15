import {datatypes} from '../actions/data.js'

const initial_state = {
    authenticated: false,
    open_menu_main: false,
    open_menu_lateral_carrito: false,
}

const data = (state = initial_state, action) => {
    if (action.type === datatypes.SET_AUTHENTICATED){
        const authenticated = action.authenticated
        return {
            ... state,
            authenticated
        }
    }else if (action.type === datatypes.SET_OPEN_MENU_MAIN){
        const open_menu_main = action.open_menu_main
        return {
            ... state,
            open_menu_main
        }
    }else if (action.type === datatypes.SET_OPEN_MENU_LATERAL_CARRITO){
        const open_menu_lateral_carrito = action.open_menu_lateral_carrito
        return {
            ... state,
            open_menu_lateral_carrito
        }
    }else{
        return state
    }
}

export default data