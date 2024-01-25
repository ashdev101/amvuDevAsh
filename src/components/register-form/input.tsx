import React from 'react'

type Props = {
    name: string
    value?: string
    label: string
    isrequired: boolean
    type: "text" | "email" | "password" | "date" | "phone" | "number"
    regex?: string
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void

}

/**
 * Renders an input component with a label and specific attributes and classes based on the props passed.
 * @param {Object} props - The props object.
 * @param {string} props.label - The label text to be displayed.
 * @param {boolean} props.isrequired - Indicates whether the input is required or not.
 * @param {("text" | "email" | "password")} props.type - The type of the input element.
 * @param {string} [props.regex] - A regular expression pattern to validate the input value.
 * @returns {JSX.Element} - The rendered input component.
 */

function Input({ label, isrequired, type, regex, placeholder, name, onChange, value }: Props): JSX.Element {
    const inputClassName = `min-w-[250px] p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;

    return (
        <section className="flex flex-col gap-1 ">
            <label>{label}</label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                pattern={regex}
                type={type}
                required={isrequired}
                className={inputClassName}
                placeholder={placeholder}
            />
        </section>
    );
}

export default Input