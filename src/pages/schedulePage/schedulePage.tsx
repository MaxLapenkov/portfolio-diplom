import React from 'react';
import { PersonInfo, Schedule } from '../../components';

import { useCheckAuth } from '../../hooks/checkAuth';

import './schedulePage.scss';


const SchedulePage = () => {

    useCheckAuth()

    return (
        <div className="schedule-page">
            <div className="schedule-page__left-column">
                <PersonInfo />
            </div>
            <div className="schedule-page__right-column">
                <Schedule />
            </div>
        </div>
    )
}

export default SchedulePage