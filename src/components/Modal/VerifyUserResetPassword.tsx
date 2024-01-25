import { useCallback, useEffect, useState } from 'react'
import BaseFormModal from '../../components/Modal/baseFormModal'
import Input from '../../components/register-form/input'
import { ResetPasswordMutation, VerifyUserToResetPassword } from '../../ApiCalling/mutations'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { CloseVerifyUserModal } from '../../redux/ResetPasword'
import { RootState } from '../../redux/store'

type Props = {}

export default function VerifyUserAndResetPassword({ }: Props) {
    const [step, setStep] = useState(1);
    const [Otp, setOtp] = useState("");
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const VerifyUserAttributes = useSelector((state: RootState) => state.VerifyUser);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;

    const VerifyUser = VerifyUserToResetPassword();
    const resetPassword = ResetPasswordMutation();

    const VerifyUserFn = useCallback(() => {
        if (emailRegex.test(identifier)) {
            return VerifyUser.mutate({
                email: identifier,
                phone: null,
            });
        } else if (phoneRegex.test(identifier)) {
            return VerifyUser.mutate({
                email: null,
                phone: identifier,
            });
        }
    }, [identifier]);

    const resetPasswordFn = useCallback(() => {
        if (password !== confirmPassword) {
            return toast.error("Password does not match");
        }
        if (Otp.length < 4) {
            return toast.error("Otp is too short ");
        }
        if (emailRegex.test(identifier)) {
            if (Otp !== VerifyUserAttributes.OtpToVerify) {
                return toast.error("Otp is not valid");
            }
            return resetPassword.mutate({
                email: identifier,
                phone: null,
                password: password,
            });
        } else if (phoneRegex.test(identifier)) {
            if (Otp.length < 4 || Otp !== VerifyUserAttributes.OtpToVerify) {
                return toast.error("Otp is not valid");
            }
            return resetPassword.mutate({
                email: null,
                phone: identifier,
                password: password,
            });
        }
    }, [identifier, password, confirmPassword]);

    const changeStep = () => {
        if (step < 2) {
            setStep(step + 1);
        }
    };

    useEffect(() => {
        if (VerifyUser.isSuccess) {
            setStep(2);
        }
    }, [VerifyUser.isSuccess]);

    const currentAttributes = () => {
        let heading;
        let mainContent;

        if (step === 1) {
            heading = "Lets verify";
            mainContent = (
                <>
                    <Input
                        name={""}
                        label={"Email or Phone"}
                        isrequired={true}
                        type={"text"}
                        onChange={(e) => {
                            setIdentifier(e.target.value);
                        }}
                    />
                    <button
                        disabled={identifier.length > 4 ? false : true}
                        onClick={VerifyUserFn}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Send Otp
                    </button>
                </>
            );
        }
        if (step === 2) {
            heading = "";
            mainContent = (
                <>
                    <Input
                        name={""}
                        label={"Enter Otp"}
                        isrequired={true}
                        type={"text"}
                        onChange={(e) => {
                            setOtp(e.target.value);
                        }}
                    />
                    <Input
                        name={""}
                        label={"Password"}
                        isrequired={true}
                        type={"password"}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />

                    <Input
                        name={""}
                        label={"Confirm Password"}
                        isrequired={true}
                        type={"password"}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                    />
                    <button
                        onClick={resetPasswordFn}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Reset password
                    </button>
                    <button
                        disabled={Otp.length < 4 ? true : false || password.length < 6}
                        onClick={VerifyUserFn}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Resend Otp
                    </button>
                </>
            );
        }

        return { mainContent, heading };
    };

    return (
        <BaseFormModal
            mainHeading={"Reset password"}
            subHeading={currentAttributes().heading as string}
            footer={undefined}
            mainContent={currentAttributes().mainContent}
            onClose={() => {
                dispatch(CloseVerifyUserModal());
            }}
            isOpen={VerifyUserAttributes.isOpen}
        />
    );
}
