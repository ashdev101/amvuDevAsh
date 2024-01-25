import React from 'react'

type Props = {
    name: string
    label: string

}

function RadioInput({ name, label }: Props) {
    return (
        <div className="flex items-center mb-4">
            <input type="radio" value="" name={name} className="w-4 h-4 text-rose-600 bg-gray-100 border-gray-300 " />
            <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">{label}</label>
        </div>
    )
}

export default RadioInput