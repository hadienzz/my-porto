import frontEndCertificate from '../../public/certificate/front-end-certificate.png'
import jsCertificate from '../../public/certificate/javascript-certificate.jpeg'
import jsIntermediateCertificate from '../../public/certificate/js-intermediate-certificate.jpg'
import responsiveWebCertificate from '../../public/certificate/responsive-web-certificate.jpeg'
import basicFrontEndCertificate from '../../public/certificate/basic-front-end.jpg'
import basicJsCertificate from '../../public/certificate/basic-js.jpg'



const CertificateSection = () => {
    return (
        <div className=''>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="">
                    <img className=" object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={frontEndCertificate.src} alt="Front End Certificate" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="text-3xl font-bold text-white">Front End Engineer</h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                </div>
            </div>
        </div>
    )
}

export default CertificateSection