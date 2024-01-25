import { Link } from "react-router-dom"
import CarrerCard from "../components/Carrers/CarrerCard"
import SearchBar from "../components/Carrers/SearchBar"
import HeroBase from "../components/Contact/HeroBase"

type Props = {}

function Carrers({ }: Props) {

  return (
    <div>


      <main className=' relative min-h-min overflow-x-hidden no-scrollbar'>

        <HeroBase
          zuzu1={true}
          zuzu1Position={"top-[100px] right-0"}
          zuzu3Position={""}
          ellipsePosition={""}
          ellipse2Position={"bottom-[25px] right-[400px]"}
        />
        <img src="/CarrerBoy.png" alt="" className=" absolute top-[150px] hidden min-[830px]:block md:right-[50px]  xl:right-[150px] md:w-[400px] md:h-[350px] lg:w-[490px] lg:h-[380px]  " />
        <section className=" w-[80%] min-[830px]:w-[300px] lg:w-[400px] xl:w-[500px] absolute top-[150px]  xl:top-[200px] left-[50px]">
          <div className=" flex-col text-2xl  md:text-3xl font-bold text-white">
            <p>Find a work that suits</p>
            <p>your interest & skills.</p>
          </div>
          <p className=" text-sm mt-4 text-white">Look no further! Ambuvians is a vibrant startup offering exciting internship opportunities in various fields. Whether you're into software development, marketing, design, or data analysis, we have a place for you. Gain hands-on experience, mentorship, and exposure to innovative projects. Our program is designed for skill development, networking, and personal growth. Collaborate with industry professionals, contribute to real projects, and kick-start your career.
          </p>

          {/* <button className=" mt-4 bg-white text-black font-bold text-sm px-4 py-2  hover:bg-slate-100 transition duration-300 rounded-[0px_20px_0px_15.9px] shadow-[0px_10px_25px_#0193341a]">Join as Campus Ambassador</button> */}

          <Link to="/campus-ambassador" style= {{backgroundColor : "white", marginTop : "15px", color : "#000033"}} className="btn">
            
          </Link>

        </section>
        <div className=" w-screen flex items-center justify-center">

          <section className=" p-3 bg-white absolute bottom-5  w-[85%] sm:w-[350px] rounded-lg">
            <SearchBar placeholder="Job title or keyword..." isRequired={true} />
          </section>
        </div>

        <section className=" absolute w-screen top-[calc(100vh+50px)] min-h-max ">
          <img src="/wave.png" alt="" className=" hidden md:block max-h-[1900px] min-w-full object-fill " />

          <div className="absolute top-0   w-screen">
            <div className=" w-screen px-2  grid:cols-1 md:grid grid-cols-2 place-items-center ">

              <CarrerCard imgSrc={"/webdev.png"} title={"Web Developer"} tagArrays={["MERN Stack", "MVC Architecture", "Django"]} index={0} />
              <CarrerCard imgSrc={"/webdev.png"} title={"Web Developer"} tagArrays={["MERN Stack", "MVC Architecture", "Django"]} index={1} />
              <CarrerCard imgSrc={"/webdev.png"} title={"Web Developer"} tagArrays={["MERN Stack", "MVC Architecture", "Django"]} index={2} />
              <CarrerCard imgSrc={"/webdev.png"} title={"Web Developer"} tagArrays={["MERN Stack", "MVC Architecture", "Django"]} index={3} />
              <CarrerCard imgSrc={"/webdev.png"} title={"Web Developer"} tagArrays={["MERN Stack", "MVC Architecture", "Django"]} index={4} />
              <CarrerCard imgSrc={"/webdev.png"} title={"Web Developer"} tagArrays={["MERN Stack", "MVC Architecture", "Django"]} index={5} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Carrers