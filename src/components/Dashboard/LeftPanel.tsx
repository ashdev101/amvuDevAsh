import React from 'react'
import CircularProgressProfileImage from './CircularProgressProfileImage'
import GridElement from './GridElement'

type Props = {}

function LeftPanel({ }: Props) {

    const gridData = [
        {
            imgSrc: "dashboard.png",
            alt: " Dashboard",
            heading: "Dashboard"
        },
        {
            imgSrc: "doctor.png",
            alt: "doctor",
            heading: "Personal"
        },
        {
            imgSrc: "Group.png",
            alt: "group",
            heading: "Medical history"
        },
        {
            imgSrc: "chart.png",
            alt: "Documents",
            heading: "Documents"
        },
        {
            imgSrc: "stethoscope.png",
            alt: "Doctor Consultation",
            heading: "Doctor Consultation"
        },
        {
            imgSrc: "medical history.png",
            alt: "Report Analyzer",
            heading: "Report Analyzer"
        },
        {
            imgSrc: "Medicine.png",
            alt: "Medicine",
            heading: "Medicine"
        },
        {
            imgSrc: "blood test.png",
            alt: "Lab Test",
            heading: "Lab Test"
        }
    ]
    return (
        <section className=' pt-5  lg:pt-20 min-w-[320px]  lg:border border-[#EDEFF2] flex flex-col items-center  gap-3'>
            <CircularProgressProfileImage />

            <div>
                <p className=" text-md font-bold text-[#6B7A99] ">Ambuvians</p>
                <p className=" text-md font-bold text-[#ADB8CC]">AMBU123123</p>
            </div>
            <div className=" md:hidden flex flex-row items-center justify-center gap-3">
                <img src="blood.png" alt="blood" className=" w-[35px] h-[35px] object-contain" />
                <span className=" font-bold text-sm text-[ #ADB8CC]">O+ve</span>
            </div>

            <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2  ">

                {
                    gridData.map((item, index) => {
                        return (
                            <GridElement
                                key={index}
                                imgSrc={item.imgSrc}
                                heading={item.heading}
                                alt={item.alt}
                            />
                        )
                    })
                }

            </div>

            <div className=" flex flex-row items-center justify-evenly w-[260px] p-2 border rounded-full">
                <img src="call.png" alt="call" className=" w-[30px] h-[30px]" />
                <img src="messages.png" alt="call" className=" w-[30px] h-[30px]" />
                <img src="whatsApp.png" alt="call" className=" w-[30px] h-[30px]" />
            </div>

        </section>
    )
}

export default LeftPanel