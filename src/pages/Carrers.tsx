import { Link } from "react-router-dom"
import CarrerCard from "../components/Carrers/CarrerCard"
import SearchBar from "../components/Carrers/SearchBar"

type Props = {}

function Carrers({ }: Props) {

  return (
    <>
      <div className="h-screen">
        <main className=' relative min-h-min overflow-x-hidden no-scrollbar'>
          <section className=' realtive  w-screen h-screen  bg-gradient-to-r from-[#FD0808] to-[#FFC5C8]'></section>
          <img src="/CarrerBoy.png" alt="" className=" absolute top-[150px] hidden min-[830px]:block md:right-[50px]  xl:right-[150px] md:w-[400px] md:h-[350px] lg:w-[490px] lg:h-[380px]  " />
          <section className=" w-[80%] min-[830px]:w-[300px] lg:w-[400px] xl:w-[500px] absolute top-[150px]  xl:top-[200px] left-[50px]">
            <div className=" flex-col text-2xl  md:text-3xl font-bold text-white">
              <p>Find a work that suits</p>
              <p>your interest & skills.</p>
            </div>
            <p className=" text-sm mt-4 text-white">Look no further! Ambuvians is a vibrant startup offering exciting internship opportunities in various fields. Whether you're into software development, marketing, design, or data analysis, we have a place for you. Gain hands-on experience, mentorship, and exposure to innovative projects. Our program is designed for skill development, networking, and personal growth. Collaborate with industry professionals, contribute to real projects, and kick-start your career.
            </p>
            <div className="mt-[50px]">
              <Link to="/campus-ambassador" style={{ backgroundColor: "white", color: "#000033" }} className="btn">
                Campus Ambassador
              </Link>
            </div>

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
    </>
  )
}

export default Carrers