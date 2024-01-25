import { useMutation } from '@tanstack/react-query'
import { axiosInstance } from "../clients/axiosClient";
import toast from "react-hot-toast";
import { ApplicationForInputTypes, DonationFormInputTypes, GoogleAuthInputType, GoogleAuthResponseType, LoginFormTypes, LoginResponse, MakePaymentInput, PasswordLessLoginFormTypes, PasswordLessLoginResponse, RegisterFormTypes, ResetPasswordType, SurveyFormInputTypes, UserProfileResponse, VerifyUserToResetPasswordType, businessContactForm, generalContactForm } from '../../d.tyes';
import { useDispatch } from 'react-redux'
import { CloseOtpModal, OpenOtpModal } from '../redux/otpModalSlice';
import { CloseVerifyUserModal, OpenVerifyUserModal, SetVerifyUserAttributes } from '../redux/ResetPasword';
import { SetVerifyUserPLLOGAttributes } from '../redux/PasswordLessLoginSlice';
import { SendEmail } from '../clients/Email';
import { SetDonationModalAttributes, SetOtp } from '../redux/DonationModalSlice';

export const RegisterMutation = () => {
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: (data: RegisterFormTypes) => {
            return axiosInstance.post('/register', { ...data }) as Promise<UserProfileResponse>
        },
        onSuccess: (data) => {
            console.log(data)
            dispatch(OpenOtpModal({ emailAddress: data.data.email, phoneNumber: data.data.phone, OtpToVerify: data.data.otp }))

            toast.success(data.data.message)


        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const RefreshEmailTokenMutation = () => {

    const dispatch = useDispatch()

    const mutation = useMutation({

        mutationFn: (email: string) => {
            return axiosInstance.post('/resendEmailOtp', { email }) as Promise<{ data: { otp: string } }>
        },
        onSuccess: (data) => {
            console.log(data)
            dispatch(OpenOtpModal({ OtpToVerify: data.data.otp }))


        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const RefreshPhoneTokenMutation = () => {
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: (phone: string) => {
            return axiosInstance.post('/resendPhoneOtp', { phone }) as Promise<{ data: { otp: string } }>
        },
        onSuccess: (data: any) => {
            console.log(data)

            dispatch(OpenOtpModal({ OtpToVerify: data.data.otp }))
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const VerifyEmail = () => {
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: (email: string) => {
            return axiosInstance.post('/verifyEmail', { email }) as Promise<{ data: { message: string } }>
        },
        onSuccess: (data) => {
            console.log(data)

            toast.success(data.data.message)
            dispatch(CloseOtpModal())
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const VerifyPhone = () => {
    const dispatch = useDispatch()

    const mutation = useMutation({
        mutationFn: (phone: string) => {
            return axiosInstance.post('/verifyPhone', { phone }) as Promise<{ data: { message: string } }>
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success(data.data.message)
            dispatch(CloseOtpModal())

        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })
    return mutation
}

export const LoginMutation = () => {
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: (data: LoginFormTypes) => {
            return axiosInstance.post('/login', { ...data }) as Promise<LoginResponse>
        },
        onSuccess: (data) => {
            console.log(data)
            //this feature is disabled as of now as we are not sending otp during  password login
            // dispatch(OpenOtpModal({ emailAddress: data.data.email, phoneNumber: data.data.phone, OtpToVerify: data.data.otp }))
            toast.success(data.data.message)

            //redirect to dashboard
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const VerifyUserToResetPassword = () => {
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: (data: VerifyUserToResetPasswordType) => {
            return axiosInstance.post('/verifyuser', data) as Promise<LoginResponse>
        },
        onSuccess: (data) => {
            console.log(data)
            dispatch(SetVerifyUserAttributes({ emailAddress: data.data.email, phoneNumber: data.data.phone, OtpToVerify: data.data.otp }))
            toast.success(data.data.message)
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const ResetPasswordMutation = () => {
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: (data: ResetPasswordType) => {
            return axiosInstance.post('/resetpassword', data) as Promise<{ data: { message: string } }>
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success(data.data.message)
            dispatch(CloseVerifyUserModal())
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

//pwdleslog
export const PasswordLessLoginMutation = () => {
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: (data: PasswordLessLoginFormTypes) => {
            return axiosInstance.post('/pwdleslog', { ...data }) as Promise<PasswordLessLoginResponse>
        },
        onSuccess: (data) => {
            console.log(data)
            //fire the modal to verify otp with the require data
            dispatch(SetVerifyUserPLLOGAttributes({ emailAddress: data.data.email, phoneNumber: data.data.phone, OtpToVerify: data.data.otp }))
            toast.success(data.data.message)

            //redirect to dashboard
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const GoogleAuthMutation = () => {

    const mutation = useMutation({
        mutationFn: ({ token, action }: GoogleAuthInputType) => {

            return axiosInstance.post(`${action === "register" ? 'verify/register' : 'verify/login'}`, { token: token.toString() }) as Promise<GoogleAuthResponseType>
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success(data.data.message)
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const ApplicationMutation = () => {

    const mutation = useMutation({
        mutationFn: (data: ApplicationForInputTypes) => {
            return axiosInstance.post('/application', data) as Promise<{ data: { message: string, email: string, name: string } }>
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success(data.data.message)

            // const emailHtml = render(WelcomeEmail({ name: data.data.email }));
            // console.log(emailHtml)

            SendEmail({ from: "", to: data.data.email, subject: "Registration Successful", text: "Registration Successful", name: data.data.name });
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const GeneralContactMutation = () => {

    const mutation = useMutation({
        mutationFn: (data: generalContactForm) => {
            return axiosInstance.post('/contact/general', data) as Promise<{ data: { message: string, identifier: string } }>
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success(data.data.message)
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const BusinessContactMutation = () => {

    const mutation = useMutation({
        mutationFn: (data: businessContactForm) => {
            return axiosInstance.post('/contact/business', data) as Promise<{ data: { message: string, email: string } }>
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success(data.data.message)
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const MakePaymentMutation = () => {

    const mutation = useMutation({
        mutationFn: (data: MakePaymentInput) => {
            return axiosInstance.post('/pay/payment', data) as Promise<{ data: { redirectUrl: string } }>
        },
        onSuccess: (data) => {
            console.log(data)
            window.location.href = data.data.redirectUrl
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const RefreshOtpMutation = () => {

    const dispatch = useDispatch()

    const mutation = useMutation({

        mutationFn: (email: string) => {
            return axiosInstance.post('/resendEmailOtp', { email }) as Promise<{ data: { otp: string } }>
        },
        onSuccess: (data) => {
            console.log(data)
            dispatch(SetOtp(data.data.otp))
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const VerifyPaymentMutation = () => {
    const dispatch = useDispatch()
    const mutation = useMutation({
        mutationFn: (data: DonationFormInputTypes) => {
            return axiosInstance.post('/registerPayer', data) as Promise<{ data: { message: string, id: string, otp: string, email: string, name: string, phoneNumber: string } }>
        },
        onSuccess: (data) => {
            console.log(data)

            dispatch(SetDonationModalAttributes({
                OtpToVerify: data.data.otp,
                email: data.data.email,
                name: data.data.name,
                phoneNumber: data.data.phoneNumber,
                isSucessful: false
            }))

            toast.success(data.data.message)
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

export const SurveyMutation = () => {

    const mutation = useMutation({
        mutationFn: (data: SurveyFormInputTypes) => {
            return axiosInstance.post('/survey', data) as Promise<{ data: { message: string } }>
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success(data.data.message)
        },
        onError: (err: any) => {
            console.log(err)
            toast.error(err.response.data.message)
        }
    })

    return mutation
}

