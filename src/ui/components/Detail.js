import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/detailStyles.css'
import Error from './Error';

const Detail = ({mostrar}) => {

    const {error} = useSelector(state => state)

    const pokemon = mostrar[0];

    return (
        <div className="py-5 content">

            {
                error? <Error /> : 
            
            
                <div className='contentDetail'>
                    <div className="containImg">
                        <img 
                            className="animate__animated animate__heartBeat"
                            src={ pokemon?.img } 
                            alt={ pokemon?.id } 
                        />
                    </div>

                    <div className="abilitiesCard py-5">

                        <div className="text-center py-3">

                            <h2 className="fw-bold">{ pokemon?.name  }</h2>

                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width:'58%'}} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <p>{ `${pokemon?.hp}HP` }</p>

                        </div>

                        <div className="abilities">

                            <div className="abilitiesItem py-2">
                                <div className="text-center">
                                    <p className="fs-3 fw-bold mb-0 text-danger">{ pokemon?.attack }</p>
                                    <span className="text-muted">ataque</span>
                                </div>
                                
                                <div className="text-center">
                                    <p className="fs-3 fw-bold mb-0">{ pokemon?.species }</p>
                                    <span className="text-muted">tipo</span>
                                </div>

                                <div className="text-center">
                                    <p className="fs-3 fw-bold mb-0 text-success">{ pokemon?.defence }</p>
                                    <span className="text-muted">defensa</span>
                                </div>
                            </div>

                            <div className="abilitiesItem py-2">
                                <div className="text-center">
                                    <p className="fs-3 fw-bold mb-0 text-danger">{ pokemon?.specialAttack }</p>
                                    <span className="text-muted">ataque especial</span>
                                </div>
                                
                                <div className="text-center">
                                    <p className="fs-3 fw-bold mb-0">{ pokemon?.ability }</p>
                                    <span className="text-muted">hablilidad especial</span>
                                </div>

                                <div className="text-center">
                                    <p className="fs-3 fw-bold mb-0 text-success">{ pokemon?.specialDefence }</p>
                                    <span className="text-muted">defensa especial</span>
                                </div>
                            </div>


                    


                        </div>
                    
                    </div>

                </div>
            
            }



        </div>
    )
}

export default Detail
