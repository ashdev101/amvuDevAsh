

export type RegisterFormTypes = {
    firstName: string;
    LastName: string;
    email: string | null;
    phone: string | null;
    dob: string;
    password: string;
    conformPassword?: string;
}

export type LoginFormTypes = {
    email: string | null;
    phone: string | null;
    password: string;
}


export type PasswordLessLoginFormTypes = {
    email: string | null;
    phone: string | null;
}

export type RegisterFormInputTypes = {
    firstName: string;
    LastName: string;
    identifier: string;
    dob: string;
    password: string;
    conformPassword: string
}



export type LoginFormInputTypes = {
    identifier: string;
    password: string;
}

export type PasswordLessLoginFormInputTypes = {
    identifier: string;
    Otp: string;
}

export type UserProfileResponse = {
    data: {
        phone: string | null | undefined;
        otp: string;
        message: string
        id: string;
        email: string | null;
    }
}

export type LoginResponse = {
    data: {
        phone: string | null | undefined;
        otp: string;
        message: string
        email: string | null;
    }
}

export type PasswordLessLoginResponse = {
    data: {
        phone: string | null | undefined;
        otp: string;
        message: string
        email: string | null;
    }
}

export type VerifyUserToResetPasswordType = {
    email: string | null;
    phone: string | null;
}

export type ResetPasswordType = {
    email: string | null;
    phone: string | null;
    password: string
}

export type GetUserByIdResponseType = {
    id: string;
    email: string | null;
    isemailVerified: boolean;
    phoneNumber: string | null;
    isphoneNumberVerified: boolean;
    firstName: string;
    LastName: string;
    dob: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export type GoogleAuthInputType = {
    token: string
    action: "login" | "register"
}

export type GoogleAuthResponseType = {

    data: {
        id: string;
        email: string | null;
        isemailVerified: boolean;
        phoneNumber: string | null;
        isphoneNumberVerified: boolean;
        firstName: string;
        LastName: string;
        dob: string | null;
        createdAt: Date;
        updatedAt: Date;
        message: string
    }
}
export type ApplicationForInputTypes = {
    fullName: string
    position: string
    address: string
    phone: string
    website: string
    mail: string
    github: string
    skills: Array<string>
    softSkills: string
    languauges: {
        name: string
        level: string
    }[],
    interest: Array<string>
    about: string
    projects: {
        title: string
        link: string
        description: string
    }[]
    workExperience: {
        title: string
        position: string
        organisation: string
        description: string
    }[]
    education: {
        level: string
        grade: string
        institutionName: string

    }[]
}

export type generalContactForm = {
    fullName: string;
    identifier: string;
    locality: string;
    queryType: string;
    query: string;
}

export type businessContactForm = {
    fullName: string;
    businessEmail: string;
    businessPhone: string;
    queryType: string;
}

export type DonationFormInputTypes = {
    firstName: string;
    LastName: string;
    email: string;
    phone: string;
}

export type MakePaymentInput = {
    user_id: string,
    price: number,
    phone: string,
    name: string
}

export type SurveyFormInputTypes = {
    firstName: string;
    LastName: string;
    email: string;
    phone: string;
    BloodGroup: string,
    ChronicMedicalConditions: string,
    Recentdisease: string,
    TakingAnyMedications: string,
    MembersInYourFamily: string,
    WearingGlasses: string,
    OlderMemberInTheFamily60: string,
    YogaOrWorkoutDaily: string
}