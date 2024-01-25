import React from 'react'
import InputB from '../../components/Dashboard/Input'
import Selector from '../Common/Selector'
import { businessContactForm } from '../../../d.tyes'
import { BusinessContactMutation } from '../../ApiCalling/mutations'


type Props = {}

const BusinessQueryArray = [
    { name: "Expand Your service", value: "Expand Your service" },
    { name: "Ambulance Services", value: "Ambulance Services" },
    { name: "Medicine Supplier", value: "Medicine Supplier" },
    { name: "Ambuvians Franchise", value: "Ambuvians Franchise" },
    { name: "AmbuCloud Services", value: "AmbuCloud Services" },
    { name: "Partnership with your business", value: "Partnership with your business" },
    { name: "Funding Related Query", value: "Funding Related Query" },

]

function BusinessContactForm({ }: Props) {

    const mutationForBusinessContactForm = BusinessContactMutation()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const newFormData :businessContactForm = {
            fullName: formData.get('fullName') as string,
            businessEmail: formData.get('businessEmail') as string,
            businessPhone: formData.get('businessPhone') as string,
            queryType: formData.get('queryType') as string
        }

        console.log(newFormData)
        mutationForBusinessContactForm.mutate(newFormData)
    }
    return (
        <form onSubmit={handleSubmit} className=' mt-4 flex flex-col  justify-center gap-3'>
            <InputB type="text" name={"fullName"} placeholder={'Full Name'} isRequired={true} />
            <InputB type="text" name={"businessEmail"} placeholder={'Business Email'} isRequired={true} />
            <InputB type="text" name={"businessPhone"} placeholder={'Business Phone'} isRequired={true} />
            <Selector optionArray={BusinessQueryArray} name={'queryType'} label={'Query Type'} isRequired={true} />
            <button type="submit" className='w-full p-3 bg-[#FD0808] text-white rounded-sm'>Submit</button>
        </form>
    )
}

export default BusinessContactForm