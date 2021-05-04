import React from 'react'
import { ClassmatesResponse, TeacherResponse } from '../../api/types';
import { avatarBoy, avatarGirl } from '../../icons';

import './personBlock.scss'

interface PersonBlockProps {
    blockData: TeacherResponse | ClassmatesResponse,
    type: string
}
const PersonBlock = ({ blockData, type } : PersonBlockProps) => {

    return (
        <div className={type === 'teacher' ? "person-block person-block--teacher" : "person-block"}>  
           <div className="person-block__container">
                <img className="person-block__avatar" src={blockData.gender === 'M' ? avatarBoy : avatarGirl} alt='аватар' />
                <p className="person-block__name">{blockData.name}</p>
                <p className="person-block__phone">{`телефон: ${blockData.phone}`}</p>
                {type === 'teacher' && <p className="person-block__experience">{`опыт работы: ${blockData.experience} год`}</p>}
           </div>
        </div>
    ) 
}

export default PersonBlock;