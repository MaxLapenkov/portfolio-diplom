import React, { useEffect } from 'react'
import { ClassScheduleResponse } from '../../api/types'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { getClassScheduleAsync, schedule } from '../../reducers/schedule'
import { userData } from '../../reducers/userData'
import ScheduleBlock from '../scheduleBlock/scheduleBlock'

import './schedule.scss'

const Schedule = () => {
    const currentUser = useAppSelector(userData)
    const pupilSchedule = useAppSelector(schedule)
    const dispatch = useAppDispatch();
    const getClassSchedule = (classId: number) => {
        dispatch(getClassScheduleAsync({classId}))
    }
    useEffect(() => {
        if (currentUser.data?.school_class.id) getClassSchedule(currentUser.data.school_class.id)  
    }, [currentUser.data?.school_class.id]);

    const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']

    const filterScheduleByDay = (schedule: ClassScheduleResponse[] | null, day: string) => {
        if (schedule === null) return schedule
        return schedule.filter((item) => item.day === day)
    }

    if(!currentUser.data) return null

    return (
        <section className="schedule">
            <h2 className="schedule__header">Расписание</h2>
            <div className="schedule__container">
                {pupilSchedule.data && days.map((day) => {
                    return <ScheduleBlock blockData={filterScheduleByDay(pupilSchedule.data, day)} key={day} day={day} />
                })}
            </div>
        </section>
    ) 
}

export default Schedule;