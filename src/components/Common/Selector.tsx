import React from 'react'

type Props = {
    optionArray: {
        name: string,
        value: string
    }[]
    name: string
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
    defaultValue?: string
    label?: string
    isRequired?: boolean
    isLabel ? : boolean
   
}

function Selector({ optionArray, name, onChange, defaultValue, isRequired, label  , isLabel }: Props) {
    return (
        <>
            {isLabel ? <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label> : null}
            <select
                required={isRequired}
                name={name}
                className=" px-4 py-3  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-200 dark:focus:border-gray-200">
                <option disabled>Select from below</option>
                {optionArray.map((option) => (
                    <option className='' key={option.value} value={option.value}>{option.name}</option>
                ))}
            </select>
        </>
    )
}

export default Selector