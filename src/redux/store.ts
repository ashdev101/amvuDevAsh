import { configureStore } from '@reduxjs/toolkit'
import OtpModalReducer from './otpModalSlice'
import VerifyUserReducer from './ResetPasword'
import VerifyUserPLLOGReducer from './PasswordLessLoginSlice'
import DonationModalReducer from './DonationModalSlice'

export const store = configureStore({
  reducer: {
    OtpModal: OtpModalReducer,
    VerifyUser : VerifyUserReducer,
    VerifyUserPLLOG : VerifyUserPLLOGReducer,
    DonationModal : DonationModalReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch