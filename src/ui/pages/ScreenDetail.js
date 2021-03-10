import React, { useEffect} from 'react'
import { detallesPokemon } from '../../redux/actions'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Detail from '../components/Detail';

const ScreenDetail = () => {

    const { mostrar } = useSelector(state => state)
    const dispatch = useDispatch()
    const {id} = useParams();
    

    useEffect(() => {
        dispatch(detallesPokemon(id))
    }, [])

    return (
        <div>
            <Detail mostrar={ mostrar } />
        </div>
    )
}

export default ScreenDetail
