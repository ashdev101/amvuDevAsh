import React, { useCallback, useState } from 'react'
import Header from '../Header'
import ProgressBar from '../progressBar'
import Input from '../../Dashboard/Input'
import toast from 'react-hot-toast'
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {}

function Projects({ }: Props) {
  const [projectsCount, setProjectsCount] = useState(1)

  const increaseCount = useCallback((event: React.MouseEvent) => {
    if (projectsCount < 4) {
      setProjectsCount(projectsCount + 1)
    }
    toast.error("Mention your best 3 projects")
  }, [projectsCount])

  const decreaseCount = useCallback((event: React.MouseEvent) => {
    if (projectsCount > 1) {
      setProjectsCount(projectsCount - 1)
    }
  }, [projectsCount])
  return (
    <section>
      <Header imgSrc="/search.png" alt="PROJECTS" heading="PROJECTS" />
      {
        [...Array(projectsCount)].map((_, index) => (
          <div key={index} className=" relative flex flex-row items-center justify-center gap-4 w-full mt-2 ">
            <ProgressBar height={"h-28"} />
            <div className=" flex flex-col items-center justify-center gap-4 w-full ">
              <section className=" flex flex-row items-center justify-center gap-2 w-full">
                <Input placeholder={"Title"} type="text" name={`projectTitle${index + 1}`} />
                <Input placeholder={"Link"} type="text" name={`projectLink${index + 1}`} />
              </section>
              <Input placeholder={"Small Description"} type="text" name={`projectDescription${index + 1}`} />
            </div>
            <IoIosCloseCircleOutline onClick={decreaseCount} size={25} className= ' text-slate-300 absolute top-[-8px] right-[-8px]' />
          </div>
        ))
      }
      <div onClick={increaseCount} className=" flex flex-row items-center justify-start gap-4 w-full mt-8 cursor-pointer">
        <ProgressBar height={"h-0"} />
        <p className=" font-bold ">Add more +</p>
      </div>
    </section>
  )
}

export default Projects