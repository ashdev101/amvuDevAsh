import React from 'react'
import Input from './Input'
import { GetUserById } from '../../ApiCalling/query'

type Props = {}

function UserGeneralDetails({ }: Props) {

    const query = GetUserById("659b4b80969cd4cd71336485")
    console.log(query.data)



    return (
        <form action="" className=" w-full max-h-max flex flex-col items-center  gap-3">
            <span className=" text-sm font-bold ">General Details</span>
            <Input placeholder={"Date of birth"} type="date" name={""} defaultValue={"2022-01-01"} isDisabled />
            <Input placeholder={"Gender"} type="text" name={""} />
            <Input placeholder={"Phone Number"} type="phone" name={""} />
            <Input placeholder={"Email Address"} type="email" name={""} />
            <Input placeholder={"College Name"} type="text" name={""} />
            <Input placeholder={"College Id"} type="text" name={""} />
            <Input placeholder={"Insurance Information"} type="text" name={""} />
            <Input placeholder={"Height"} type="text" name={""} />
            <Input placeholder={"Weight"} type="text" name={""} />
            <Input placeholder={"Physical Disabilities"} type="text" name={""} />
            <button
                type="submit"
                className=" min-w-[150px] px-16 py-2 text-sm font-bold bg-[#E96055] rounded-full text-white">
                Fill Survey Form
            </button>
        </form>
    )
}

export default UserGeneralDetails