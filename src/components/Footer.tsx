import { Link } from "react-router-dom";
import "../styles/footer.css";
import { Emails, FollowUsOn, FooterLinks, FooterPolicys, GetTheApp, GmailIcon, Location, LocationIcon, PhoneNumbers, RingIcon, ServicesFooter } from '../utils/footerUtils';



const Footer = () => {

    return (
        <footer className='bg-black text-white w-full xl:h-[368px] lg:py-[40px] opacity-100 z-100 relative'>

            {/* Heading for Small Devices (dotted border bootom) */}
            <div className="border-b border-dotted border-white/50 lg:hidden flex justify-center items-center pt-[20px] pb-[5px]">
                <h3 className="md:text-[20px] sm:text-[18px] text-[16px]" style={{fontFamily:"Kadwa"}}> India's First Unified Health Care Services</h3>
            </div>

            {/* contanet - (Get The App, Follow Us, Know Us, Services, Contact Us) */}
            <div className='flex justify-evenly xl:ml-[100px] lg:ml-[70px] md:ml-[30px] items-start lg:mt-0 mt-[20px]'>

                {/* Get The App, Follow Us */}
                <div className="lg:flex hidden flex-col gap-[30px]">
                    <h3 className="footer-h3 xl:w-full w-[90%] lg:flex hidden" style={{fontFamily:"Kadwa"}}>
                        India's First Unified Health Care Services
                    </h3>
                    {/* Get The App Div */}
                    <div className='flex flex-col gap-[10px]'>
                        <h3 className="footer-h3">Get the app</h3>
                        <div className="flex gap-[10px]">
                            {
                                GetTheApp && GetTheApp.map((link, index) => (
                                    <a href={link.href} key={index}>  <img src={link.icon} alt="PlayStore" className="w-[135] h-[40px]" /></a>
                                ))
                            }
                        </div>
                    </div>

                    {/* Follow Us On Div */}
                    <div className="flex flex-col gap-[10px]">
                        <h3 className='footer-h3'>Follow us on</h3>
                        <div className="flex gap-[10%]">
                            {
                                FollowUsOn && FollowUsOn.map((link, index) => (
                                    <a href={link.href} key={index}><img src={link.icon} alt="PlayStore" className="w-[25] h-[25px]" /></a>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* Know Us  */}
                <div>
                    <h3 className="footer-h3">
                        Know Us
                    </h3>
                    <div className="flex flex-col justify-center items-center lg:gap-[31px] md:gap-[20px] sm:gap-[15px] gap-[12px] lg:mt-[35px] md:mt-[20px] mt-[15px]">
                        {
                            FooterLinks && FooterLinks.map((link, index) => (
                                <Link to={link.href} key={index} className="xl:text-[16px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[10px] font-[700] ">
                                    {link.text}
                                </Link>
                            ))
                        }
                    </div>
                </div>

                {/* Services */}
                <div className="flex flex-col justify-center items-center">
                    <h3 className="footer-h3">
                        Services
                    </h3>
                    <div className="flex flex-col justify-center items-center lg:gap-[31px] md:gap-[20px] sm:gap-[15px] gap-[12px] lg:mt-[35px] md:mt-[20px] mt-[15px]">
                        {
                            ServicesFooter && ServicesFooter.map((service, index) => (
                                <p key={index} className="xl:text-[16px] lg:text-[15px] md:text-[13px] sm:text-[12px] text-[10px] font-[700] ">
                                    {service}
                                </p>
                            ))
                        }
                    </div>
                </div>

                {/* Contact Us */}
                <div className="w-[30%]">
                    <h3 className="footer-h3">
                        Contact Us
                    </h3>
                    <div className="flex flex-col  items-start sm:gap-[10px] gap-[2px] lg:mt-[35px] md:mt-[20px] mt-[15px]">
                        <div className="flex md:gap-[20px] gap-[10px] md:w-[80%] w-[100%]">
                            <img src={LocationIcon} alt="" className="contact-us-icons" />
                            <p className="contact-us-content " >{Location}</p>
                        </div>
                        <div className="flex md:gap-[20px] gap-[10px] md:w-[80%] w-[100%]">
                            <img src={GmailIcon} alt="" className="contact-us-icons" />
                            <div>
                                {
                                    Emails && Emails.map((email, index) => (
                                        <p key={index} className="contact-us-content" >{email}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex md:gap-[20px] gap-[10px] md:w-[80%] w-[100%]">
                            <img src={RingIcon} alt="" className="contact-us-icons" />
                            <div>
                                {
                                    PhoneNumbers && PhoneNumbers.map((email, index) => (
                                        <p key={index} className="contact-us-content" >{email}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* dotted border : content -  (Terms & Conditions, Privacy Policy, Grievance Redressal Policy, Refund Policy) */}
            <div className='lg:flex  hidden justify-between xl:h-[48px] items-center ml-[150px] border-t border-dotted border-white/50 mt-[20px] mx-[100px] '>
                <div className=" flex gap-[40px] justify-center items-center h-full">
                    {
                        FooterPolicys && FooterPolicys.map((policy, index) => (
                            <a href={policy.href} key={index} className="text-[12px] font-[400] " >{policy.text}</a>
                        ))
                    }
                </div>
                <div className="">
                    <p><span className="text-[20px]">©</span> AMBUvians Healthcare Pvt. Ltd.</p>
                </div>
            </div>

            {/*  Get The App, Follow Us For Small Devices   */}
            <div className="flex lg:hidden mt-[30px] justify-evenly ml-[10%] mr-[10%]  gap-[30px]">
                <div className="flex flex-col w-[50%] gap-[10px]">
                    <h3 className='footer-h3'>Follow us on</h3>
                    <div className="flex gap-[10%]">
                        {
                            FollowUsOn && FollowUsOn.map((link, index) => (
                                <a href={link.href} key={index}> <img src={link.icon} alt="PlayStore" className="follow-us-icon" /></a>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col w-[50%] gap-[10px]'>
                    <h3 className="footer-h3">Get the app</h3>
                    <div className="flex gap-[10px]">
                        {
                            GetTheApp && GetTheApp.map((link, index) => (
                                <a href={link.href} key={index}> <img src={link.icon} alt="PlayStore" className="get-app-icon" /></a>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* content for small Devices -  (Terms & Conditions, Privacy Policy, Grievance Redressal Policy, Refund Policy) */}
            <div className='flex  lg:hidden justify-between xl:h-[48px] items-center md:ml-[50px] ml-[16px] mx-[5px] py-[20px]'>
                <div className="">
                    <p className="lg:text-[20px] md:text-[16px] sm:text-[14px] text-[13px]"><span className="]">©</span> AMBUvians Healthcare Pvt. Ltd.</p>
                </div>
                <div className=" flex flex-wrap sm:gap-[10px] gap-[10px] justify-center items-center h-full">
                    {
                        FooterPolicys && FooterPolicys.map((policy, index) => (
                            <a href={policy.href} key={index} className="text-[10px] font-[400] " >{policy.text}</a>
                        ))
                    }
                </div>
            </div>

        </footer>
    )
}

export default Footer
