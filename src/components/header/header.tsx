import React, { useEffect, useState } from 'react'

import { schoolLogo } from '../../icons'
import { Link, useHistory } from 'react-router-dom'

import { useAppSelector } from '../../hooks'
import { userData } from '../../reducers/userData'
import { UserDataResponse } from '../../api/types'
import { getInitials, shortenName } from '../../utils/functions'

import './header.scss'
import ModalHeader from './modal'

const Header = () => {
    const currentUser = useAppSelector(userData)
    const history = useHistory()
    const [activeRoute, setActiveRoute] = useState<string>('/main')
    const [isExitModalShown, setExitModalShown] = useState(false)

    useEffect(() => {
        if (history.location.pathname.length > 1) setActiveRoute(history.location.pathname)
    }, [history])

    const getActiveRouteClass = (route: string) => {
        if (route === activeRoute) return "header__route header__route--active"
        return "header__route"
    }

    if(!currentUser.data) return null
    const { name, school, school_class } = currentUser.data as UserDataResponse

    const getPupilClass = () => {
        return `${school_class.parallel}-${school_class.letter} класс`
    }

    const handleCloseExitModal = () => {
        setExitModalShown(false)
    }
    return (
        <header className='header'>
            <div className="header__school-info">
                <img src={schoolLogo} alt="школа" />
                <h2 className="header__school-name">{school.name}</h2>
            </div>
            <ul className="header__routes">
                <li className={getActiveRouteClass('/main')} onClick={() => setActiveRoute('/main')}><Link to="/main">Главная</Link></li>
                <li className={getActiveRouteClass('/schedule')} onClick={() => setActiveRoute('/schedule')}><Link to="/schedule">Расписание</Link></li>
                <li className={getActiveRouteClass('/olympiads')} onClick={() => setActiveRoute('/olympiads')}><Link to="/olympiads">Олимпиады</Link></li>
                <li className={getActiveRouteClass('/achievements')} onClick={() => setActiveRoute('/achievements')}><Link to="/achievements">Достижения</Link></li>
                <li className={getActiveRouteClass('/class')} onClick={() => setActiveRoute('/class')}><Link to="/class">Мой класс</Link></li>
            </ul>
            <div className="header__pupil-info-container">
                <button className="header__pupil-button" onClick={() => setExitModalShown((prevstate) => !prevstate)}>
                    {getInitials(name)}
                </button>
                <div className="header__pupil-info">
                    <p className="header__pupil-name">{shortenName(name)}</p>
                    <p className="header__pupil-class">{getPupilClass()}</p>
                    <ModalHeader isOpen={isExitModalShown} onClose={handleCloseExitModal} />
                </div>
            </div>
        </header>
        ) 
}

export default Header;