import HamburgerMenu from '../Common/Hamburger'

type Props = {
    zuzu1?: boolean,
    zuzu3?: boolean,
    ellipse?: boolean,
    ellipse2?: boolean,
    zuzu1Position?: string,
    zuzu3Position?: string,
    ellipsePosition?: string,
    ellipse2Position?: string,
}

function HeroBase({ zuzu1Position, zuzu3Position, ellipsePosition, ellipse2Position , zuzu1, zuzu3, ellipse, ellipse2}: Props) {
    return (
        <>
            <section className=' realtive  w-screen h-screen  bg-gradient-to-r from-[#FD0808] to-[#FFC5C8]'>
                {zuzu1 ? <img src="/zuzu1.png" alt="" className={`absolute  hidden sm:block ${zuzu1Position}`} /> : null}
                { zuzu3 ?<img src="/zuzu3.png" alt="" className={`absolute  hidden sm:block ${zuzu3Position}`} /> : null}
                { ellipse ? <img src="/Ellipse.png" alt="" className={`absolute  hidden sm:block ${ellipsePosition}`} /> : null}
                { ellipse2 ? <img src="/Ellipse2.png" alt="" className={`absolute  hidden sm:block ${ellipse2Position}`} /> : null}
                 <img src="/Rectangle.png" alt="" className=' top-0 left-0 w-[600px] h-[100px] object-cover object-left' />

            </section>
            <img src="/logoamb.png" alt="logo" className=' absolute top-5 left-1  sm:left-10' />
            <nav className='hidden md:block absolute top-10 right-0 max-w-[calc(100%-280px)] lg:left-[300px] w-full  h-[80px] '>
                <ul className=' flex flex-row items-center justify-evenly  md:justify-between px-3 lf:px-0 lg:pr-20 text-sm md:text-md lg:text-lg font-bold '>
                    {/* <li>
                            <img src="/logoamb.png" alt="logo" className='' />

                        </li> */}
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
            <div className=' md:hidden absolute top-10 right-4'>
                <HamburgerMenu />
            </div>
        </>
    )
}

export default HeroBase