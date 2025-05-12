import Carousel from "@/components/custom/auto-carousel"
import Hero from "@/components/custom/hero,"
import ServiceSection from "../components/custom/sections/services"
import Milestones from "@/components/custom/sections/milestones"

const App = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <Milestones />
      <ServiceSection />
    </>
  )
}

export default App