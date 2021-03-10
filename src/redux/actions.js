export const pedirPokemones = () => (dispatch) => {

    dispatch({
        type: "POKEMONES_CARGANDO"
    })

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
    .then(res => res.json())
    .then(data => data.results.map( index => {
        fetch(index.url)
            .then( response => response.json())
            .then( datos => dispatch({
                type: "POKEMONES_GUARDAR",
                payload: {
                    pokemon: {
                        id: datos.id,
                        name: datos.name,
                        img: datos.sprites.other.dream_world.front_default,
                        species: datos.types[0].type.name
                    }
                }
            }))
    }))
    .catch( error => dispatch({
        type: "BUSQUEDA_ERROR"
    }) )  
}

export const mostrarPokemones = () => (dispatch) =>{
    dispatch({
        type: "POKEMON_MOSTRAR"
    })
}

export const detallesPokemon = (id) => async (dispatch) => {
    
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    if( request.ok ){
        const res = await request.json();
        dispatch({
            type: "POKEMON_DETALLE",
            payload: {
                id: res.id,
                name: res.name,
                img: res.sprites.other.dream_world.front_default,
                species: res.types[0].type.name,
                ability: res.abilities[0].ability.name,
                experince: res.base_experience,
                height: res.height,
                hp: res.stats[0].base_stat,
                attack: res.stats[1].base_stat,
                defence: res.stats[2].base_stat,
                specialAttack: res.stats[3].base_stat,
                specialDefence: res.stats[4].base_stat,
                speed: res.stats[5].base_stat
            }
        })
    }else{
        dispatch({
            type: "BUSQUEDA_ERROR"
        })
    }
}

export const filtrar = (elemento) => (dispatch) => {
    dispatch({
        type: "FILTRAR",
        elemento
    })

}

//search
export const handleChange = (value) => {
    return{
        type: "BUSQUEDA_CARGAR_VALOR",
        value
    }
}

export const handleInput = ( value ) => ( dispatch ) => {

    dispatch({
        type: "POKEMONES_CARGANDO"
    })
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.trim().toLowerCase()}`)
        .then( res => res.json())
        .then( datos => dispatch({
            type: "BUSQUEDA_EXITO",
            payload: {  
                    id: datos.id,
                    name: datos.name,
                    img: datos.sprites.other.dream_world.front_default,
                    species: datos.types[0].type.name,
                    ability: datos.abilities[0].ability.name,
                    experince: datos.base_experience,
                    height: datos.height,
                    hp: datos.stats[0].base_stat,
                    attack: datos.stats[1].base_stat,
                    defence: datos.stats[2].base_stat,
                    specialAttack: datos.stats[3].base_stat,
                    specialDefence: datos.stats[4].base_stat,
                    speed: datos.stats[5].base_stat     
            }
        }))
        .catch( error =>
            dispatch({
                type: "BUSQUEDA_ERROR"
            })
        )
}
