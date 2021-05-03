import React from 'react'
import { PupilAchievementResponse } from '../../api/types'
import { iconBook, iconStar, iconHands, iconCup } from '../../icons'
import moment from 'moment'

import './achievementBlock.scss'

interface AchievementBlockProps {
    blockData: PupilAchievementResponse
}
const AchievementBlock = ({ blockData } : AchievementBlockProps) => {

    const getOlypiadTypeIcon = (type: string) => {
        if (type === 'Конкурс') return iconStar
        if (type === 'Работа') return iconBook
        if (type === 'Занятие') return iconHands
        if (type === 'Награда') return iconCup
    }

    return (
        <div className="achievement-block">  
           <div className="achievement-block__container">
                <img className="achievement-block__type" src={getOlypiadTypeIcon(blockData.type)} alt="тип"/>
                <p className="achievement-block__result">{blockData.type}</p>
                <h3 className="achievement-block__title">{blockData.name}</h3>
                <p className="achievement-block__date">{moment(blockData.date).format('DD.MM.YYYY')}</p>
           </div>
        </div>
    ) 
}

export default AchievementBlock;