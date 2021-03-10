import React from 'react'
import Error  from './Error';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../styles/styles.css';

const PokeCard = ({pokemones}) => {
    
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error)
    
    return (
        <>            
            <div className="contentCard">
                {                 
                    loading? <div className="buscando"><p>buscando pokemon...</p></div> : null 
                }

                {
                    error? <Error /> :

                    pokemones.map( pokemon => (
                        <div 
                            key={ pokemon.id } 
                            className="card pokeCard animate__animated animate__fadeInLeftBig" 
                        >
                            
                            <img 
                                className="card-img-top cardImg"
                                style={{ maxHeight: "17rem"}} 
                                src={pokemon.img}
                                alt="Card imagecard" 
                            />

                            <div className="card-body bg-light">
                                <NavLink className="card-title fw-bold cardName" to={`/pokemon-detail/${ pokemon.id }`}> {pokemon.name} </NavLink>
                            </div>
                        </div>
                    ))
                
                }
            </div>
        
        </>
    )
}

export default PokeCard
