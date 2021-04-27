import React from 'react';

import { Header } from '../../components';
import { useCheckAuth } from '../../hooks/checkAuth';

import './mainPage.scss';


const MainPage = () => {

    useCheckAuth()

    return (
        <div className="main-page">
            <Header/>
            Hello
        </div>
    )
}

export default MainPage