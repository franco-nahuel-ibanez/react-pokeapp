import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtrar } from '../../redux/actions';
import PokeCard from '../components/PokeCard';
import '../styles/styles.css';

const ScreenElectric = () => {

    const dispatch = useDispatch();
    const { mostrar, pokemones } = useSelector(state => state)

    useEffect(() => {
        
        dispatch(filtrar('electric'))
            
    }, [pokemones])    

    return (
        <div className="electric">
            <PokeCard pokemones={ mostrar } /> 
        </div>
    )
}

export default ScreenElectric
