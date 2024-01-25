import {
    Body,
    Container,
    Column,
    Head,
    Html,
    Img,
    Link,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

type OrderConformation = {
    name: string
}

export const WelcomeEmail = ({ name }: OrderConformation) => {

    return (
        <Html>
            <Head />
            <Tailwind>
                <Body className=" max-w-[650px] min-w-[550px] shadow-lg">
                    <Container className=" border m-auto bg-[rgb(255,255,255)] font-sans text-xl ">

                        <Section className=' border-t border-b'>
                            <Img
                                className=' w-[600px] h-[300px] object-contain object-center '
                                src={"/logoamb.png"} />
                        </Section>

                        <Section className=' border-t border-b bg-[#F7F1F7]'>
                            <Img
                                className=' w-[300px] h-[150px] m-auto object-contain object-center'
                                src={"/logoamb.png"} />
                        </Section>
                        <Section className=' text-center px-4 border-t bg-[#F7F1F7] '>
                            <Text className=' font-bold text-4xl text-rose-500 '>Hii {name}</Text>
                        </Section>
                        <Section className='  border-b bg-[#F7F1F7]'>
                            <Text className='  text-xl px-4'>Thank you for reaching out to <strong>Ambuvians!</strong> We have received your valuable feedback and query, and we appreciate you taking the time to share your thoughts with us.</Text>
                        </Section>

                        <Container className=' border-t border-b'>
                            <Row>

                                <Column className=' w-[calc(100%-200px)] pr-16 pl-4'>
                                    <Text >Our dedicated customer support team is already on the case and will get back to you within the next 48 hours. We want to assure you that your satisfaction is our priority, and we are committed to addressing your concerns promptly.</Text>
                                </Column>

                                <Column className=' w-[150px] ml-4 '>
                                    <Img
                                        className=' w-full h-[150px]  object-contain'
                                        src={"/logoamb.png"} />
                                </Column>

                            </Row>
                        </Container>

                        <Section className=' border-t border-b'>
                            <Text className=' font-bold text-xl px-4'>In the meantime, we encourage you to stay healthy and keep smiling. Your feedback is incredibly important to us, as every life is precious, and so is your opinion.</Text>
                        </Section>

                        <Container className=' border-t border-b '>
                            <Row className=' w-20 h-14'>
                                <Column className=''> <CiFacebook size={25} /></Column>
                                <Column><CiInstagram size={25} className=' ml-5' /></Column>
                                <Column><CiLinkedin size={25} className=' ml-5' /></Column>
                                <Column><FaWhatsapp size={25} className=' ml-5' /></Column>

                            </Row>
                        </Container>

                        <Section className=' '>
                            <Text className='  text-lg text-center px-10 '>If you have any questions, feel free to message us at <Link className=' text-blue-400 font-bold'>support@ambuvians.in</Link>.  All rights reserved. Update email preferences or unsubscribe.</Text>
                        </Section>

                        <Section className=' '>
                            <Text className='  text-lg text-center px-10 '>4th Floor TBI KIET Group of Institutions Ghaziabad 201206 </Text>
                        </Section>
                        <Section className=' '>
                            <Text className='  text-lg text-center px-10 '>8630729931</Text>
                            <Text className=' text-center'>Terms of use | Privacy policy</Text>
                        </Section>
                    </Container>
                    
                </Body>
            </Tailwind>
        </Html>
    );
};

