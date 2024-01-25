import { FormEventHandler, useRef, useState } from 'react';
import Input from '../components/register-form/input';
import { LoginButton } from '../components/Button/LoginButton';
import { GoogleButton } from '../components/Button/GoogleButton';
import toast from 'react-hot-toast';
import { RegisterMutation } from '../ApiCalling/mutations';
import { RegisterFormInputTypes } from '../../d.tyes'
import { useDispatch } from 'react-redux';
import { OpenVerifyUserModal } from '../redux/ResetPasword';
import { Link } from 'react-router-dom';


/**
 * This code is a TypeScript-React component that represents a registration form for a healthcare application.
 * It includes input fields for the user's first name, last name, email or phone number, date of birth, password, and confirm password.
 * The form also includes checkboxes for remembering the user and agreeing to the terms and privacy policy.
 * The user can submit the form by clicking on the "Create account" button or sign in with Google using the "Sign-in with Google" button.
 */

function Register(): JSX.Element {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\d{10}$/;
  const mutation = RegisterMutation();
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch()
  /**
   * Handles the form submission event.
   * @param event The form submission event.
   */
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newFormData: RegisterFormInputTypes = {
      firstName: formData.get('firstName') as string,
      LastName: formData.get('LastName') as string,
      identifier: formData.get('identifier') as string,
      dob: formData.get('dob') as string,
      password: formData.get('password') as string,
      conformPassword: formData.get('conformPassword') as string
    };

    if (newFormData.password !== newFormData.conformPassword) {
      return toast.error("Password does not match");
    }

    if (emailRegex.test(newFormData.identifier)) {

      return mutation.mutate({
        firstName: newFormData.firstName,
        LastName: newFormData.LastName,
        email: newFormData.identifier,
        phone: null,
        dob: newFormData.dob,
        password: newFormData.password,
      });
    }
    else if (phoneRegex.test(newFormData.identifier)) {
      return mutation.mutate({
        firstName: newFormData.firstName,
        LastName: newFormData.LastName,
        email: null,
        phone: newFormData.identifier,
        dob: newFormData.dob,
        password: newFormData.password,
      });
    }
    return toast.error("Invalid email or phone number");
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
          Create account
        </span>
        <span>Be a part of Ambuvians Family!!</span>

        <form ref={formRef} onSubmit={handleSubmit} className='w-full'>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5'>
            <Input name='firstName' label={"First Name"} isrequired={true} type={'text'} />
            <Input name='LastName' label={"Last Name"} isrequired={true} type={'text'} />
            <Input name='identifier' label={"Email or phone number"} isrequired={true} type={'text'} />
            <Input name='dob' label={"Date of Birth"} isrequired={true} type={'date'} placeholder='' />
            <Input name='password' label={"Password"} isrequired={true} type={'password'} />
            <Input name='conformPassword' label={"Confirm Password"} isrequired={true} type={'password'} />
          </section>

          <section className='w-full flex flex-col sm:flex-row items-start justify-between mt-3'>
            <div>
              <div className="flex items-center mb-2">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ms-2 text-[12px] sm:text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
              <div className="flex items-center">
                <input id="default-checkbox" required type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ms-2 text-[12px] sm:text-sm font-medium text-gray-900 dark:text-gray-300">
                  I agree to all the <a className='text-blue-500' href="/terms">terms</a> and <a className="text-blue-500" href="/privacy-policy">Privacy Policy</a>
                </label>
              </div>
            </div>
            <div
              className=' cursor-pointer text-blue-500 underline text-[12px] sm:text-sm'
              onClick={() => { formRef.current?.reset(); dispatch(OpenVerifyUserModal()) }}
            >
              Forgot Password?
            </div>
          </section>

          <section className='w-full flex flex-col sm:flex-row items-center justify-between mt-4 gap-3'>
            <LoginButton type='submit' isDisabled={isButtonDisabled} label='Create account' />
            <GoogleButton label='Sign up with Google' action='register' />
          </section>
        </form>

        <span className=' mt-2 w-full text-center'>Already have an account? <Link to="/login" className='text-blue-500'>Login</Link></span>

      </section>
    </main>
  );
}

export default Register;