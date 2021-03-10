import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtrar } from '../../redux/actions'
import PokeCard from '../components/PokeCard';
import '../styles/styles.css';

const ScreenFire = () => {

    const dispatch = useDispatch();
    const { mostrar, pokemones } = useSelector(state => state)

    useEffect(() => {
        
        dispatch(filtrar('fire'))
            
    }, [pokemones])    

    return (
        <div className="fire">
            <PokeCard pokemones={ mostrar } /> 
        </div>
    )
}

export default ScreenFire;
