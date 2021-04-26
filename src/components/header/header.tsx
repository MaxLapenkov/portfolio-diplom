import React from 'react'

import { schoolLogo } from '../../icons'
import { Link } from 'react-router-dom'

const Header = () => {
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
        </section>
    )
}

export default Header;