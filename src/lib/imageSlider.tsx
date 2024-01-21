import { useEffect, useState } from 'react';
import { FcNext, FcPrevious } from "react-icons/fc";
import "../index.css"
const ImageSlider = ({ images }: { images: string[] }) => {
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
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        visibilityHandler()
        setDirection("slider-image-left")
    };

    useEffect(() => {
        visibilityHandler()
        const intervelId = setInterval(() => {
            nextSlide()
        }, 5000);

        return () => clearInterval(intervelId)
    }, [currentIndex])

    return (
        <div className="xl:w-[80%] w-[92%] h-full m-auto flex hideScrollbar" style={{ display: isVisible ? "flex" : "none" }}>
            <button onClick={prevSlide} className='slider-btn'><FcPrevious /> </button>
            <div className='w-full flex justify-center items-center'>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={direction} />
            </div>
            <button onClick={nextSlide} className='slider-btn'><FcNext /></button>
        </div>
    );
};
export default ImageSlider