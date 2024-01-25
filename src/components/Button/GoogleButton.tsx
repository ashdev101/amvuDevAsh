import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast";
// app\clients\axiosClient.ts
import { axiosInstance } from "../../clients/axiosClient";
import { GoogleAuthMutation } from "../../ApiCalling/mutations";

type buttonProp = {
    className?: string
    isDisabled?: boolean
    label: string
    action: "login" | "register"
}

/**
 * Renders a button for signing in with Google.
 * * Sends the Google authentication token to a backend server for further processing.
 * @param {string} className - The CSS class name for styling the button.
 */

export const GoogleButton = ({ className, isDisabled, label, action }: buttonProp) => {

    // const verifyGoogleToken = window.localStorage.getItem("__token_test");
    const mutation = GoogleAuthMutation();

    const login = useGoogleLogin({
        onSuccess: tokenResponse => mutation.mutate({ token: tokenResponse.access_token , action }),
        onError: error => console.log(error),
    });

    return (
        <button
            disabled={isDisabled}
            type="button"
            onClick={() => login()}
            className={`flex flex-row items-center justify-center gap-3 min-w-max w-full sm:w-[45%] px-3 h-[48px] bg-black rounded-[5px] ${className}`}
        >
            <img
                className="w-[20px] h-[20px] object-cover"
                alt="google"
                src="/Google.png"
            />
            <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-[14px] tracking-[-0.28px] leading-[normal]">
                {label}
            </span>
        </button>
    );
};
