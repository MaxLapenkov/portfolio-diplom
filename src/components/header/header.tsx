import React from 'react'

import { schoolLogo } from '../../icons'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../hooks';
import { userData } from '../../reducers/userData';
import { UserDataResponse } from '../../api/types';
import { getInitials, shortenName } from '../../utils/functions';

import './header.scss';
const Header = () => {
    const currentUser = useAppSelector(userData)

    const { name } = currentUser.data as UserDataResponse

    return (
        <section className='header'>
            <div className="header__school-info">
                <img src={schoolLogo} alt="школа" />
                <h2 className="header__school-name">ГБОУ №1</h2>
            </div>
            <ul className="header__routes">
                <li><Link to="/main">Главная</Link></li>
                <li><Link to="/schedule">Расписание</Link></li>
                <li><Link to="/olympiads">Олимпиады</Link></li>
                <li><Link to="/achievements">Достижения</Link></li>
                <li><Link to="/class">Мой класс</Link></li>
            </ul>
            <div className="header__pupil-info-container">
                <button className="header__pupil-button">
                    {getInitials(name)}
                </button>
                <div className="header__pupil-info">
                    <p className="header__pupil-name">{shortenName(name)}</p>
                </div>
            </div>
        </section>
    )
}

export default Header;