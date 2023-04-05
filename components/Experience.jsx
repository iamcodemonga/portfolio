import { useRouter } from "next/router"

const Experience = () => {

    const router = useRouter()

    return (
        <section id="experience" className={router.pathname == '/' ? "w-100 overflow-hidden position-relative pt-5 mt-5" : "w-100 overflow-hidden position-relative pt-5 mtop-a"}>
            <div className="container">
                <h1 className="d-flex"><span className="me-4 d-none d-sm-block">WORK</span><span>EXPERIENCE</span></h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h5 className="mb-0 mt-4">CREEDBOX</h5>
                        <p className="my-1">Senior web developer</p>
                        <p className="small">dd/mm/yyyy - dd/mm/yyyy</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-start align-content-center skill-block mb-3">
                            <div>
                                <p className="mt-3">An agency that focuses on creating digital products for businesses and organisations, while also providing developer education.</p>
                                <ul>
                                    <li><span style={{color: 'rgb(190, 190, 190)'}}>Trained and mentored junior developers to help accelerate the project's development timeline.</span></li>
                                    <li><span style={{color: 'rgb(190, 190, 190)'}}>Lead a team of software developers in transforming diverse business logic into web applications with optimal performance..</span></li>
                                    <li><span style={{color: 'rgb(190, 190, 190)'}}>Enhanced the team's work-rate through good communication and&nbsp; constant motivational dialogs.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h5 className="mb-0 mt-4">ALUXHOMES</h5>
                        <p className="my-1">Fullstack software developer</p>
                        <p className="small">dd/mm/yyyy - dd/mm/yyyy</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-start align-content-center skill-block mb-3">
                            <div>
                                <p className="mt-3">A real estate company where you can purchase and invest in properties with just your mobile phone.</p>
                                <ul>
                                    <li><span style={{color: 'rgb(190, 190, 190)'}}>Increase property sales by building trust through simple/minimalistic user friendly design and implementation of good customer service systems.</span></li>
                                    <li><span style={{color: 'rgb(190, 190, 190)'}}>Increase customer convertion rate by optimizing website performance and load speed.</span></li>
                                    <li><span style={{color: 'rgb(190, 190, 190)'}}>Enhanced web security through meticulous debugging and vulnerability testing, particularly in the areas of user authentification and authorization.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h5 className="mb-0 mt-4">ENUGU STATE TOURISM BOARD (ESTOURS)</h5>
                        <p className="my-1">Junior software developer</p>
                        <p className="small">dd/mm/yyyy - dd/mm/yyyy</p>
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
                        <p className="small">dd/mm/yyyy - dd/mm/yyyy</p>
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

export default Experience