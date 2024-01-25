import { FormEventHandler, useRef, useState } from 'react';
import Input from '../components/register-form/input';
import { LoginButton } from '../components/Button/LoginButton';
import toast from 'react-hot-toast';
import { RegisterMutation, SurveyMutation } from '../ApiCalling/mutations';
import { DonationFormInputTypes } from '../../d.tyes'
import { useDispatch } from 'react-redux';
import Captcha from '../components/Captcha/Captcha';
import { IoIosRefresh } from 'react-icons/io';
import TextArea from '../components/Common/TextArea';
import BaseModalForSurvey from '../components/Modal/SurveyForm/BaseModal';


function Survey(): JSX.Element {
    const [formValues, setFormValues] = useState({
        firstName: "",
        LastName: "",
        email: "",
        phone: "",
        "BloodGroup": "",
        "ChronicMedicalConditions": "",
        "Recentdisease": "",
        "TakingAnyMedications": "",
        "MembersInYourFamily": "",
        "WearingGlasses": "",
        "OlderMemberInTheFamily60": "",
        "YogaOrWorkoutDaily": ""
    })

    console.log(formValues)
    const [step, setStep] = useState(0)
    const [CaptchaInput, setCaptchaInput] = useState<string>('')
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;
    const mutation = RegisterMutation();
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch()

    const { element, captcha, setChangeCaptcha } = Captcha()
    const mutationSurvey = SurveyMutation()

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newFormData: DonationFormInputTypes = {
            firstName: formData.get('firstName') as string,
            LastName: formData.get('LastName') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
        };

        if (CaptchaInput !== captcha) {
            setChangeCaptcha(prev => !prev)
            return toast.error('Captcha does not match')
        }
        if (!emailRegex.test(newFormData.email)) {
            return toast.error('Invalid email');
        }
        if (!phoneRegex.test(newFormData.phone)) {
            console.log(newFormData.phone)
            return toast.error('Invalid phone number');
        }

        setFormValues(prev => {
            return {
                ...prev,
                ...newFormData
            }
        })
        //make mutation or open Multistep form
        setStep(1)
    }


    const handleSurveyFormSubmit = () => {
        for (const [key, value] of Object.entries(formValues)) {
            if (value === '') {
                toast.error('Please fill all the fields')
                return
            }
        }
        console.log(formValues)
        mutationSurvey.mutate(formValues)
    }

    const CurrentAttributes = () => {
        let question: string = ""
        let instruction: string = ""
        let body: React.ReactNode
        let footerButtons: React.ReactNode


        if (step === 1) {
            question = "Blood Group"
            instruction = `* if you don't know write "NA"`;
            body =
                <>
                    <TextArea value={formValues.BloodGroup} onChange={(e) => setFormValues(prev => ({ ...prev, BloodGroup: e.target.value }))} name={'test'} rows={2} />
                </>
            footerButtons =
                <>

                    <button onClick={() => setStep(prev => prev + 1)} className=' px-3 py-1 min-w-max bg-[#DB0F27] rounded-2xl text-white'>
                        Next
                    </button>
                </>
        }

        if (step === 2) {
            question = "Do you have nay chronic medical conditions? (eg diabetes , hypertension , etc)"

            body =
                <div className=' w-full flex flex-col gap-2 items-center'>
                    <button
                        value={"Yes"}
                        onClick={e => setFormValues(prev => ({ ...prev, ChronicMedicalConditions: "Yes" }))}
                        className={`w-[95%] sm:w-[350px] py-2 ${formValues.ChronicMedicalConditions === "Yes" ? "bg-[#DB0F27]" : "bg-[#2D353C1A]"} my-2`}>
                        Yes
                    </button>
                    <button value={"No"}
                        onClick={e => setFormValues(prev => ({ ...prev, ChronicMedicalConditions: "No" }))}
                        className={`w-[95%] sm:w-[350px] py-2 ${formValues.ChronicMedicalConditions === "No" ? "bg-[#DB0F27]" : "bg-[#2D353C1A]"} my-2`}>

                        No
                    </button>
                    <button value={"Maybe i dont know"}
                        onClick={e => setFormValues(prev => ({ ...prev, ChronicMedicalConditions: "Maybe i dont know" }))}
                        className={`w-[95%] sm:w-[350px] py-2 ${formValues.ChronicMedicalConditions === "Maybe i dont know" ? "bg-[#DB0F27]" : "bg-[#2D353C1A]"} my-2`}>
                        Maybe i dont know
                    </button>
                </div>
            footerButtons =
                <>
                    <button onClick={() => setStep(prev => prev - 1)} className=' px-3 py-1 min-w-max'>
                        Previous
                    </button>
                    <button onClick={() => setStep(prev => prev + 1)} className=' px-3 py-1 min-w-max bg-[#DB0F27] rounded-2xl text-white'>
                        Next
                    </button>
                </>
        }
        if (step === 3) {
            question = "Recent disease you suffered last time"
            instruction = "if yes , please specify"
            body =
                <TextArea value={formValues.Recentdisease} onChange={(e) => setFormValues(prev => ({ ...prev, Recentdisease: e.target.value }))} name={'test'} rows={8} />

            footerButtons =
                <>
                    <button onClick={() => setStep(prev => prev - 1)} className=' px-3 py-1 min-w-max'>
                        Previous
                    </button>
                    <button onClick={() => setStep(prev => prev + 1)} className=' px-3 py-1 min-w-max bg-[#DB0F27] rounded-2xl text-white'>
                        Next
                    </button>
                </>
        }

        if (step === 4) {
            question = "Are you currently taking any medications? "

            body =
                <div className=' w-full flex flex-col gap-2 items-center'>
                    <button
                        onClick={e => setFormValues(prev => ({ ...prev, TakingAnyMedications: "Yes" }))}
                        className={`w-[95%] sm:w-[350px] py-2 ${formValues.TakingAnyMedications === "Yes" ? "bg-[#DB0F27]" : "bg-[#2D353C1A]"} my-2`}>
                        Yes
                    </button>
                    <button
                        onClick={e => setFormValues(prev => ({ ...prev, TakingAnyMedications: "No" }))}
                        className={`w-[95%] sm:w-[350px] py-2 ${formValues.TakingAnyMedications === "No" ? "bg-[#DB0F27]" : "bg-[#2D353C1A]"} my-2`}>
                        No
                    </button>
                    <button
                        onClick={e => setFormValues(prev => ({ ...prev, TakingAnyMedications: "Sometimes when required" }))}
                        className={`w-[95%] sm:w-[350px] py-2 ${formValues.TakingAnyMedications === "Sometimes when required" ? "bg-[#DB0F27]" : "bg-[#2D353C1A]"} my-2`}>
                        Sometimes when required
                    </button>
                </div>

            footerButtons =
                <>
                    <button onClick={() => setStep(prev => prev - 1)} className=' px-3 py-1 min-w-max'>
                        Previous
                    </button>
                    <button onClick={() => setStep(prev => prev + 1)} className=' px-3 py-1 min-w-max bg-[#DB0F27] rounded-2xl text-white'>
                        Next
                    </button>
                </>
        }

        if (step === 5) {
            question = "How many members in your family ?"


            body =
                <TextArea value={formValues.MembersInYourFamily} onChange={(e) => setFormValues(prev => ({ ...prev, MembersInYourFamily: e.target.value }))} name={'test'} rows={2} />

            footerButtons =
                <>
                    <button onClick={() => setStep(prev => prev - 1)} className=' px-3 py-1 min-w-max'>
                        Previous
                    </button>
                    <button onClick={() => setStep(prev => prev + 1)} className=' px-3 py-1 min-w-max bg-[#DB0F27] rounded-2xl text-white'>
                        Next
                    </button>
                </>
        }


        if (step === 6) {
            question = "Are you wearing glasses ?"


            body =
                <div className=' w-full flex flex-col gap-2 items-center'>
                    <button
                        onClick={e => setFormValues(prev => ({ ...prev, WearingGlasses: "Yes" }))}
                        className={`w-[95%] sm:w-[350px] py-2 ${formValues.WearingGlasses === "Yes" ? "bg-[#DB0F27]" : "bg-[#2D353C1A]"} my-2`}>

                        Yes
                    </button>
                    <button
                        onClick={e => setFormValues(prev => ({ ...prev, WearingGlasses: "No" }))}
                        className={`w-[95%] sm:w-[350px] py-2 ${formValues.WearingGlasses === "No" ? "bg-[#DB0F27]" : "bg-[#2D353C1A]"} my-2`}>

                        No
                    </button>
                </div>

            footerButtons =
                <>
                    <button onClick={() => setStep(prev => prev - 1)} className=' px-3 py-1 min-w-max'>
                        Previous
                    </button>
                    <button onClick={() => setStep(prev => prev + 1)} className=' px-3 py-1 min-w-max bg-[#DB0F27] rounded-2xl text-white'>
                        Next
                    </button>
                </>
        }

        if (step === 7) {
            question = `Any older member in the family, older than "60"`


            body =
                <div className=' w-full flex flex-col gap-2 items-center'>
                    <button
                        onClick={e => setFormValues(prev => ({ ...prev, OlderMemberInTheFamily60: "Yes" }))}
                        className={`w-[95%] sm:w-[350px] py-2 ${formValues.OlderMemberInTheFamily60 === "Yes" ? "bg-[#DB0F27]" : "bg-[#2D353C1A]"} my-2`}>
                        Yes
                    </button>
                    <button
                        onClick={e => setFormValues(prev => ({ ...prev, OlderMemberInTheFamily60: "No" }))}
                        className={`w-[95%] sm:w-[350px] py-2 ${formValues.OlderMemberInTheFamily60 === "No" ? "bg-[#DB0F27]" : "bg-[#2D353C1A]"} my-2`}>
                        No
                    </button>
                </div>

            footerButtons =
                <>
                    <button onClick={() => setStep(prev => prev - 1)} className=' px-3 py-1 min-w-max'>
                        Previous
                    </button>
                    <button onClick={() => setStep(prev => prev + 1)} className=' px-3 py-1 min-w-max bg-[#DB0F27] rounded-2xl text-white'>
                        Next
                    </button>
                </>
        }

        if (step === 8) {
            question = `Are you doing Yoga or Workout daily ?`

            body =
                <div className=' w-full flex flex-col gap-2 items-center'>
                    <button
                        onClick={e => setFormValues(prev => ({ ...prev, YogaOrWorkoutDaily: "Yes" }))}
                        className={`w-[95%] sm:w-[350px] py-2 ${formValues.YogaOrWorkoutDaily === "Yes" ? "bg-[#DB0F27]" : "bg-[#2D353C1A]"} my-2`}>
                        Yes
                    </button>
                    <button
                        onClick={e => setFormValues(prev => ({ ...prev, YogaOrWorkoutDaily: "No" }))}
                        className={`w-[95%] sm:w-[350px] py-2 ${formValues.YogaOrWorkoutDaily === "No" ? "bg-[#DB0F27]" : "bg-[#2D353C1A]"} my-2`}>
                        No
                    </button>
                </div>

            footerButtons =
                <>
                    <button onClick={() => setStep(prev => prev - 1)} className=' px-3 py-1 min-w-max'>
                        Previous
                    </button>
                    <button onClick={handleSurveyFormSubmit} className=' px-3 py-1 min-w-max bg-[#DB0F27] rounded-2xl text-white'>
                        Submit
                    </button>
                </>
        }




        return { question, instruction, body, footerButtons }

    }



    const isButtonDisabled = mutation.isPending
    if (mutation.isSuccess) {
        formRef.current?.reset();
    }

    return (
        <>
            {step === 0 ?
                (
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
                                Survey Form
                            </span>
                            <span>Inspiring healthier communities</span>

                            <form ref={formRef} onSubmit={handleSubmit} className='w-full'>
                                <section className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5'>
                                    <Input name='firstName' label={"First Name"} isrequired={true} type={'text'} />
                                    <Input name='LastName' label={"Last Name"} isrequired={true} type={'text'} />
                                    <Input name='email' label={"Email"} isrequired={true} type={'text'} />
                                    <Input name='phone' label={"Phone Number"} isrequired={true} type={'text'} />
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
                                        <div className="flex items-center">
                                            <input id="default-checkbox" required type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                            <label className="ms-2 text-[12px] sm:text-sm font-medium text-gray-900 dark:text-gray-300">
                                                I agree to all the <a className='text-blue-500' href="/terms">terms</a> and <a className="text-blue-500" href="/privacy-policy">Privacy Policy</a>
                                            </label>
                                        </div>
                                    </div>
                                </section>

                                <section className='w-full flex flex-col sm:flex-row items-center justify-center mt-4 gap-3'>
                                    <LoginButton
                                        type='submit'
                                        isDisabled={isButtonDisabled}
                                        label='Fill Survey' />
                                </section>
                            </form>


                        </section>
                    </main>
                )
                : <BaseModalForSurvey
                    bgImageSrc={'/login.png'}
                    currentStep={step}
                    onClose={() => { setStep(0) }}
                    question={CurrentAttributes().question}
                    instruction={CurrentAttributes().instruction}
                    body={CurrentAttributes().body}
                    footerButton={CurrentAttributes().footerButtons}
                />
            }

        </>
    );
}

export default Survey;