import React from 'react'
import Button from './Button'

const Error = () => {
    return (
        <div className="d-flex flex-column">
            <Button />
            <p className="fs-3 fw-bold py-5 px-5"> pokemon no encontrado :(</p>
        </div>
    )
}

export default Error
