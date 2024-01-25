
import { FormEventHandler, useCallback, useRef, useState } from 'react';
import Input from '../components/register-form/input';
import { LoginButton } from '../components/Button/LoginButton';
import { GoogleButton } from '../components/Button/GoogleButton';
import { LoginMutation, PasswordLessLoginMutation } from '../ApiCalling/mutations';
import { LoginFormInputTypes } from '../../d.tyes'
import { useDispatch, useSelector } from 'react-redux';
import { OpenVerifyUserModal } from '../redux/ResetPasword';
import Captcha from '../components/Captcha/Captcha';
import { IoIosRefresh } from 'react-icons/io'
import toast from 'react-hot-toast';
import { OpenVerifyUserPLLOGModal } from '../redux/PasswordLessLoginSlice';
import { RootState } from '../redux/store';


function Login(): JSX.Element {
    const [step, setStep] = useState(1);
    const [Otp, setOtp] = useState("");
    const [identifier, setIdentifier] = useState("");
    const { element, captcha, setChangeCaptcha } = Captcha()
    const [CaptchaInput, setCaptchaInput] = useState<string>('')
    const dispatch = useDispatch();
    const VerifyUserAttributes = useSelector((state: RootState) => state.VerifyUserPLLOG);
    const [showOtp, setShowOtp] = useState(false)

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;

    const VerifyUser = PasswordLessLoginMutation();

    console.log(VerifyUserAttributes.OtpToVerify)
    const VerifyUserFn = useCallback(() => {

        if (CaptchaInput === '') {
            setChangeCaptcha(prev => !prev)
            return toast.error('Captcha is required')
        }
        if (CaptchaInput !== captcha) {
            setChangeCaptcha(prev => !prev)
            return toast.error('Captcha does not match')
        };

        if (emailRegex.test(identifier)) {
            setShowOtp(true)
            return VerifyUser.mutate({
                email: identifier,
                phone: null,
            });
        } else if (phoneRegex.test(identifier)) {
            setShowOtp(true)
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

        setOtp('');
        setCaptchaInput('');
        setIdentifier('');
        setShowOtp(false);

        //redirect to dashboard
        toast.success("Otp verified successfully You will be redirected to dashboard");

    }, [Otp]);

    return (
        <main className='h-screen w-full flex flex-row justify-center'>
            <section className='hidden lg:block h-full w-[30%] lg:w-[40%] relative'>
                <img src='/login.png' className="h-full w-full object-cover inset-0 absolute left-0 bottom-0 object-left-bottom" alt="Login" />
                <div className='absolute flex flex-col justify-center gap-2 text-4xl left-5 bottom-12'>
                    <span className="font-black text-slate-200">Ambuvians</span>{" "}
                    <span className="font-black text-zinc-400">Healthcare</span>
                    <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-4'>
                        <img src="/GooglePlay.png" alt="Google Play" className='cursor-pointer w-[120px] h-[40px] object-contain' />
                        <img src="/AppStore.png" alt="App Store" className='cursor-pointer w-[120px] h-[40px] object-contain' />
                    </div>
                </div>
            </section>

            <section className='w-[90%] md:w-[80%] lg:w-[60%] h-full flex flex-col px-6 gap-1'>
                <div className='w-[150px] h-[50px] md:mt-10'>
                    <img src="/logoamb.png" alt="Logo" className='w-full h-full' />
                </div>
                <header className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                    <span className='text-black'>Ambuvians</span>{" "}
                    <span className='text-[#E85A4F]'>Healthcare</span>
                </header>
                <span className='text-xl sm:text-2xl md:text-3xl font-bold'>
                    Login
                </span>


                <form className='w-full'>
                    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3'>
                        <Input name='identifier' value={identifier} label={"Email or phone number"} isrequired={true} type={'text'} onChange={(e) => setIdentifier(e.target.value)} />
                        {showOtp
                            ? <Input name='otp' value={Otp} label={"Otp"} isrequired={true} type={'password'} onChange={(e) => setOtp(e.target.value)} />
                            :
                            <>
                                <Input name='captcha' value={CaptchaInput} label={"Enter Captcha"} isrequired={true} type={'text'} onChange={(e) => setCaptchaInput(e.target.value)} />
                                <div className='  flex flex-row items-center justify-center mt-5 gap-8'>
                                    {
                                        element
                                    }
                                    <div onClick={() => { setChangeCaptcha(prev => !prev) }} className='cursor-pointer text-blue-500 underline text-[12px] sm:text-sm'><IoIosRefresh size={20} /></div>
                                </div>

                            </>
                        }

                    </section>

                    <section className='w-full flex flex-col sm:flex-row items-start justify-between mt-3'>
                        <div>
                            <div className="flex items-center mb-2">
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                <label className="ms-2 text-[12px] sm:text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>

                        </div>
                        <div onClick={() => { dispatch(OpenVerifyUserModal()) }}>
                            <span className='text-blue-500 underline text-[12px] sm:text-sm'>Forgot Password?</span>
                        </div>
                    </section>

                    <section className='w-full flex flex-col sm:flex-row items-center justify-between mt-4 gap-3'>
                        <LoginButton
                            onClick={() => { showOtp ? CheckForOtp() : VerifyUserFn() }}
                            type='button' label={showOtp ? 'Log in' : 'Send Otp'} />
                        <GoogleButton label='Login in with Google' action='login' />
                    </section>
                </form>
                <p onClick={() => dispatch(OpenVerifyUserPLLOGModal())} className=' cursor-pointer mt-2 w-full text-center'>Login With Otp </p>

                <span className=' mt-2 w-full text-center'>Dont have an account? <a href="/login" className='text-blue-500'>Signin</a></span>

            </section>
        </main>
    );
}

export default Login;