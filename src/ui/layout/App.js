import React from 'react';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
     
    return (
        <div>
            <Provider store={store}>
                
                    <BrowserRouter>
                        <Header />
                        <Main />
                        <Footer />
                    </BrowserRouter>
            
            </Provider>
        </div>
    )
}

export default App;