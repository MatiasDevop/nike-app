import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

//2:07
const Services = () => {
  return (
    <section className="flex flex-wrap justify-center gap-9 max-container ">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services