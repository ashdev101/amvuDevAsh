import { useCallback, useEffect, useState } from 'react'
import BaseFormModal from './baseFormModal'
import Input from '../register-form/input'
import { PasswordLessLoginMutation } from '../../ApiCalling/mutations'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Captcha from '../Captcha/Captcha'
import { IoIosRefresh } from 'react-icons/io'
import { CloseVerifyUserPLLOGModal } from '../../redux/PasswordLessLoginSlice'

type Props = {}

export default function PasswordLessLoginModal({ }: Props) {
    const [step, setStep] = useState(1);
    const [Otp, setOtp] = useState("");
    const [identifier, setIdentifier] = useState("");
    const { element, captcha, setChangeCaptcha } = Captcha()
    const [CaptchaInput, setCaptchaInput] = useState<string>('')
    const dispatch = useDispatch();
    const VerifyUserAttributes = useSelector((state: RootState) => state.VerifyUserPLLOG);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;

    const VerifyUser = PasswordLessLoginMutation();


    const VerifyUserFn = useCallback(() => {

        if (CaptchaInput !== captcha) {
            setChangeCaptcha(prev => !prev)
            return toast.error('Captcha does not match')
        };

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
    }, [identifier, CaptchaInput]);

    const CheckForOtp = useCallback(() => {

        if (Otp.length < 4) {
            return toast.error("Otp is too short ");
        }

        if (Otp !== VerifyUserAttributes.OtpToVerify) {
            return toast.error("Otp is not valid");
        }

        //redirect to dashboard
        toast.success("Otp verified successfully You will be redirected to dashboard");

    }, [Otp]);

    console.log(step)
    useEffect(() => {
        if (VerifyUser.isSuccess) {
            setStep(2);
        }
    }, [VerifyUser.isSuccess]);

    const currentAttributes = () => {
        let heading;
        let mainContent;

        if (step === 1) {
            heading = "Password Less Login";
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
                    <Input
                        name={""}
                        label={"Captcha"}
                        isrequired={true}
                        type={"text"}
                        onChange={(e) => {
                            setCaptchaInput(e.target.value);
                        }}
                    />
                    <div className='  flex flex-row items-center justify-center mt-5 gap-8'>
                        {
                            element
                        }
                        <div onClick={() => { setChangeCaptcha(prev => !prev) }} className='cursor-pointer text-blue-500 underline text-[12px] sm:text-sm'><IoIosRefresh size={20} /></div>
                    </div>
                    <span className=' text-sm font-bold text-rose-500'>Cant see Captcha try refreshing it !</span>
                    <button
                        disabled={identifier.length > 4 ? false : true || CaptchaInput.length < 4 ? true : false}
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

                    <button
                        onClick={CheckForOtp}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Secure Login
                    </button>

                    <button
                        // disabled={Otp.length < 4 ? true : false}
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
            mainHeading={"Password Less Login"}
            subHeading={currentAttributes().heading as string}
            footer={undefined}
            mainContent={currentAttributes().mainContent}
            onClose={() => {
                dispatch(CloseVerifyUserPLLOGModal());
            }}
            isOpen={VerifyUserAttributes.isOpen}
        // isOpen={true}
        />
    );
}
