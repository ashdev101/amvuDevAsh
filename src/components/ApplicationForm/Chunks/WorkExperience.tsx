import React, { useCallback, useState } from 'react'
import ProgressBar from "../progressBar"
import Header from "../Header"
import Input from "../../Dashboard/Input"
import toast from 'react-hot-toast'
import { IoIosCloseCircleOutline } from 'react-icons/io'

type Props = {}

function WorkExperience({ }: Props) {
  const [workexperience, setWorkexperience] = useState(1)

  const increaseCount = useCallback((event: React.MouseEvent) => {
    if (workexperience < 4) {
      setWorkexperience(workexperience + 1)
    }
    toast.error("Mention your recent 3 work experience")
  }, [workexperience])

  const decreaseCount = useCallback((event: React.MouseEvent) => {
    if (workexperience > 1) {
      setWorkexperience(workexperience - 1)
    }
  }, [workexperience])
  return (
    <section>
      <Header imgSrc="/search.png" alt="WORK EXPERIENCE" heading="WORK EXPERIENCE" />
      {
        [...Array(workexperience)].map((_, index) => (
          <div key={index} className=" relative flex flex-row items-center justify-center gap-4 w-full mt-2">
            <ProgressBar height={"h-28"} />
            <div className=" flex flex-col items-center justify-center gap-4 w-full ">
              <section className=" flex flex-row items-center justify-center gap-2 w-full">
                <Input placeholder={"Title"} type="text" name={`workTitle${index + 1}`} />
                <Input placeholder={"Organisation"} type="text" name={`workOrganisation${index + 1}`} />
              </section>
              <Input placeholder={"Position"} type="text" name={`workPosition${index + 1}`} />
              <Input placeholder={" Description"} type="text" name={`workDescription${index + 1}`} />
            </div>
            <IoIosCloseCircleOutline onClick={decreaseCount} size={25} className=' text-slate-300 absolute top-[-8px] right-[-8px]' />
          </div>
        ))
      }

      <div
        onClick={() => { setWorkexperience(workexperience + 1) }}
        className=" flex flex-row items-center justify-start gap-4 w-full mt-8 cursor-pointer">
        <ProgressBar height={"h-0"} />
        <p className=" font-bold ">Add more +</p>
      </div>
    </section>
  )
}

export default WorkExperience