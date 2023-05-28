import { useRouter } from "next/router"
import Image from "next/image"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { headerText, singleText } from "@/utils/animation"
import { useInView } from "react-intersection-observer"

const Projects = () => {

    const router = useRouter()
    const { ref: mediaElement, inView:mediaView } = useInView({ threshold: 1})
    const { ref: element, inView: view } = useInView({ threshold: 1})

    const handleSlider = () => {
        const productContainers = [...document.querySelectorAll('.product-container')];
        const nextbtn = [...document.querySelectorAll('.nextbtn')];
        const prevbtn = [...document.querySelectorAll('.prevbtn')];

        productContainers.forEach((item, i) => {
            let containerWidth = 390;
            
            nextbtn[i].addEventListener('click', () => {
                item.scrollLeft += containerWidth;
            });
            
            prevbtn[i].addEventListener('click', () => {
                item.scrollLeft -= containerWidth;
            });
        });
    }

    useEffect(() => {
        handleSlider()
    }, [])

    return (
        <>
            <section id="projects-sm" className={ router.pathname == '/' ? "w-100 overflow-hidden position-relative mt-5 d-block d-sm-none" : "w-100 overflow-hidden position-relative d-block d-sm-none pt-5 mtop-a" }>
                <div className="container mb-5">
                    <AnimatedWords title="PROJECTS CATALOG" element={mediaElement} inView={mediaView} />
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="product-card w-100">
                                <div className="position-relative overflow-hidden product-card w-100">
                                    <a className="d-block" href="https://glittermars.vercel.app" target="_blank">
                                        {/* <img className="border-0 w-100 h-100 bg-dark" src="/glittermars-preview.svg" style={{border: 'none'}} alt="project_image"  /> */}
                                        <Image className="border-0 w-100 h-100 bg-dark" src="/glittermars-preview.svg" style={{border: 'none'}} width={400} height={400} alt="project_image"  />
                                    </a>
                                </div>
                                <a className="text-decoration-none" href="https://glittermars.vercel.app" target="_blank">
                                    <h5 className="mt-3 mb-2 text-white fw-bold">Glittermars</h5>
                                </a>
                                <p className="mt-0 mb-2">An E-commerce website - The best fashion store for luxury and classy wears.</p>
                                <div className="mb-3">
                                    <span className="badge bg-dark me-2">Bootstrap</span>
                                    <span className="badge bg-dark me-2">Javascript</span>
                                    <span className="badge bg-dark me-2">Typescript</span>
                                    <span className="badge bg-dark me-2">Next.js</span>
                                    <span className="badge bg-dark me-2">Redux</span>
                                    <span className="badge bg-dark me-2">Node.js</span>
                                    <span className="badge bg-dark me-2">PostgresQL</span>
                                    <span className="badge bg-dark me-2">Redis</span>
                                </div>
                                <a className="hero-link" href="https://github.com/iamcodemonga/glittermars" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-github me-2" style={{marginBottom: 3}}>
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>view source code
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="product-card w-100">
                                <div className="position-relative overflow-hidden product-card w-100">
                                    <a className="d-block" href="https://streamheavens.netlify.app" target="_blank">
                                        {/* <img className="border-0 w-100 h-100" src="/streamheavens-preview.svg" style={{border: 'none'}} alt="project_image"  /> */}
                                        <Image className="border-0 w-100 h-100 bg-dark" src="/streamheavens-preview.svg" style={{border: 'none'}} width={400} height={400} alt="project_image"  />
                                    </a>
                                </div>
                                <a className="text-decoration-none" href="https://streamheavens.netlify.app" target="_blank">
                                    <h5 className="mt-3 mb-2 text-white fw-bold">Streamheavens</h5>
                                </a>
                                <p className="mt-0 mb-2">A movie website - Get the latest trending movies and tv shows worldwide.</p>
                                <div className="mb-3">
                                    <span className="badge bg-dark me-2">Bootstrap</span>
                                    <span className="badge bg-dark me-2">Javascript</span>
                                    <span className="badge bg-dark me-2">React.js</span>
                                    <span className="badge bg-dark me-2">Redux</span>
                                    <span className="badge bg-dark me-2">Node.js</span>
                                    <span className="badge bg-dark me-2">MongoDB</span>
                                    <span className="badge bg-dark me-2">TMDB API</span>
                                    <span className="badge bg-dark me-2" />
                                </div>
                                <a className="hero-link" href="https://github.com/iamcodemonga/streamheavens" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-github me-2" style={{marginBottom: 3}}>
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>view source code
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="product-card w-100">
                                <div className="position-relative overflow-hidden product-card w-100">
                                    <a className="d-block" href="https://shidodor.com" target="_blank">
                                        {/* <img className="border-0 w-100 h-100" src="/shidodor-preview.svg" style={{border: 'none'}}  alt="project_image"  /> */}
                                        <Image className="border-0 w-100 h-100 bg-dark" src="/shidodor-preview.svg" style={{border: 'none'}}  width={400} height={400} alt="project_image"  />
                                    </a>
                                </div>
                                <a className="text-decoration-none" href="https://shidodor.com" target="_blank">
                                    <h5 className="mt-3 mb-2 text-white fw-bold">Shidodor</h5>
                                </a>
                                <p className="mt-0 mb-2">A music website - stream and donate to ogene music from shidodor nwankanu.</p>
                                <div className="mb-3">
                                    <span className="badge bg-dark me-2">Bootstrap</span>
                                    <span className="badge bg-dark me-2">Javascript</span>
                                    <span className="badge bg-dark me-2">React.js</span>
                                    <span className="badge bg-dark me-2">Context-API</span>
                                    <span className="badge bg-dark me-2">Node.js</span>
                                    <span className="badge bg-dark me-2">MySQL</span>
                                    <span className="badge bg-dark me-2">Paystack-API</span>
                                    <span className="badge bg-dark me-2" />
                                </div>
                                <a className="hero-link" href="https://github.com/iamcodemonga/shidodor" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-github me-2" style={{marginBottom: 3}}>
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>view source code
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="product-card w-100 pb-1">
                                <div className="position-relative overflow-hidden product-card w-100">
                                    <a className="d-block" href="https://gluecanvas.bss.design" target="_blank">
                                        {/* <img className="border-0 w-100 h-100" src="/gluecanvas-preview.svg" style={{border: 'none'}} alt="project_image"  /> */}
                                        <Image className="border-0 w-100 h-100 bg-dark" src="/gluecanvas-preview.svg" style={{border: 'none'}} width={400} height={400} alt="project_image"  />
                                        <span className="badge bg-danger product-status">in progress</span>
                                    </a>
                                </div>
                                <a className="text-decoration-none" href="https://github.com/iamcodemonga/gluecanvas" target="_blank">
                                    <h5 className="mt-3 mb-2 text-white fw-bold">Gluecanvas</h5>
                                </a>
                                <p className="mt-0 mb-2">An NFT marketplace - create/purchase the best of photos, arts and book NFTs .</p>
                                <div className="mb-3">
                                    <span className="badge bg-dark me-2">Bootstrap</span>
                                    <span className="badge bg-dark me-2">Typescript</span>
                                    <span className="badge bg-dark me-2">Next.js</span>
                                    <span className="badge bg-dark me-2">Node.js</span>
                                    <span className="badge bg-dark me-2">PostgreSQL</span>
                                    <span className="badge bg-dark me-2">Prisma</span>
                                    <span className="badge bg-dark me-2">Redis</span>
                                    <span className="badge bg-dark me-2">Solidity</span>
                                </div>
                                <a className="hero-link" href="https://github.com/iamcodemonga/gluecanvas" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-github me-2" style={{marginBottom: 3}}>
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>view source code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" className={ router.pathname == '/' ? "w-100 overflow-hidden position-relative pb-4 d-none d-sm-block" : "w-100 overflow-hidden position-relative pb-4 d-none d-sm-block mtop-c"}>
                <div className="container mb-5">
                    {/* <h1 className="d-flex">
                        <span className="me-4">PROJECTS</span>
                        <span className="d-none d-sm-block">CATALOG</span>
                    </h1> */}
                    <AnimatedWords title="PROJECTS CATALOG" element={element} inView={view} />
                </div>
                <div className="container product-container">
                    <div className="product-card pb-2">
                        <div className="position-relative overflow-hidden product-card">
                            <a className="d-block" href="https://glittermars.vercel.app" target="_blank">
                                <Image className="border-0 w-100 bg-dark" src="/glittermars-preview.svg" style={{border: 'none'}} width={500} height={350} alt="project_image" />
                            </a>
                        </div>
                        <a className="text-decoration-none" href="https://glittermars.vercel.app" target="_blank">
                            <h5 className="mt-3 mb-2 text-white fw-bold">Glittermars</h5>
                        </a>
                        <p className="mt-0 mb-2">An E-commerce website - The best fashion store for luxury and classy wears.</p>
                        <div className="mb-3">
                            <span className="badge bg-dark me-2">Bootstrap</span>
                            <span className="badge bg-dark me-2">Javascript</span>
                            <span className="badge bg-dark me-2">Typescript</span>
                            <span className="badge bg-dark me-2">Next.js</span>
                            <span className="badge bg-dark me-2">Redux</span>
                            <span className="badge bg-dark me-2">Node.js</span>
                            <span className="badge bg-dark me-2">PostgresQL</span>
                            <span className="badge bg-dark me-2">Redis</span>
                        </div>
                        <a className="hero-link" href="https://github.com/iamcodemonga/glittermars" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-github me-2" style={{marginBottom: 3}}>
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>view source code
                        </a>
                    </div>
                    <div className="product-card pb-2">
                        <div className="position-relative overflow-hidden product-card">
                            <a className="d-block" href="https://streamheavens.netlify.app" target="_blank">
                                <Image className="border-0 w-100 bg-dark" src="/streamheavens-preview.svg" style={{border: 'none'}} width={500} height={350} alt="project_image"  />
                            </a>
                        </div>
                        <a className="text-decoration-none" href="https://streamheavens.netlify.app" target="_blank">
                            <h5 className="mt-3 mb-2 text-white fw-bold">Steamheavens</h5>
                        </a>
                        <p className="mt-0 mb-2">A movie website - Get the latest trending movies and tv shows worldwide.</p>
                        <div className="mb-3">
                            <span className="badge bg-dark me-2">Bootstrap</span>
                            <span className="badge bg-dark me-2">Javascript</span>
                            <span className="badge bg-dark me-2">React.js</span>
                            <span className="badge bg-dark me-2">Redux</span>
                            <span className="badge bg-dark me-2">Node.js</span>
                            <span className="badge bg-dark me-2">MongoDB</span>
                            <span className="badge bg-dark me-2">TMDB API</span>
                            <span className="badge bg-dark me-2" />
                        </div>
                        <a className="hero-link" href="https://github.com/iamcodemonga/streamheavens" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-github me-2" style={{marginBottom: 3}}>
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>view source code
                        </a>
                    </div>
                    <div className="product-card pb-2">
                        <div className="position-relative overflow-hidden product-card">
                            <a className="d-block" href="https://shidodor.com" target="_blank">
                                <Image className="border-0 w-100 bg-dark" src="/shidodor-preview.svg" style={{border: 'none'}} width={500} height={350} alt="project_image"  />
                            </a>
                        </div>
                        <a className="text-decoration-none" href="https://shidodor.com" target="_blank">
                            <h5 className="mt-3 mb-2 text-white fw-bold">Shidodor</h5>
                        </a>
                        <p className="mt-0 mb-2">A music website - listen and donate to ogene music from shidodor nwankanu.</p>
                        <div className="mb-3">
                            <span className="badge bg-dark me-2">Bootstrap</span>
                            <span className="badge bg-dark me-2">Javascript</span>
                            <span className="badge bg-dark me-2">React.js</span>
                            <span className="badge bg-dark me-2">Context-API</span>
                            <span className="badge bg-dark me-2">Node.js</span>
                            <span className="badge bg-dark me-2">MySQL</span>
                            <span className="badge bg-dark me-2">Paystack-API</span>
                            <span className="badge bg-dark me-2" />
                        </div>
                        <a className="hero-link" href="https://github.com/iamcodemonga/shidodor" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-github me-2" style={{marginBottom: 3}}>
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>view source code
                        </a>
                    </div>
                    <div className="product-card pb-2">
                        <div className="position-relative overflow-hidden product-card">
                            <a className="d-block" href="https://gluecanvas.bss.design" target="_blank">
                                <Image className="border-0 w-100 bg-dark" src="/gluecanvas-preview.svg" style={{border: 'none'}} width={500} height={350} alt="project_image"  />
                            </a>
                            <span className="badge bg-danger product-status">in progress</span>
                        </div>
                        <a className="text-decoration-none" href="https://github.com/iamcodemonga/gluecanvas" target="_blank">
                            <h5 className="mt-3 mb-2 text-white fw-bold">Gluecanvas</h5>
                        </a>
                        <p className="mt-0 mb-2">An NFT marketplace - create/purchase the best of photos, arts and book NFTs .</p>
                        <div className="mb-3">
                            <span className="badge bg-dark me-2">Bootstrap</span>
                            <span className="badge bg-dark me-2">Typescript</span>
                            <span className="badge bg-dark me-2">Next.js</span>
                            <span className="badge bg-dark me-2">Node.js</span>
                            <span className="badge bg-dark me-2">PostgreSQL</span>
                            <span className="badge bg-dark me-2">Prisma</span>
                            <span className="badge bg-dark me-2">Redis</span>
                            <span className="badge bg-dark me-2">Solidity</span>
                        </div>
                        <a className="hero-link" href="https://github.com/iamcodemonga/gluecanvas" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-github me-2" style={{marginBottom: 3}}>
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>view source code
                        </a>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="d-flex justify-content-end">
                        <div>
                            <button className="btn btn-light border rounded-pill me-3 prevbtn border-0 px-3" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-left me-2">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>previous
                            </button>
                            <button className="btn btn-light border rounded-pill nextbtn border-0 px-3" type="button">next
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right ms-2">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const AnimatedWords = ({ title, element, inView }) => {
    return (
        <div className="w-100 mx-auto pt-2 d-flex align-items-center justify-content-center overflow-hidden">
            <motion.h1 ref={element} className="d-flex w-100 overflow-hidden" style={{lineHeight:"1.2"}} variants={headerText} initial="initial" animate={inView && "animate"}>
                {title.split(" ").map((word, index) => (
                    <motion.span ref={element} variants={singleText} key={index} className={index == 0 ? "me-4 overflow-hidden py-0" : "d-none d-sm-block overflow-hidden py-0"}>{word}&nbsp;</motion.span>
                ))}
            </motion.h1>
        </div>
    )
}

export default Projects