import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { getClassmatesAsync, classmates } from '../../reducers/classmates'
import { userData } from '../../reducers/userData'
import PersonBlock from '../personBlock/personBlock'

import './classmate.scss'

const Classmates = () => {
    const currentUser = useAppSelector(userData)
    const pupilsClassmates = useAppSelector(classmates)
    const dispatch = useAppDispatch();
    const getPupilClassmates = (classId: number) => {
        dispatch(getClassmatesAsync({classId}))
    }
    useEffect(() => {
        if (currentUser.data?.school_class.id) getPupilClassmates(currentUser.data.school_class.id)  
    }, [currentUser.data?.school_class.id]);

    if(!currentUser.data) return null

    return (
        <section className="classmate">
            <h2 className="classmate__header">Одноклассники</h2>
            <div className="classmate__container">
                {pupilsClassmates.data && pupilsClassmates.data.map((classmate) => (
                    <PersonBlock blockData={classmate} key={classmate.id} type="classmate" />
                ))}
            </div>
        </section>
    ) 
}

export default Classmates;