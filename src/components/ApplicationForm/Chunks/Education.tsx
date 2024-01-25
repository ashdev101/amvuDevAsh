import React from 'react'
import Header from '../Header'
import ProgressBar from '../progressBar'
import Input from '../../Dashboard/Input'

type Props = {}

function Education({}: Props) {
  return (
    <section>
    <Header imgSrc="/search.png" alt="EDUCATION" heading="EDUCATION" />
    <div className=" flex flex-row items-center justify-center gap-4 w-full mt-2">
      <ProgressBar height={"h-28"} />
      <div className=" flex flex-col items-center justify-center gap-4 w-full ">

        <Input placeholder={"Degree"} type="text" name={"degree"} isRequired />
        <Input placeholder={"Grade"} type="text" name={"degreegrade"} isRequired />
        <Input placeholder={"Institution Name"} type="text" name={" degreeInstitutionName"} isRequired />
      </div>
    </div>
    <div className=" flex flex-row items-center justify-center gap-4 w-full mt-6">
      <ProgressBar height={"h-28"} />
      <div className=" flex flex-col items-center justify-center gap-4 w-full ">

        <Input placeholder={"Intermediate"} type="text" name={"intermediate"} isRequired />
        <Input placeholder={"Grade"} type="text" name={"intermediateGrade"} isRequired />
        <Input placeholder={"Institution Name"} type="text" name={" intermediateInstitutionName"} isRequired />
      </div>
    </div>
    <div className=" flex flex-row items-center justify-center gap-4 w-full mt-6">
      <ProgressBar height={"h-28"} />
      <div className=" flex flex-col items-center justify-center gap-4 w-full ">

        <Input placeholder={"High School"} type="text" name={"highschool"} isRequired />
        <Input placeholder={"Grade"} type="text" name={"highschoolGrade"} isRequired />
        <Input placeholder={"Institution Name"} type="text" name={"highschoolInstitutionName"} isRequired />
      </div>
    </div>
  </section>
  )
}

export default Education