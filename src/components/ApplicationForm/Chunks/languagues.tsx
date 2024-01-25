import React from 'react'
import Header from '../Header'
import Input from '../../Dashboard/Input'
import Selector from '../../Common/Selector'

type Props = {

}

const proficiencyLevelsArray = [
    {
      name: 'Native',
      value: 'Native',
    },
    {
      name: 'Intermediate',
      value: 'Intermediate',
    },
    {
      name: 'Advanced',
      value: 'Advanced',
    },
    {
      name: 'Native',
      value: 'Native',
    },
    {
      name: 'Fluent',
      value: 'Fluent',
    },
    {
      name: 'Proficient',
      value: 'Proficient',
    }
  
  ]

function Languagues({}: Props) {
  return (
    <section className="">
    <Header imgSrc="/search.png" alt="LANGUAGES" heading="LANGUAGES" />
    <div className=" flex flex-row items-center justify-between gap-3 my-2">
      <Input placeholder={"Language"} type="text" name={"language1"} isRequired />
      <Selector optionArray={proficiencyLevelsArray} name={"proficiency1"} isRequired />
    </div>
    <div className=" flex flex-row items-center justify-between gap-3 my-2">
      <Input placeholder={"Language"} type="text" name={"language2"} />
      <Selector optionArray={proficiencyLevelsArray} name={"proficiency2"} isRequired />
    </div>
    <div className=" flex flex-row items-center justify-between gap-3 my-2">
      <Input placeholder={"Language"} type="text" name={"language3"} />
      <Selector optionArray={proficiencyLevelsArray} name={"proficiency3"} isRequired />
    </div>
  </section>
  )
}

export default Languagues