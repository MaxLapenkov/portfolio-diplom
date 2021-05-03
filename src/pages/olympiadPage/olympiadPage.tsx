import React from 'react';
import { PersonInfo, Olympiad } from '../../components';

import { useCheckAuth } from '../../hooks/checkAuth';

import './olympiadPage.scss';


const OlympiadPage = () => {

    useCheckAuth()

    return (
        <div className="olympiad-page">
            <div className="olympiad-page__left-column">
                <PersonInfo />
            </div>
            <div className="olympiad-page__right-column">
                <Olympiad />
            </div>
        </div>
    )
}

export default OlympiadPage