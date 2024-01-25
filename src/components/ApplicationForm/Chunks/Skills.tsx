import React, { useState } from 'react'
import Header from '../Header'
import { IoAddCircleOutline } from 'react-icons/io5'
import TextArea from '../../Common/TextArea'
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
    Skills: Array<string>
    setSkills: React.Dispatch<React.SetStateAction<Array<string>>>

}

function SkillsSet({ Skills, setSkills }: Props) {
    const [addSkillsInput, setAddSkillsInput] = useState("")
    const [addSkillsInputOpen, setAddSkillsInputOpen] = useState(false)
    return (
        <section className=" flex flex-col gap-3">
            <Header imgSrc="/search.png" alt="SKILLS" heading="SKILLS" />
            <div className="  flex items-center flex-row justify-start gap-2 flex-wrap pl-5 mt-4">
                {
                    Skills.map((skill, index) => (

                        <div key={index} className=" relative px-3 py-1 text-white text-sm rounded-xl  bg-[#2AA4FE] max-w-max">
                            {skill}
                            <IoIosCloseCircleOutline 
                            className='absolute text-black top-[-8px] right-[-8px]'
                            size={20} onClick={() => { setSkills([...Skills.filter((item) => item !== skill)]) }} />
                        </div>
                    ))
                }
                {
                    addSkillsInputOpen ?
                        <div className=" px-3 py-1 text-white text-sm rounded-xl  bg-[#2AA4FE] max-w-max flex flex-row">
                            <input value={addSkillsInput} type="text" className=" border-none outline-none bg-inherit " onChange={(e) => setAddSkillsInput(e.target.value)} />
                            <div onClick={() => { setAddSkillsInputOpen(false); setSkills([...Skills, addSkillsInput]); setAddSkillsInput("") }}>
                                <IoAddCircleOutline size={20} />
                            </div>
                        </div>
                        : null
                }
                <button onClick={() => { setAddSkillsInputOpen(true) }} type="button" className=" px-3 py-1 text-white text-sm rounded-xl bg-[#ED3B69] max-w-max">
                    click to add
                </button>
            </div>
            <TextArea isrequired={true} isLabel={true} name={"softSkills"} label={"Soft Skills : "} placeholder=" Teamwork, good communication, presentation & consultation, writing reports, leadership, positive attitude, trainable." />
        </section>
    )
}

export default SkillsSet