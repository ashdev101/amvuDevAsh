import React from 'react'
import Input from '../register-form/input'
import Selector from '../Common/Selector'
import TextArea from '../Common/TextArea'
import { generalContactForm } from '../../../d.tyes'
import { GeneralContactMutation } from '../../ApiCalling/mutations'

type Props = {}

const QueryArray = [
    { name: "General Query", value: "General Query" },
    { name: "Service Realted Query", value: "Service Realted Query" },
    { name: "Wants to Hire", value: "Wants to Hire" },
    { name: "Works For Society", value: "Works For Society" },
    { name: "Donation Realted Query", value: "Donation Realted Query" },
    { name: "Complaint Against Service", value: "Complaint Against Service" },
    { name: "Any Suggestion", value: "Any Suggestion" },

]

function GeneralContactForm({ }: Props) {

    const mutationForGeneralContactForm = GeneralContactMutation()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const newFormData: generalContactForm = {
            fullName: formData.get('fullName') as string,
            identifier: formData.get('identifier') as string,
            locality: formData.get('locality') as string,
            queryType: formData.get('queryType') as string,
            query: formData.get('query') as string
        }

        // console.log(newFormData)
        mutationForGeneralContactForm.mutate(newFormData)
        
    }
    return (
        <form onSubmit={handleSubmit} className=' w-full max-h-max flex flex-col justify-center gap-5 p-3'>
            <div className=' flex gap-2 text-3xl font-bold'>
                <p>General</p>
                <p className=' text-red-500'>Queries</p>
            </div>
            <Input type="text" name={"fullName"} label={'Full Name'} isrequired={true} />
            <Input type="text" name={"identifier"} label={'Your Email/Phone'} isrequired={true} />
            <Input type="text" name={"locality"} label={'Locality'} isrequired={true} />
            <Selector optionArray={QueryArray} name={'queryType'} label={'Query Type'} isRequired={true} />
            <TextArea label={'Describe Your Query'} name={'query'} isrequired />
            <button type="submit" className='w-full p-3 bg-[#FD0808] text-white rounded-3xl'>Submit</button>
        </form>
    )
}

export default GeneralContactForm