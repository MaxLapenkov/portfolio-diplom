import React from 'react';

import { useCheckAuth } from '../../hooks/checkAuth';

import './mainPage.scss';


const MainPage = () => {

    useCheckAuth()

    return (
        <div className="main-page">
            Hello
        </div>
    )
}

export default MainPage