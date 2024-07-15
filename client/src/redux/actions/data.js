export const datatypes = {
    SET_AUTHENTICATED: 'SET_AUTENTICATED',
    SET_OPEN_MENU_MAIN: 'SET_OPEN_MENU_MAIN',
    SET_OPEN_MENU_LATERAL_CARRITO: 'SET_OPEN_MENU_LATERAL_CARRITO',
}

export const set_authenticated = authenticated => {
    return {
        authenticated,
        type: datatypes.SET_AUTHENTICATED
    }
}

export const set_open_menu_main = open_menu_main => {
    return {
        open_menu_main,
        type: datatypes.SET_OPEN_MENU_MAIN
    }
}

export const set_open_menu_lateral_carrito = open_menu_lateral_carrito => {
    return {
        open_menu_lateral_carrito,
        type: datatypes.SET_OPEN_MENU_LATERAL_CARRITO
    }
}