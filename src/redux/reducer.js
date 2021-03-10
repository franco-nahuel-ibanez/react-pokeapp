const initialState = {
    pokemones: [],
    mostrar: [],
    details: [],
    value: '',
    loading: false,
    error: false,
    botonRegresar: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case "POKEMONES_GUARDAR":
            return {
                ...state,
                loading: false,
                pokemones: [
                    ...state.pokemones,
                    action.payload.pokemon
                ]
            }

        case "POKEMONES_CARGANDO":
            return{
                ...state,
                loading: true
            }

        case "POKEMON_MOSTRAR":
            return{
                ...state,
                error: false,
                botonRegresar: false,
                mostrar: state.pokemones
            }

        //ver pokemon
        case "POKEMON_DETALLE":
            return{
                ...state,
                mostrar: [
                    action.payload
                ]
            }

        //busqueda
        case "BUSQUEDA_CARGAR_VALOR":
            return{
                ...state,
                value: action.value
            }

        case "BUSQUEDA_EXITO":
            return{
                ...state,
                error: false,
                loading: false,
                value: '',
                botonRegresar: true,
                mostrar: [action.payload]
            }

        case "BUSQUEDA_ERROR":
            return{
                ...state,
                loading: false,
                value: '',
                error: true
            }

        case "FILTRAR":
            return{
                ...state,
                error: false,
                mostrar : state.pokemones.filter( pokemon => pokemon.species === action.elemento )
            }

        default:
            return state
    }
}

export default reducer;