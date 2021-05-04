import React from 'react'
import { PupilPerfomanceResponse } from '../../api/types';

import './perfomanceBlock.scss'

interface PerfomanceBlockProps {
    blockData: PupilPerfomanceResponse
}
const PerfomanceBlock = ({ blockData } : PerfomanceBlockProps) => {

    const getDiagramPercentage = (score: number) => {
        return 100 - (100 / 5 * score)
    }
    const getDiagramColors = (score: number) => {
        if(score >= 4 ) return 'rgba(123, 206, 60, 0.72)'
        if(score >= 3) return '#F1E469'
        return 'rgba(230, 62, 26, 0.72)'
    }

    const getDiagramBackground = (score: number) => {
        if (score === 5) return {background: 'rgba(123, 206, 60, 0.72)'}
        return {background: `linear-gradient(180deg, #FFFFFF ${getDiagramPercentage(score)}%, ${getDiagramColors(score)} 100%)`}
    }

    const {name, average_score} = blockData;

    return (
        <div className="perfomance-block">
           <div className="perfomance-block__diagram" style={getDiagramBackground(average_score)} />
           <div className="perfomance-block__info">
                <p className="perfomance-block__name">{name}</p>
                <p className="perfomance-block__score">{`Средний балл - ${average_score}`}</p>
           </div>
        </div>
    ) 
}

export default PerfomanceBlock;