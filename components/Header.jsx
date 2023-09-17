import Link from "next/link"
import { motion } from "framer-motion"
import { headerImage, headerText, staggerChildren, singleText } from "@/utils/animation"
import { codemonga } from "@/utils/data"

const Header = () => {
  return (
    <header id="hero" className="w-100 pt-5 overflow-hidden">
        <div className="container min-vh-100 d-flex flex-column justify-content-center">
            <div className="row g-5">
                <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 align-self-center">
                    <div>
                        <small className="spacer-text text-white-50">Hi there! I'm&nbsp;<strong><span style={{color: 'rgb(163, 51, 167)'}}>{codemonga.fullname}</span></strong></small>
                        <div>
                            <AnimatedWords title={codemonga.title} />
                        </div>
                        <p>{codemonga.summary}</p>
                        <Link className="me-4 hero-link" href="projects">View Projects</Link>
                        <span className="me-4 text-white-50">or</span>
                        <a className="hero-link" href={`mailto:${codemonga.email}`} target="_blank">Contact Me</a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                    <div>
                        <motion.img className="w-100" src={codemonga.photo} variants={headerImage} initial="initial" animate="animate" />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

const AnimatedWords = ({ title }) => {
    return (
        <div className="w-100 mx-auto pt-2 d-flex align-items-center justify-content-center overflow-hidden">
            <motion.h2 className="d-inline-block w-100 mt-2 overflow-hidden" style={{lineHeight:"1.2"}} variants={headerText} initial="initial" animate="animate">
                {title.split(" ").map((word, index) => (
                    <motion.span variants={singleText} key={index} className="d-inline-block overflow-hidden py-0">{word}&nbsp;</motion.span>
                ))}
            </motion.h2>
        </div>
    )
}

export default Header