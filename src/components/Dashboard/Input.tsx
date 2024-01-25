import React from 'react'

type Props = {
    placeholder: string
    type: "text" | "email" | "password" | "date" | "phone"
    name: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    isDisabled?: boolean
    isRequired?: boolean
    defaultValue?: any
    height?: string
    placeholderSize?: string
}

function Input({ placeholder, type, name, onChange, isDisabled, isRequired, defaultValue , height , placeholderSize}: Props) {
    return (
        <input
            disabled={isDisabled}
            required={isRequired}
            defaultValue={defaultValue}
            className={`w-full ${height } ${placeholderSize} p-2 border  border-gray-100 rounded-md placeholder:font-bold placeholder:text-sm`}
            type={type} placeholder={placeholder} name={name} onChange={onChange} />
    )
}

export default Input