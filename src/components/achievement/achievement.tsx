import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { getPupilAchievementAsync, achievement } from '../../reducers/achievement'
import { userData } from '../../reducers/userData'
import AchievementBlock from '../achievementBlock/achievementBlock'

import './achievement.scss'

const Achievement = () => {
    const currentUser = useAppSelector(userData)
    const pupilAchievements = useAppSelector(achievement)
    const dispatch = useAppDispatch();
    const getPupilAchievement = (pupilId: number) => {
        dispatch(getPupilAchievementAsync({pupilId}))
    }
    useEffect(() => {
        if (currentUser.data?.id) getPupilAchievement(currentUser.data.id)  
    }, [currentUser.data?.id]);

    if(!currentUser.data) return null

    return (
        <section className="achievement">
            <h2 className="achievement__header">Достижения</h2>
            <div className="achievement__container">
                {pupilAchievements.data && pupilAchievements.data.map((achievement) => (
                    <AchievementBlock blockData={achievement}/>
                ))}
            </div>
        </section>
    ) 
}

export default Achievement;