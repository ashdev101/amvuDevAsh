import React from 'react'
import Input from './Input'

type Props = {}

function FormForEmergency({ }: Props) {
    return (
        <form className=" w-full max-h-max flex flex-col items-center  gap-3">
       
            <section className=" w-full max-h-max flex flex-col items-center  gap-2">
                <span className=" text-sm font-bold text-left  w-full">Person 1</span>

                <Input placeholder={"Name"} type="text" name={""} />
                <Input placeholder={"Phone Number"} type="phone" name={""} />
                <Input placeholder={"Address"} type="text" name={""} />
            </section>
            <section className=" w-full max-h-max flex flex-col items-center  gap-2">
                <span className=" text-sm font-bold text-left  w-full">Person 1</span>

                <Input placeholder={"Name"} type="text" name={""} />
                <Input placeholder={"Phone Number"} type="phone" name={""} />
                <Input placeholder={"Address"} type="text" name={""} />
            </section>
            <button
                type="submit"
                className=" mt-7 min-w-[150px] px-16 py-2 text-sm font-bold bg-[#E96055] rounded-full text-white">
                Verify
            </button>
        </form>
    )
}

export default FormForEmergency