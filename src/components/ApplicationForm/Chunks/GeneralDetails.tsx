import React from 'react'
import Input from '../../Dashboard/Input'
import Header from '../Header'
import IconInput from '../IconInput'

type Props = {}

function GeneralDetails({ }: Props) {
    return (
        <section className=" flex flex-col gap-2">
            <Input placeholder={"Position Applying for "} type="text" name={"position"} />
            <Header imgSrc="/search.png" alt="CONTACT" heading="CONTACT" />
            <IconInput InputType={"text"} placeholder={"Address"} isRequired imgSrc="/search.png" alt="address" name={"address"} />
            <IconInput InputType={"text"} placeholder={"Phone Number"} isRequired imgSrc="/search.png" alt="Phone number" name="phone" />
            <IconInput InputType={"text"} placeholder={"Website"} imgSrc="/search.png" alt="website" name="website" />
            <IconInput InputType={"text"} placeholder={"Mail"} isRequired imgSrc="/search.png" alt="mail" name="mail" />
            <IconInput InputType={"text"} placeholder={"Github"} imgSrc="/search.png" alt="github" name="github" />
        </section>
    )
}

export default GeneralDetails