import { useRef, useState } from "react"
import Input from "../components/Dashboard/Input"
import Header from "../components/ApplicationForm/Header"
import TextArea from "../components/Common/TextArea"
import Interest from "../components/ApplicationForm/Chunks/Interest"
import SkillsSet from "../components/ApplicationForm/Chunks/Skills"
import { ApplicationForInputTypes } from "../../d.tyes"
import { ApplicationMutation } from "../ApiCalling/mutations"
import GeneralDetails from "../components/ApplicationForm/Chunks/GeneralDetails"
import Languagues from "../components/ApplicationForm/Chunks/languagues"
import Projects from "../components/ApplicationForm/Chunks/Projects"
import WorkExperience from '../components/ApplicationForm/Chunks/WorkExperience'
import Education from "../components/ApplicationForm/Chunks/Education"

type Props = {}
const webDeveloperSkills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Angular',
    'Vue.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'RESTful API',
    'Responsive Web Design',
    'Version Control (Git)',
    'Webpack',
    'GraphQL',
    'SASS/SCSS',
    'TypeScript',
    'Jest/Testing Library',
    'CI/CD',
    'Agile/Scrum',
    'UI/UX Design',
];


function Application({ }: Props) {
    const [projectsCount, setProjectsCount] = useState(1)
    const [workexperience, setWorkexperience] = useState(1)
    const [Skills, setSkills] = useState<Array<string>>(webDeveloperSkills)
    const [interest, setInterest] = useState<Array<string>>([])
    const formRef = useRef<HTMLFormElement>(null);
    const mutationForApplicaion = ApplicationMutation()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // console.log(newFormData.fullName);
        console.log(formData.get('fullName'));
        const projects =
            [...Array(projectsCount)].map((_, i) => (
                {
                    title: formData.get(`projectTitle${i + 1}`) as string,
                    link: formData.get(`projectLink${i + 1}`) as string,
                    description: formData.get(`projectDescription${i + 1}`) as string
                }
            ))

        const experience = [...Array(workexperience)].map((_, i) => (
            {
                title: formData.get(`workTitle${i + 1}`) as string,
                organisation: formData.get(`workOrganisation${i + 1}`) as string,
                position: formData.get(`workPosition${i + 1}`) as string,
                description: formData.get(`workDescription${i + 1}`) as string
            }
        ))

        const education = [
            {
                level: "degree",
                grade: formData.get('degreegrade') as string,
                institutionName: formData.get('degreeInstitutionName') as string
            },
            {
                level: "intermediate",
                grade: formData.get('intermediateGrade') as string,
                institutionName: formData.get('intermediateInstitutionName') as string
            },
            {
                level: "highSchool",
                grade: formData.get('highSchoolGrade') as string,
                institutionName: formData.get('highschoolInstitutionName') as string
            }
        ]

        const languages = [{
            name: formData.get('language1') as string,
            level: formData.get('proficiency1') as string
        },
        {
            name: formData.get('language2') as string,
            level: formData.get('proficiency2') as string
        },
        {
            name: formData.get('language3') as string,
            level: formData.get('proficiency3') as string
        }]

        const newFormData: ApplicationForInputTypes = {
            fullName: formData.get("fullName") as string,
            position: formData.get("position") as string,
            address: formData.get("address") as string,
            phone: formData.get("phone") as string,
            website: formData.get("website") as string,
            mail: formData.get("mail") as string,
            github: formData.get("github") as string,
            skills: Skills,
            softSkills: formData.get("softSkills") as string,
            languauges: languages,
            interest: interest,
            about: formData.get("about") as string,
            projects: projects,
            workExperience: experience,
            education: education
        }

        mutationForApplicaion.mutate(newFormData)
        if (mutationForApplicaion.isSuccess) {
            // formRef.current?.reset();
        }
    }
    return (
        <main className='overflow-x-hidden'>
            <nav className='hidden md:block absolute top-10 right-0 max-w-[calc(100%-280px)] lg:left-[300px] w-full  h-[80px] '>
                <ul className=' flex flex-row items-center justify-evenly  md:justify-between px-3 lf:px-0 lg:pr-20 text-sm md:text-md lg:text-lg font-bold '>
                    <li>
                        <img src="/logoamb.png" alt="logo" className='' />

                    </li>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Join Us</a>
                    </li>
                    <li className=' text-white'>
                        <a href="">Contact Us</a>
                    </li>
                    <li>
                        <button className=' bg-[#FD0808] text-[white] px-3 py-1 rounded-md'>Login | Sign Up</button>
                    </li>
                </ul>
            </nav>

            <div className=" w-full px-5 md:px-10">
                <p className=" w-ful text-4xl font-bold text-center text-[#DB0F27] mt-[120px] my-10">Application Form</p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className=" flex flex-col md:flex-row gap-16 w-full">


                        {/* left */}
                        <div className=" flex flex-col justify-center gap-4 flex-[5]">
                            <section className=" max-w-[350px] max-h-[350px] w-full h-[calc(100%)] border">
                                <img src="upload.png" alt="upload" className=" w-full h-full object-cover object-center" />
                            </section>
                            <section>
                                <Input placeholderSize="placeholder:text-2xl" placeholder={"Full Name"} type="text" name={"fullName"} isRequired height="h-[60px]" />
                            </section>

                            <GeneralDetails />

                            <SkillsSet Skills={Skills} setSkills={setSkills} />

                            <Languagues />

                            <Interest interest={interest} setInterest={setInterest} />
                        </div>
                        {/* right */}
                        <div className=" flex-[7] flex flex-col  gap-5 w-full">
                            <section className=" flex flex-col gap-2">
                                <Header imgSrc="/search.png" alt="ABOUT ME" heading="ABOUT ME" />
                                <TextArea isrequired={true} name={"about"} placeholder={"Write about yourself"} />
                            </section>

                            <Projects />

                            <WorkExperience />

                            <Education />
                        </div>

                    </div>
                    <button type="submit" className=' mt-10 rounded-xl w-full p-3 bg-[#FD0808] text-white '>Submit</button>
                </form>
            </div>
        </main>
    )

}

export default Application