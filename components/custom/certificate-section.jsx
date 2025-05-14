import frontEndCertificate from '../../public/certificate/front-end-certificate.png'
import jsCertificate from '../../public/certificate/javascript-certificate.jpeg'
import jsIntermediateCertificate from '../../public/certificate/js-intermediate-certificate.jpg'
import responsiveWebCertificate from '../../public/certificate/responsive-web-certificate.jpeg'
import basicFrontEndCertificate from '../../public/certificate/basic-front-end.jpg'
import basicJsCertificate from '../../public/certificate/basic-js.jpg'


const certificates = [
    {
        certificate: frontEndCertificate,
        title: 'Front-End Developer Certification',
        desc: 'Awarded by HackerRank, this certification demonstrates my proficiency in building interactive and dynamic user interfaces using React.js.',
    },
    {
        certificate: basicJsCertificate,
        title: 'Fundamental Front-End Development Certification',
        desc: 'Issued by Dicoding, this certificate validates my foundational skills in HTML, CSS, and JavaScript—core technologies of modern web development.',
    },
    {
        certificate: responsiveWebCertificate,
        title: 'Responsive Web Design Certification',
        desc: 'Also issued by Dicoding, this certification highlights my ability to create responsive, mobile-friendly websites using HTML, CSS, and JavaScript.',
    },
    {
        certificate: basicFrontEndCertificate,
        title: 'Beginner’s Guide to Front-End Development',
        desc: 'Offered by Dicoding, this certification proves my understanding of front-end basics, including building user interfaces with HTML, CSS, and JavaScript.',
    },
    {
        certificate: jsCertificate,
        title: 'JavaScript Programming Certification',
        desc: 'Granted by Dicoding, this certificate confirms my ability to write efficient and structured JavaScript code, covering essential programming concepts.',
    },
    {
        certificate: jsIntermediateCertificate,
        title: 'Intermediate JavaScript Certification',
        desc: 'This certificate from Dicoding demonstrates my skills in advanced JavaScript, including asynchronous programming, modular architecture, and best practices.',
    },
];


const CertificateSection = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-2 bg-gray p-4 rounded-lg bg-[#2125290a] '>
            {certificates.map((item, idx) => (
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30" key={idx}>
                    <div className="">
                        <img className="object-contain transition-transform duration-500 " src={item.certificate.src} alt="Front End Certificate" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 hidden group-hover:flex">
                        <h1 className="text-base font-bold text-white">{item.title}</h1>
                        <p className="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.desc}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default CertificateSection