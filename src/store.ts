import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import userDataReducer from './reducers/userData'
import pupilPerfomanceReducer from './reducers/perfomance'
import schoolAnnouncementReducer from './reducers/announcement'
import classScheduleReducer from './reducers/schedule'
import pupilOlympiadReducer from './reducers/olympiad'
import pupilAchievementReducer from './reducers/achievement'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userData: userDataReducer,
    perfomance: pupilPerfomanceReducer,
    announcement: schoolAnnouncementReducer,
    schedule: classScheduleReducer,
    olympiad: pupilOlympiadReducer,
    achievement: pupilAchievementReducer
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
