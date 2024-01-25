import { useEffect, useState } from 'react';
import "../index.css";
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
const ImageSlider = ({ images }: { images: string[] }) => {
    const { ref, inView } = useInView()
    const [isVisible, setIsVisible] = useState(false)
    const [direction, setDirection] = useState("slider-image-right")
    const visibilityHandler = () => {
        setIsVisible(false)
        setTimeout(() => {
            setIsVisible(true)
        }, 10)
    }
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        visibilityHandler()
        setDirection("slider-image-right")
    };
    /*    const prevSlide = () => {
           setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
           visibilityHandler()
           setDirection("slider-image-left")
       }; */

    useEffect(() => {
        visibilityHandler()
        const intervelId = setInterval(() => {
            nextSlide()
        }, 5000);

        return () => clearInterval(intervelId)
    }, [currentIndex])



    return (
        <div className="w-[100%] h-full m-auto flex hideScrollbar" style={{ display: isVisible ? "flex" : "none" }}>
            {/*             <button onClick={prevSlide} className='slider-btn'><FcPrevious /> </button> */}
            <div className={clsx('w-full flex justify-center items-center', inView ? "zoom-in" : "animate-fadeout")} ref={ref}>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={direction} />
            </div>
            {/*         <button onClick={nextSlide} className='slider-btn'><FcNext /></button> */}
        </div>
    );
};
export default ImageSlider