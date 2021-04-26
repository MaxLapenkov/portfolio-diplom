import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { UserDataResponse } from '../../api/types';

import { useAppDispatch, useAppSelector, useLocalStorage } from '../../hooks';
import { getUserDataAsync, setUserData,  userData } from '../../reducer/userData';
import { Auth } from '../../components';

import './authPage.scss';


const AuthPage = () => {
    const [localUserData, setLocalUserData] = useLocalStorage<UserDataResponse | null>('userData', null);
    const currentUser = useAppSelector(userData);
    const dispatch = useAppDispatch();
    const history = useHistory();

    useEffect(() => {
        if (currentUser.data) {
            setLocalUserData(currentUser.data)
            history.push('/main')
        }
    }, [currentUser, setLocalUserData])

    useEffect(() => {
        if (localUserData && !currentUser.data) dispatch(setUserData(localUserData))
    }, [localUserData, currentUser.data])

    const loginUser = (login: string, password: string) => {
        dispatch(getUserDataAsync({login, password}))
    }

    return (
        <div className="auth-page">
            <Auth onLoginUser={loginUser}/>
        </div>
    )
}

export default AuthPage