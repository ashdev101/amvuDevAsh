import FAService from "../components/services-page-components/FAService"
import SUFStorage from "../components/services-page-components/SUFStorage"
import ServicesTop from "../components/services-page-components/ServicesTop"
const ServicesPage = () => {
    return (
        <div className="bg-[#F6F6F6]">
            <ServicesTop />
            <FAService />
            <SUFStorage />
        </div>
    )
}

export default ServicesPage
