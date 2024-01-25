import ImageSlider from "../../lib/imageSlider";
import "../../styles/services-page-styles/statisticsService.css";
import { StatisticsBg1, StatisticsBg2 } from "../../utils/services-utils/images";
const StatisitcsService = () => {

    const images = [
        StatisticsBg1, StatisticsBg2
    ]

    return (
        <div className='statistics-service-container hideScrollbar'>
            <ImageSlider images={images} />
        </div>
    )
}

export default StatisitcsService
