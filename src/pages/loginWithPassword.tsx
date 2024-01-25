import { FormEventHandler, useRef, useState } from 'react';
import Input from '../components/register-form/input';
import { LoginButton } from '../components/Button/LoginButton';
import { GoogleButton } from '../components/Button/GoogleButton';
import { LoginMutation } from '../ApiCalling/mutations';
import { LoginFormInputTypes } from '../../d.tyes'
import { useDispatch } from 'react-redux';
import { OpenVerifyUserModal } from '../redux/ResetPasword';
import Captcha from '../components/Captcha/Captcha';
import { IoIosRefresh } from 'react-icons/io'
import toast from 'react-hot-toast';
import { OpenVerifyUserPLLOGModal } from '../redux/PasswordLessLoginSlice';
import { Link } from 'react-router-dom';


function Login(): JSX.Element {

  const [CaptchaInput, setCaptchaInput] = useState<string>('')
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\d{10}$/;
  const mutation = LoginMutation();
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch()
  const { element, captcha, setChangeCaptcha } = Captcha()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newFormData: LoginFormInputTypes = {
      identifier: formData.get('identifier') as string,
      password: formData.get('password') as string,
    };

    if (CaptchaInput !== captcha) {
      setChangeCaptcha(prev => !prev)
      return toast.error('Captcha does not match')
    }
    if (emailRegex.test(newFormData.identifier)) {

      return mutation.mutate({
        email: newFormData.identifier,
        phone: null,
        password: newFormData.password,
      });
    }
    else if (phoneRegex.test(newFormData.identifier)) {
      return mutation.mutate({
        email: null,
        phone: newFormData.identifier,
        password: newFormData.password,
      });
    }
  };

  const isButtonDisabled = mutation.isPending
  if (mutation.isSuccess) {
    formRef.current?.reset();
  }
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


        <form ref={formRef} onSubmit={handleSubmit} className='w-full'>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3'>
            <Input name='identifier' label={"Email or phone number"} isrequired={true} type={'text'} />
            <Input name='password' label={"Password"} isrequired={true} type={'password'} />
            <Input name='captcha' label={"Enter Captcha"} isrequired={true} type={'text'} onChange={(e) => setCaptchaInput(e.target.value)} />
            <div className='  flex flex-row items-center justify-center mt-5 gap-8'>
              {
                element
              }
              <div onClick={() => { setChangeCaptcha(prev => !prev) }} className='cursor-pointer text-blue-500 underline text-[12px] sm:text-sm'><IoIosRefresh size={20} /></div>
            </div>
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
            <LoginButton type='submit' isDisabled={isButtonDisabled} label='Login' />
            <GoogleButton label='Login in with Google' action='login' />
          </section>
        </form>
        <p onClick={() => dispatch(OpenVerifyUserPLLOGModal())} className=' cursor-pointer mt-2 w-full text-center'>Login With Otp </p>

        <span className=' mt-2 w-full text-center'>Dont have an account? <Link to="/signup" className='text-blue-500'>Signin</Link></span>

      </section>
    </main>
  );
}

export default Login;