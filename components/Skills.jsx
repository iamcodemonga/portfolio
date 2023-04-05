import { useRouter } from "next/router"

const Skills = () => {

    const router = useRouter()

    return (
        <section id="skills" className={router.pathname == '/skills' ? "w-100 mtop-b" : "w-100"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mb-4">SKILLS</h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-start align-content-center skill-block mb-3">
                            <div className="me-3">
                                <h1>01</h1>
                            </div>
                            <div>
                                <h5 className="mb-2 mt-4">UI/UX Design</h5>
                                <p>My design process begins with UI/UX design where I utilize <strong><span style={{color: 'rgb(255, 255, 255)'}}>FIGMA</span></strong> to create user interfaces that offer exceptional user experience. I start by sketching and designing to achieve the desired outcome.</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start align-content-center skill-block mb-3">
                            <div className="me-3">
                                <h1>02</h1>
                            </div>
                            <div>
                                <h5 className="mb-2 mt-4">Frontend Development</h5>
                                <p>Although I am knowledgable in the foundational languages of web design such as <strong><span style={{color: 'rgb(255, 255, 255)'}}>HTML</span></strong>, <strong><span style={{color: 'rgb(255, 255, 255)'}}>CSS</span></strong>, and <strong><span style={{color: 'rgb(255, 255, 255)'}}>Javascript</span></strong>, I typically employ CSS frameworks such as <strong><span style={{color: 'rgb(255, 255, 255)'}}>tailwindCSS</span></strong> or <strong><span style={{color: 'rgb(255, 255, 255)'}}>Bootstrap </span></strong>for frontend design, and utilize <strong><span style={{color: 'rgb(255, 255, 255)'}}>React.js</span></strong> or <strong><span style={{color: 'rgb(255, 255, 255)'}}>Next.js</span></strong> for development purposes.</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start align-content-center skill-block mb-3">
                            <div className="me-3">
                                <h1>03</h1>
                            </div>
                            <div>
                                <h5 className="mb-2 mt-4">Backend Development</h5>
                                <p>Using <strong><span style={{color: 'rgb(255, 255, 255)'}}>Node.js</span></strong> with the <strong><span style={{color: 'rgb(255, 255, 255)'}}>Express.js</span></strong> framework and <strong><span style={{color: 'rgb(255, 255, 255)'}}>Typescript</span></strong>, I am proficient in establishing communication with various databases such as SQL ( <strong><span style={{color: 'rgb(255, 255, 255)'}}>PostgreSQL</span></strong> and <strong><span style={{color: 'rgb(255, 255, 255)'}}>MySQL</span></strong>), <strong><span style={{color: 'rgb(255, 255, 255)'}}>MongoDB</span></strong>, <strong><span style={{color: 'rgb(255, 255, 255)'}}>GraphQL</span></strong>, and <strong><span style={{color: 'rgb(255, 255, 255)'}}>Redis</span></strong> for the purpose of data caching.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills