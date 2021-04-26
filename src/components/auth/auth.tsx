import React, { ChangeEvent, useState } from 'react'

import './auth.scss';

interface IAuth {
    onLoginUser: (login: string, password: string) => void
}

const Auth = ({onLoginUser}: IAuth) => {
    const [authErrors, setAuthErrors] = useState({
        loginError: false,
        passwordError: false
    })
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')


    const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget
        if (value.length <= 11) {
            setLoginValue(value)
            setAuthErrors({
                ...authErrors,
                loginError: false
            })
        } else {
            setAuthErrors({
                ...authErrors,
                loginError: true
            })
        }       
    }
    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget
        if (value.length <= 11) {
            setPasswordValue(value)
            setAuthErrors({
                ...authErrors,
                passwordError: false
            })
        } else {
            setAuthErrors({
                ...authErrors,
                passwordError: true
            })
        }       
    }

    const handleLoginBlur = () => {
        if (loginValue.length === 0) {
            setAuthErrors({
                ...authErrors,
                loginError: true
            })
        }
    }

    const handlePasswordBlur = () => {
        if (passwordValue.length === 0) {
            setAuthErrors({
                ...authErrors,
                passwordError: true
            })
        }
    }
    
    const handleLoginUser = () => {
        onLoginUser(loginValue, passwordValue)
    }
    return (
        <section className="auth">
            <h1 className="auth__title">Вход в портфолио</h1>
            <div className="auth__content">
                <label className={!authErrors.loginError ? "auth__item" : "auth__item auth__item--error"}>
                    Логин
                    <input value={loginValue} className="auth__input" type="text" onChange={handleChangeLogin} onBlur={handleLoginBlur} />
                </label>
                <label className={!authErrors.passwordError ? "auth__item" : "auth__item auth__item--error"}>
                    Пароль
                    <input value={passwordValue} className="auth__input" type="password" onChange={handleChangePassword} onBlur={handlePasswordBlur}/>
                </label>
                <button className="auth__button" onClick={handleLoginUser}>Войти</button>
            </div>
        </section>
    )
}

export default Auth;
