import React from 'react'


import { useAppSelector } from '../../hooks'
import { userData } from '../../reducers/userData'
import { getPupilAvatar, getPupilClass } from '../../utils/functions'

import './personInfo.scss'

const PersonInfo = () => {
    const currentUser = useAppSelector(userData)
    if(!currentUser.data) return null

    const {name, age, gender, school, school_class} = currentUser.data

    return (
        <section className="person-info">
            <div className="person-info__inner-container">
                <div className="person-info__avatar-container">
                    <img src={getPupilAvatar(gender)} className="person-info__avatar" alt="аватарка" />
                </div>
                <p className="person-info__name">{name}</p>
                <p className="person-info__age">{`${age} лет`}</p>
                <p className="person-info__school">{school.name}</p>
                <p className="person-info__class">{getPupilClass(school_class.parallel, school_class.letter)}</p>
            </div>
        </section>
    ) 
}

export default PersonInfo;