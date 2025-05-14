import CertificateSection from "../certificate-section"

const Milestones = () => {
    return (
        <section className="px-3 sm:px-5 md:px-7 lg:px-9  font-inter md:max-w-[1200px] gap-5 mx-auto md:text-center text-start ">
            <div className="pt-20">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-stone-900">Professional Certifications</h1>
                <p className="my-5 text-xl max-w-[620px] text-prim leading-[1.2] md:mx-auto">A curated collection of certifications I've earned across various leading learning platforms, reflecting my commitment to continuous growth and excellence in the field.</p>
            </div>
            <CertificateSection />
        </section>
    )
}

export default Milestones