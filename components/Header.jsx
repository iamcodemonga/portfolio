import Link from "next/link"

const Header = () => {
  return (
    <header id="hero" className="w-100 pt-5 overflow-hidden">
        <div className="container min-vh-100 d-flex flex-column justify-content-center">
            <div className="row g-5">
                <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 align-self-center">
                    <div>
                        <small className="spacer-text text-white-50">Hi there! I'm&nbsp;<strong><span style={{color: 'rgb(163, 51, 167)'}}>Emmanuel Ufot</span></strong></small>
                        <h2 className="mt-1">Software developer and content creator.</h2>
                        <p>I specialize in creating high-performance web applications that enhance brand identity. In addition, I provide support and encouragement to fellow software developers in their effort to build robust, industry-standard softwares.</p>
                        <Link className="me-4 hero-link" href="projects">View Projects</Link>
                        <span className="me-4 text-white-50">or</span>
                        <a className="hero-link" href="mailto:codemonga@gmail.com" target="_blank">Contact Me</a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                    <div><img className="w-100" src="/codemonga.jpg" /></div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header