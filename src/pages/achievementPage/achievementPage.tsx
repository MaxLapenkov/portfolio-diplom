import React from 'react';
import { PersonInfo, Achievement } from '../../components';

import { useCheckAuth } from '../../hooks/checkAuth';

import './achievementPage.scss';


const AchievementPage = () => {

    useCheckAuth()

    return (
        <div className="achievement-page">
            <div className="achievement-page__left-column">
                <PersonInfo />
            </div>
            <div className="achievement-page__right-column">
                <Achievement />
            </div>
        </div>
    )
}

export default AchievementPage