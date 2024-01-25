import React, { useState } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import Header from '../Header'
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
    interest: Array<string>,
    setInterest: React.Dispatch<React.SetStateAction<Array<string>>>
}

function Interest({ interest, setInterest}: Props) {
    
    const [addInterestInput, setAddInterestInput] = useState("")
    const [addInterestInputOpen, setAddInterestInputOpen] = useState(false)
    return (
        <section>
            <Header imgSrc="/search.png" alt="INTEREST" heading="INTEREST" />
            <div className="  flex items-center flex-row justify-start gap-2 flex-wrap pl-5 mt-4">

                {
                    interest.map((item, index) => (

                        <div key={index} className=" relative px-3 py-1 text-white text-sm rounded-xl  bg-[#2AA4FE] max-w-max">
                            {item}
                        <IoIosCloseCircleOutline  className='absolute text-black top-[-8px] right-[-8px]' 
                        size={20} 
                        onClick={() => { setInterest([...interest.filter((item) => item !== item)]) }} />
                        </div>
                    ))
                }
                {
                    addInterestInputOpen ?
                        <div className=" px-3 py-1 text-white text-sm rounded-xl  bg-[#2AA4FE] max-w-max flex flex-row">
                            <input value={addInterestInput} type="text" className=" border-none outline-none bg-inherit " onChange={(e) => setAddInterestInput(e.target.value)} />
                            <div onClick={() => { setAddInterestInputOpen(false); setInterest([...interest, addInterestInput]); setAddInterestInput("") }}>
                                <IoAddCircleOutline size={20} />
                            </div>
                        </div>
                        : null
                }
                <button onClick={() => { setAddInterestInputOpen(true) }} type="button" className=" px-3 py-1 text-white text-sm rounded-xl bg-[#ED3B69] max-w-max">
                    click to add
                </button>
            </div>

        </section>
    )
}

export default Interest