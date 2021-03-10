import React, { useEffect } from 'react';
import { pedirPokemones } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Search from '../components/Search';
import '../styles/styles.css'
import logo from '../../assets/image/logo.png'

const Header = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(pedirPokemones())
    }, [])

    return (
        <header className="bg-primary px-5">

            <img className="logo pt-3 animate__animated animate__fadeInDown" src={logo} alt='logo' />

        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                        
        <div className="navbar-collapse">
            <div className="navbar-nav me-auto mb2 mb-lg-0">
                <NavLink 
                    to="/" 
                    exact
                    className="nav-item nav-link fs-5">
                        Inicio
                </NavLink>    

                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link fs-5"
                    exact
                    to="/pokemon-agua"
                >
                    Agua
                </NavLink>

                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link fs-5"
                    exact                        
                    to="/pokemon-fuego"
                >
                    fuego
                </NavLink>

                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link fs-5"
                    exact
                    to="/pokemon-roca"
                >
                    roca
                </NavLink>

                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link fs-5"
                    exact
                    to="/pokemon-electricidad"
                >
                    electricidad
                </NavLink>
            </div>

            <Search />
        </div>

        </nav>



        </header>
    )
}

export default Header;











