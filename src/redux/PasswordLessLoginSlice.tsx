import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { decrypt } from '../utils/utils';

type Payload = {

    OtpToVerify: string;
    emailAddress?: string | null;
    phoneNumber?: string | null;
};

export interface VerifyUserPLLOG {
    isOpen: boolean;
    OtpToVerify: string;
    emailAddress: string | null;
    phoneNumber: string | null;
}

const initialState: VerifyUserPLLOG = {
    isOpen: false,
    OtpToVerify: '',
    emailAddress: null,
    phoneNumber: null,
};

export const VerifyUserPLLOGSlice = createSlice({
    name: 'VerifyUserPLLOG',
    initialState,
    reducers: {
        SetVerifyUserPLLOGAttributes: (state, action: PayloadAction<Payload>) => {
            console.log(action.payload);
            const decodedEmailOtp: any = decrypt(action.payload.OtpToVerify);
            console.log(decodedEmailOtp)
            state.OtpToVerify = decodedEmailOtp as string;
            // console.log(state.OtpToVerify);
            if (action.payload.emailAddress) {

                state.emailAddress = action.payload.emailAddress;
            }
            if (action.payload.phoneNumber) {
                state.phoneNumber = action.payload.phoneNumber;
            }
        },
        OpenVerifyUserPLLOGModal: (state) => {
            state.isOpen = true;
            console.log(state.isOpen);
        },
        CloseVerifyUserPLLOGModal: (state) => {
            state.OtpToVerify = '';
            state.isOpen = false;
        },
    },
});

export const { SetVerifyUserPLLOGAttributes, OpenVerifyUserPLLOGModal, CloseVerifyUserPLLOGModal } = VerifyUserPLLOGSlice.actions;

export default VerifyUserPLLOGSlice.reducer;