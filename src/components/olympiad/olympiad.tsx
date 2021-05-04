import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { getPupilOlympiadAsync, olympiad } from '../../reducers/olympiad'
import { userData } from '../../reducers/userData'
import OlympiadBlock from '../olympiadBlock/olympiadBlock'

import './olympiad.scss'

const Olympiad = () => {
    const currentUser = useAppSelector(userData)
    const pupilOlympiads = useAppSelector(olympiad)
    const dispatch = useAppDispatch();
    const getPupilPerfomance = (pupilId: number) => {
        dispatch(getPupilOlympiadAsync({pupilId}))
    }
    useEffect(() => {
        if (currentUser.data?.id) getPupilPerfomance(currentUser.data.id)  
    }, [currentUser.data?.id]);

    if(!currentUser.data) return null

    return (
        <section className="olympiad">
            <h2 className="olympiad__header">Олимпиады</h2>
            <div className="olympiad__container">
                {pupilOlympiads.data && pupilOlympiads.data.map((olympiad) => (
                    <OlympiadBlock blockData={olympiad} key={olympiad.id}/>
                ))}
            </div>
        </section>
    ) 
}

export default Olympiad;