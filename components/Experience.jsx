import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { headerText, singleText } from "@/utils/animation"
import { useInView } from "react-intersection-observer"
import { portfolio } from "@/utils/data"
import WorkSummary from "./WorkSummary"

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
                {portfolio && portfolio.map((exp, index) => <div className="row" key={index}>
                    <div className="col-lg-6">
                        <h5 className="mb-0 mt-4">{exp.company}</h5>
                        <p className="my-1">{exp.role}</p>
                        <p className="small">{exp.date}</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-start align-content-center skill-block mb-3">
                            <div>
                                <p className="mt-3">{exp.company_summary}</p>
                                <WorkSummary summary={exp.doings} />
                            </div>
                        </div>
                    </div>
                </div>)}
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