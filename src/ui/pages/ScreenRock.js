import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtrar } from '../../redux/actions'
import PokeCard from '../components/PokeCard';
import '../styles/styles.css'

const ScreenRock = () => {

    const dispatch = useDispatch();
    const { mostrar, pokemones } = useSelector(state => state)

    useEffect(() => {
        
        dispatch(filtrar('rock'))
            
    }, [pokemones])    

    return (
        <div className="rock">
            <PokeCard pokemones={ mostrar } /> 
        </div>
    )
}

export default ScreenRock;
