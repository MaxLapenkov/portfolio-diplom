import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAppDispatch } from '../../hooks'
import { clearUserData } from '../../reducers/userData'

import './header.scss'

interface IModalHeaderProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalHeader = ({isOpen, onClose}: IModalHeaderProps) => {
    const history = useHistory()
    const dispatch = useAppDispatch();

    const handleExitPotfolio = () => {
        localStorage.clear()
        dispatch(clearUserData())
        history.replace('/')
    }

    return (
        <div className={isOpen ? 'modal-header modal-header--open' : 'modal-header'}>
            <button className="modal-header__close" onClick={onClose}/>
            <button className="modal-header__button" onClick={handleExitPotfolio}>Выйти</button>
        </div>
    ) 
}

export default ModalHeader;