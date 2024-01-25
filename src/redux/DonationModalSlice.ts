import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { decrypt } from '../utils/utils';

type Payload = {

    name: string | null
    phoneNumber: string | null
    email: string | null;
    isSucessful: boolean
    OtpToVerify: string
};

export interface DonationModal {
    name: string | null
    phoneNumber: string | null
    email: string | null;
    isOtpModalOpen: boolean
    isPaymentModalOpen: boolean,
    isSucessful: boolean
    OtpToVerify: string
}

const initialState: DonationModal = {
    name: null,
    phoneNumber: null,
    email: null,
    isOtpModalOpen: false,
    isPaymentModalOpen: false,
    isSucessful: false,
    OtpToVerify: ""
};

export const DonationModalSlice = createSlice({
    name: 'DonationModal',
    initialState,
    reducers: {
        SetOtp: (state, action: PayloadAction<Payload["OtpToVerify"]>) => {
            state.OtpToVerify = action.payload
        },
        SetDonationModalAttributes: (state, action: PayloadAction<Payload>) => {
            console.log("called")
            console.log(action.payload);
            const decodedEmailOtp: any = decrypt(action.payload.OtpToVerify);
            console.log(decodedEmailOtp)
            state.OtpToVerify = decodedEmailOtp as string;
            // console.log(state.OtpToVerify);
            if (action.payload.email && action.payload.phoneNumber && action.payload.name) {
                state.email = action.payload.email;
                state.phoneNumber = action.payload.phoneNumber;
                state.name = action.payload.name;
            }
            state.isOtpModalOpen = true;
            console.log(state.isOtpModalOpen);
        },
        OpenPaymentModal: (state) => {
            state.isOtpModalOpen = false;
            state.isPaymentModalOpen = true
            console.log(state.isPaymentModalOpen);
        },
        OpenSucessful: (state) => {
            state.OtpToVerify = '';
            state.isPaymentModalOpen = false;
        },
    },
});

export const { SetDonationModalAttributes, OpenPaymentModal, OpenSucessful ,SetOtp } = DonationModalSlice.actions;

export default DonationModalSlice.reducer;