import "../styles/privacy-policy/privacyPolicy.css"
const TermsAndCondition = () => {
    return (
        <div className="w-full lg:px-[100px] sm:px-[50px] px-[30px] md:my-[70px] my-[30px]">
            <p className="text-[#DB0F27] font-[500] md:text-[18px] sm:text-[16px] text-[12px] text-center bg-[#db0f2738] rounded-[30px] w-fit m-auto px-[30px] py-[5px] ">
                Last revised: 21 Jan, 24
            </p>

            <h1 className="font-[700] 2xl:text-[80px]  xl:text-[70px] lg:text-[60px] md:text-[50px] sm:text-[40px] text-[30px] text-center mt-[20px]">Terms & Condition</h1>
            <h1 className="font-[700] xl:text-[40px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[18px]  2xl:w-[70%] md:w-[80%] w-[100%] text-[#212326] m-auto mt-[50px] xl:pl-[50px]">
                Terms and Conditions for Ambuvians Healthcare Private Limited
            </h1>
            {/* ------------------------------------------ */}
            <div className="2xl:w-[70%] md:w-[80%] w-[100%] m-auto mt-[50px] 2xl:pl-[50px]">
                {/* -------- General Terms ------------- */}
                <h2 className="privacy-policy-headings">
                    General Terms:
                </h2>
                <p className="privacy-policy-para">
                    <span className="text-[#DB0F27]">1. Introduction:</span> <br />
                    These terms and conditions ("Terms") govern the services provided by
                    Ambuvians Healthcare Private Limited ("Ambuvians"). By accessing or using any services
                    from Ambuvians, users agree to comply with these Terms. <br /> <br />
                    <span className="text-[#DB0F27]">2. Service Modifications:</span> <br />
                    Ambuvians reserves the right to modify, suspend, or discontinue
                    any service without prior notice. Updated Terms will be posted on the Ambuvians platform.<br />
                </p>

                {/* -------- Service-Specific Terms: ------------- */}
                <h2 className="privacy-policy-headings">
                    Service-Specific Terms:
                </h2>
                <p className="privacy-policy-para">
                    <span className="text-[#DB0F27]">1. Streamlined Ambulance Service:</span> <br />
                    ○ Ambuvians employs GPS-based systems and MapMyIndia Maps to enhance
                    ambulance dispatch and routing.<br />
                    ○ Patients are assigned to the nearest hospital based on location data, subject to
                    availability and other conditions. <br /> <br />
                    <span className="text-[#DB0F27]">2. Simplified Hospital Queuing:</span> <br />
                    ○ A centralized portal enables patients to pre-submit necessary details, significantly
                    reducing admission paperwork and wait times.<br />
                    ○ Advanced solutions, including online doctor consultations via AR/VR
                    technologies, are available to enhance user experience. <br /> <br />
                    <span className="text-[#DB0F27]">3. Check-in and Document Management:</span> <br />
                    ○ Ambuvians Cloud and Digi locker services facilitate secure digital storage and
                    access of medical documents. <br />
                    ○ Compliant with Ayushman Bharat Digital Mission (ABDM) guidelines. <br /> <br />
                    <span className="text-[#DB0F27]">4. Timely Medicine Supply:</span> <br />
                    ○ Ambuvians collaborates with healthcare stakeholders to optimize the medicine
                    supply chain, ensuring timely delivery and minimizing wastage.<br />
                    ○ The Medicine Analyzer system provides real-time insights into medicine usage and
                    availability. <br /> <br />
                    <span className="text-[#DB0F27]">5. Medical Tests:</span> <br />
                    ○ Ambuvians offers home testing facilities with results seamlessly uploaded to the
                    Ambuvians portal for easy access. <br />
                    ○ The Report Analyzer tool assists users in understanding medical reports and offers
                    recommendations based on findings. <br /> <br />
                    <span className="text-[#DB0F27]">6. Government Policies:</span> <br />
                    ○ The Ambuvians platform serves as an informative hub, disseminating updates on
                    healthcare-related government policies, schemes, and protocols. <br /> <br />
                    <span className="text-[#DB0F27]">7. Yoga Facilities:</span> <br />
                    ○ Ambuvians promotes the benefits of yoga and provides comprehensive information
                    on upcoming yoga camps and classes via its platform. <br /> <br />
                    <span className="text-[#DB0F27]">8. Facilities for Persons with Disabilities:
                    </span> <br />
                    ○ Ambuvians is committed to ensuring accessibility in all its public spaces and
                    medical facilities, adhering to relevant government guidelines and schemes. <br />
                    ○ The online yoga portal offers specialized exercises tailored for individuals with
                    physical disabilities, promoting holistic well-being.
                </p>
            </div>
        </div>
    )
}

export default TermsAndCondition
