import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector, useLocalStorage } from ".";
import { UserDataResponse } from "../api/types";
import { setUserData, userData } from "../reducers/userData";

export function useCheckAuth() {
    const [localUserData, setLocalUserData] = useLocalStorage<UserDataResponse | null>('userData', null);
    const currentUser = useAppSelector(userData)
    const dispatch = useAppDispatch();
    const history = useHistory()

    useEffect(() => {
        if (!currentUser.data && !localUserData) {
            history.replace('/')
        } else if (localUserData && !currentUser.data) {
            dispatch(setUserData(localUserData))
        }
    }, [currentUser.data, localUserData, history])
  }
