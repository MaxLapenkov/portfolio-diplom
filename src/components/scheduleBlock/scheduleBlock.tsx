import React from 'react'
import { ClassScheduleResponse } from '../../api/types';

import './scheduleBlock.scss'

interface ScheduleBlockProps {
    blockData: ClassScheduleResponse[] | null,
    day: string
}
const ScheduleBlock = ({ blockData, day } : ScheduleBlockProps) => {

    const getScheduleTime = (time: string) => {
        return time.slice(0, -3)
    }

    return (
        <div className="schedule-block">
            <div className="schedule-block__container">
                <h3 className="schedule-block__day">{day}</h3>
                <ul className="schedule-block__content">
                    {blockData?.map((schedule) => (
                        <li className="schedule-block__item" key={schedule.id}>
                            <p className="schedule-block__name">{schedule.name}</p>
                            <p className="schedule-block__time">{getScheduleTime(schedule.time)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    ) 
}

export default ScheduleBlock;