import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { decrypt } from '../utils/utils';


type Payload = {

    OtpToVerify: string;
    emailAddress?: string | null;
    phoneNumber?: string | null;
};

export interface OtpModalState {
    isOpen: boolean;
    OtpToVerify: string;
    emailAddress: string | null;
    phoneNumber: string | null;
}

const initialState: OtpModalState = {
    isOpen: false,
    OtpToVerify: '',
    emailAddress: null,
    phoneNumber: null,
};

export const OtpModalSlice = createSlice({
    name: 'OtpModal',
    initialState,
    reducers: {
        OpenOtpModal: (state, action: PayloadAction<Payload>) => {
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

            state.isOpen = true;
            console.log(state.isOpen);
        },
        CloseOtpModal: (state) => {
            state.OtpToVerify = '';
            state.isOpen = false;
        },
    },
});

export const { OpenOtpModal, CloseOtpModal } = OtpModalSlice.actions;

export default OtpModalSlice.reducer;