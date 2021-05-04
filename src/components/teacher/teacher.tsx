import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { getTeacherAsync, teacher } from '../../reducers/teacher'
import { userData } from '../../reducers/userData'
import PersonBlock from '../personBlock/personBlock'

import './teacher.scss'

const Teacher = () => {
    const currentUser = useAppSelector(userData)
    const pupilsTeacher = useAppSelector(teacher)
    const dispatch = useAppDispatch();
    const getPupilTeacher = (classId: number) => {
        dispatch(getTeacherAsync({classId}))
    }
    useEffect(() => {
        if (currentUser.data?.school_class.id) getPupilTeacher(currentUser.data.school_class.id)  
    }, [currentUser.data?.school_class.id]);

    if(!currentUser.data) return null

    return (
        <section className="teacher">
            <h2 className="teacher__header">Классный руководитель</h2>
            <div className="teacher__container">
                {pupilsTeacher.data && pupilsTeacher.data.map((teacher) => (
                    <PersonBlock blockData={teacher} key={teacher.id} type="teacher" />
                ))}
            </div>
        </section>
    ) 
}

export default Teacher;