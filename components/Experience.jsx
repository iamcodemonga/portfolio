import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { headerText, singleText } from "@/utils/animation"
import { useInView } from "react-intersection-observer"

const Experience = () => {

    const router = useRouter()
    const { ref: element, inView } = useInView({ threshold: 1})

    return (
        <section id="experience" className={router.pathname == '/' ? "w-100 overflow-hidden position-relative pt-5 mt-5" : "w-100 overflow-hidden position-relative pt-5 mtop-a"}>
            <div className="container">
                {/* <h1 className="d-flex"><span className="me-4 d-none d-sm-block">WORK</span><span>EXPERIENCE</span></h1> */}
                <AnimatedWords title="WORK EXPERIENCE" element={element} inView={inView} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h5 className="mb-0 mt-4">ALUXHOMES</h5>
                        <p className="my-1">Software Developer</p>
                        <p className="small">11/02/2021 - 18/06/2022</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-start align-content-center skill-block mb-3">
                            <div>
                                <p className="mt-3">A real estate company where users can purchase and invest in lands and properties with their mobile devices.</p>
                                <ul>
                                    <li><span style={{color: 'rgb(190, 190, 190)'}}>Increase property sales by 23% by building trust through simple/minimalistic user friendly design using Bootstrap, Nextjs for great user experience.</span></li>
                                    <li><span style={{color: 'rgb(190, 190, 190)'}}>Implemented good customer service systems and increased customer retention by integrating the tawk.to API chatbot into the Next.js application.</span></li>
                                    <li><span style={{color: 'rgb(190, 190, 190)'}}>Increase customer convertion rate by optimizing website performance and load speed.</span></li>
                                    <li><span style={{color: 'rgb(190, 190, 190)'}}>Enhanced web security through meticulous debugging and vulnerability testing, particularly in the areas of user authentication and authorization.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h5 className="mb-0 mt-4">ENUGU STATE TOURISM BOARD (ESTOURS)</h5>
                        <p className="my-1">Fullstack Web Developer</p>
                        <p className="small">23/09/2019 - 03/08/2020</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-start align-content-center skill-block mb-3">
                            <div>
                                <p className="mt-3">An agency that specializes in connecting tourists to the best hotels, salons, restaurants and recreational centers for better experience in Enugu state, Nigeria.</p>
                                <ul>
                                    <li><span style={{color: 'rgb(190, 190, 190)'}}>Contributed and help increase business traffic by adhering to SEO best practices and writing clean well structured codes.</span></li>
                                    <li><span style={{color: 'rgb(190, 190, 190)'}}>Improved self-confidence through mentorship from experienced senior-developers</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h5 className="mb-0 mt-4">HAKIDEMY</h5>
                        <p className="my-1">Software developer - Intern</p>
                        <p className="small">15/11/2018 - 07/05/2019</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-start align-content-center skill-block mb-3">
                        <div>
                            <p className="mt-3">A company that empowers designers and developers to build great digital products for businesses in Nigeria.</p>
                            <ul>
                                <li><span style={{color: 'rgb(190, 190, 190)'}}>Learned and adapted quickly to new technologies and software applications.</span></li>
                                <li><span style={{color: 'rgb(190, 190, 190)'}}>Collaborated with designers and dev teams to implement user-friendly interfaces that met business goals and convert visitors to customers.</span></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const AnimatedWords = ({ title, element, inView }) => {
    return (
        <div className="w-100 mx-auto pt-2 d-flex align-items-center justify-content-center overflow-hidden">
            <motion.h1 ref={element} className="d-flex w-100 overflow-hidden" style={{lineHeight:"1.2"}} variants={headerText} initial="initial" animate={inView && "animate"}>
                {title.split(" ").map((word, index) => (
                    <motion.span ref={element} variants={singleText} key={index} className={index == 0 ? "me-4 d-none d-sm-block overflow-hidden py-0" : "overflow-hidden py-0"}>{word}&nbsp;</motion.span>
                ))}
            </motion.h1>
        </div>
    )
}

export default Experience