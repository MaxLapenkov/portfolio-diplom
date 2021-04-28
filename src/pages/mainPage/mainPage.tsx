import React from 'react';
import { PersonInfo } from '../../components';

import { useCheckAuth } from '../../hooks/checkAuth';

import './mainPage.scss';


const MainPage = () => {

    useCheckAuth()

    return (
        <div className="main-page">
            <div className="main-page__left-column">
                <PersonInfo />
            </div>
            <div className="main-page__right-column">

            </div>
        </div>
    )
}

export default MainPage