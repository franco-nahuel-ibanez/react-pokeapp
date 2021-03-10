import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtrar } from '../../redux/actions'
import PokeCard from '../components/PokeCard';
import '../styles/styles.css';

const ScreenWater = () => {

    const dispatch = useDispatch();
    const { mostrar, pokemones } = useSelector(state => state)

    useEffect(() => {
        
        dispatch(filtrar('water'))

    }, [pokemones])

    return (
        <div className="water">
            <PokeCard pokemones={ mostrar } /> 
        </div>
    )
}

export default ScreenWater
