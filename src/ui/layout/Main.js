import React from 'react';
import { Route } from 'react-router-dom';
import ScreenDetail from '../pages/ScreenDetail';
import ScreenElectric from '../pages/ScreenElectric';
import ScreenFire from '../pages/ScreenFire';
import ScreenPokemons from '../pages/ScreenPokemons'; 
import ScreenRock from '../pages/ScreenRock';
import ScreenSearch from '../pages/ScreenSearch';
import ScreenWater from '../pages/ScreenWater';



const Main = () => {
    return (
        <main>
            <Route exact path='/pokemon-agua' component={ ScreenWater } />
            <Route exact path='/pokemon-fuego' component={ ScreenFire } />
            <Route exact path='/pokemon-roca' component={ ScreenRock } />
            <Route exact path='/pokemon-electricidad' component={ ScreenElectric } />
            <Route exact path='/pokemon-detail/:id' component={ ScreenDetail } />
            <Route exact path='/buscar' component={ ScreenSearch } />
            <Route exact path='/' component={ ScreenPokemons } />
        </main>
    )
}

export default Main
