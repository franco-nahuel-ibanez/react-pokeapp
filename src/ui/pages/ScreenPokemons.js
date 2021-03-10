import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mostrarPokemones } from '../../redux/actions'
import Button from '../components/Button';
import PokeCard from '../components/PokeCard';
import '../styles/styles.css'

const ScreenPokemons = () => {

    const { mostrar, pokemones, botonRegresar } = useSelector(state => state)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(mostrarPokemones())
    }, [pokemones])

    return (
        <div className="all">

            {
                botonRegresar? <Button /> : null
            }
            
            <PokeCard pokemones={ mostrar } />
        </div>
    )
}
export default ScreenPokemons
