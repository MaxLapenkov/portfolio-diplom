import React from 'react';
import { Classmate, PersonInfo, Teacher } from '../../components';

import { useCheckAuth } from '../../hooks/checkAuth';

import './classPage.scss';


const ClassPage = () => {

    useCheckAuth()

    return (
        <div className="class-page">
            <div className="class-page__left-column">
                <PersonInfo />
            </div>
            <div className="class-page__right-column">
                <Teacher />
                <Classmate />
            </div>
        </div>
    )
}

export default ClassPage