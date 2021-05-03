import React from 'react'
import { PupilOlympiadResponse } from '../../api/types';
import { iconWinner } from '../../icons';
import moment from 'moment'

import './olympiadBlock.scss'

interface OlympiadBlockProps {
    blockData: PupilOlympiadResponse
}
const OlympiadBlock = ({ blockData } : OlympiadBlockProps) => {

    const getResultColor = (result: string) => {
        if (result === 'Победитель') return '#CEB326'
        if (result === 'Призер') return '#66891B'
        return '#55ACDC'
    }

    return (
        <div className="olympiad-block">  
           <div className="olympiad-block__container">
                {blockData.result === 'Победитель' && <img className="olympiad-block__winner" src={iconWinner} alt="медаль"/>}
               <p className="olympiad-block__result" style={{color: getResultColor(blockData.result)}}>{blockData.result}</p>
               <h3 className="olympiad-block__title">{blockData.name}</h3>
               <p className="olympiad-block__date">{moment(blockData.date).format('DD.MM.YYYY')}</p>
           </div>
        </div>
    ) 
}

export default OlympiadBlock;