import React from 'react'
import { SchoolAnnouncementResponse } from '../../api/types';

import './announcementBlock.scss'

interface AnnouncementBlockProps {
    blockData: SchoolAnnouncementResponse
}
const AnnouncementBlock = ({ blockData } : AnnouncementBlockProps) => {

    const { text } = blockData;
    return (
        <div className="announcement-block">
           <p className="announcement-block__text">
                {text}
           </p>
        </div>
    ) 
}

export default AnnouncementBlock;