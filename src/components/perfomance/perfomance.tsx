import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { getPupilPerfomanceAsync, perfomance } from '../../reducers/perfomance'
import { userData } from '../../reducers/userData'
import PerfomanceBlock from '../perfomanceBlock/perfomanceBlock'

import './perfomance.scss'

const Perfomance = () => {
    const currentUser = useAppSelector(userData)
    const pupilPerfomance = useAppSelector(perfomance)
    const dispatch = useAppDispatch();
    const getPupilPerfomance = (pupilId: number) => {
        dispatch(getPupilPerfomanceAsync({pupilId}))
    }
    useEffect(() => {
        if (currentUser.data?.id) getPupilPerfomance(currentUser.data.id)  
    }, [currentUser.data?.id]);

    if(!currentUser.data) return null

    return (
        <section className="perfomance">
            <h2 className="perfomance__header">Успеваемость</h2>
            <div className="perfomance__container">
                {pupilPerfomance.data?.map((perfomance) => {
                    return <PerfomanceBlock blockData={perfomance} key={perfomance.id}/>
                })}
            </div>
        </section>
    ) 
}

export default Perfomance;