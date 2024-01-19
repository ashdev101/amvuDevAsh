import "../../styles/services-page-styles/statisticsService.css";
import formatNumber from "../../lib/formateNumber";
const StatisitcsService = () => {
    const statisticsServices = {
        medicalCenters: 300,
        professionalDoctors: 200,
        customers: 5300
    }

    return (
        <div className='statistics-service-container'>
            <div className="statistics-service-box">
                <p className="statistics-service-count">
                    {formatNumber(statisticsServices.medicalCenters)}+
                </p>
                <p className="statistics-service-text">Medical Centers</p>
            </div>
            <div className="statistics-service-box">
                <p className="statistics-service-count">
                    {formatNumber(statisticsServices.professionalDoctors)}+
                </p>
                <p className="statistics-service-text">Professional Doctors</p>
            </div>
            <div className="statistics-service-box">
                <p className="statistics-service-count">
                    {formatNumber(statisticsServices.customers)}+
                </p>
                <p className="statistics-service-text">Customers</p>
            </div>
        </div>
    )
}

export default StatisitcsService
