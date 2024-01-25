

import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import toast from 'react-hot-toast';
import { CloseOtpModal } from '../../redux/otpModalSlice';
import { RefreshEmailTokenMutation, RefreshPhoneTokenMutation, VerifyEmail, VerifyPhone } from '../../ApiCalling/mutations';
import Input from '../register-form/input';
import BaseFormModal from './baseFormModal';

type Props = {}

export default function OtpVerifyModal({ }: Props) {
    const { isOpen, emailAddress, OtpToVerify, phoneNumber } = useSelector((state: RootState) => state.OtpModal)
    // console.log(isOpen)
    const ResendEmailMutation = RefreshEmailTokenMutation();
    const ResendPhoneMutation = RefreshPhoneTokenMutation();
    const VerifyPhoneMutation = VerifyPhone();
    const VerifyEmailMutation = VerifyEmail();

    const [NumberOfOtpGen, SetNumberOfOtpGen] = useState(1)
    const [input, setInput] = useState("");
    const isDisabled = input.length < 4;

    const dispatch = useDispatch();
    const onSubmit = useCallback(() => {
        if (input.length < 4) return toast.error("otp too short ")
        if (input !== OtpToVerify) return toast.error("wrong otp entered kindly try again")
        //@ts-ignore
        if (input === OtpToVerify) {
            if (emailAddress) {
                VerifyEmailMutation.mutate(emailAddress)
            } else if (phoneNumber) {
                VerifyPhoneMutation.mutate(phoneNumber)
            }
            //REDIRECT to dashboard
            setInput("")

            //by giving someSort of custom message
        }

        // eslint-disable-line react-hooks/exhaustive-deps
    }, [input, OtpToVerify]);

    const onRefreshSubmit = () => {
        if (NumberOfOtpGen < 3) {
            setInput("")
            //someconstrains to stop the otp at certain interval and number 
            if (emailAddress) {
                ResendEmailMutation.mutate(emailAddress)
            } else if (phoneNumber) {
                ResendPhoneMutation.mutate(phoneNumber)
            }
            SetNumberOfOtpGen(NumberOfOtpGen + 1)
            toast.success("otp Refreshed successfully")
        } else {
            toast.error("you have reached the max otp kindly try again later ")
        }
    }

    return (

        <BaseFormModal
            mainHeading={'OTP Verification'}
            subHeading={
                <div className="mt-4 flex flex-col">
                    <span>Enter the OTP you received at</span>
                    <span className="font-bold">{emailAddress}</span>
                </div>
            }
            footer={undefined}
            mainContent={
                <>
                    <Input
                        value={input}
                        name={''}
                        label={''}
                        isrequired={true}
                        type={'text'}
                        onChange={(e) => { setInput(e.target.value) }}
                    />
                    <div className="mt-5 flex justify-center gap-5 text-center">
                        <button

                            onClick={onRefreshSubmit}
                            className={` p-2 border-none bg-blue-900 text-white px-3 py-2 rounded-md`}>Resend Otp
                        </button>

                        <button
                            disabled={isDisabled}
                            onClick={onSubmit}
                            className={` p-2 border-none ${isDisabled ? "bg-blue-500" : "bg-slate-700"} text-white px-3 py-2 rounded-md`}>Submit
                        </button>
                    </div>
                </>
            }
            onClose={() => dispatch(CloseOtpModal())}
            isOpen={isOpen}
        />
    );
}


