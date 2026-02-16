
import React, { useEffect } from 'react';
import { initAnimations } from './js/index';
import projectData from './data/project-data.json';
import { FeyButton } from './components/ui/fey-button';
import { Accordion05 } from './components/ui/accordion-05';
import AboutHero from "./components/ui/AboutHero";

const set1 = projectData.slice(0, 4);

function App() {
    useEffect(() => {
        // Initialize animations and scroll after the component mounts
        const timer = setTimeout(() => {
            const scroll = initAnimations() as any;
            // Force a refresh after 1s to handle components that might resize (like Accordions)
            setTimeout(() => {
                if (scroll && typeof scroll.update === 'function') {
                    scroll.update();
                }
            }, 1000);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="home" data-scroll-container="">
            <nav className="home__nav">
                <div className="home__nav__left">
                    <div className="nav__name" nav-anim="">
                        <span>
                            Pradeep Molleti
                        </span>
                    </div>

                    <div className="nav__folio hide-mobile" nav-anim="">
                        <span>
                            MERN stack Developer
                        </span>
                    </div>
                </div>

                <div className="home__nav__right">
                    <div className="nav__folio hide-desktop" nav-anim="">
                        MERN stack Developer
                    </div>

                    <div className="nav__availability" nav-anim=""></div>

                    <FeyButton className="nav__button contact-scroll" nav-anim="">
                        contact
                    </FeyButton>
                </div>
            </nav>

            <section className="home__hero">
                <div className="hero__title">
                    <h1 className="mobile">
                        MERN <br />
                        — STACK <br />
                        DEVELOPER
                    </h1>
                    <div className="hero__title__top overflow desktop">
                        <div className="hero__title__top" title-overflow="">
                            <span className="hero__title__left" data-scroll="" data-scroll-direction="horizontal" data-scroll-position="top"
                                data-scroll-speed="7">
                                <span className="hero__hover">M</span>
                                <span className="hero__hover">E</span>
                                <span className="hero__hover">R</span>
                                <span className="hero__hover">N</span>
                            </span>

                            <span className="hero__title__dash desktop">—</span>

                            <span className="hero__title__right" data-scroll="" data-scroll-direction="horizontal"
                                data-scroll-position="top" data-scroll-speed="-7">
                                <span className="hero__hover">S</span>
                                <span className="hero__hover">T</span>
                                <span className="hero__hover">A</span>
                                <span className="hero__hover">C</span>
                                <span className="hero__hover">K</span>
                            </span>
                        </div>
                    </div>

                    <span className="hero__title__bottom overflow">
                        <div className="hero__title__bottom">
                            <h1 className="bottom__left desktop" title-overflow="">
                                <span className="hero__hover">D</span>
                                <span className="hero__hover">E</span>
                                <span className="hero__hover">V</span>
                                <span className="hero__hover">E</span>
                                <span className="hero__hover">L</span>
                                <span className="hero__hover">O</span>
                                <span className="hero__hover">P</span>
                                <span className="hero__hover">E</span>
                                <span className="hero__hover">R</span>
                            </h1>
                            <div className="bottom__right">
                                <p className="hero__paragraph">
                                    <span className="first-word">About</span> &nbsp; Enthusiastic Full Stack Developer eager to build innovative
                                    full-stack web applications and grow through real-world projects, <span>STAR SHOT,</span>
                                    <span>Paystack,</span> <span>Heva Health,</span>
                                    <span>Disney,</span> <span>Jelly,</span> and
                                    <span>Null</span>
                                    amongst others to achieve this.
                                </p>
                                <div className="hero__scroll flex items-center gap-3">
                                    <div className="w-5 h-8 border-2 border-white/20 rounded-full relative overflow-hidden">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute top-2 left-1/2 -translate-x-1/2 w-5 h-5 text-primary animate-scroll-dash"
                                        >
                                            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-[9px] uppercase tracking-[0.3em] font-medium opacity-40">Scroll</p>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </section>

            <section
                className="home__about pt-12 md:flex md:items-center px-6 md:px-[6rem] gap-12"
                id="about-section"
            >
                {/* LEFT SIDE */}
                <div className="w-full md:w-1/2">
                    <Accordion05 />
                </div>

                {/* RIGHT SIDE */}
                <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
                    <AboutHero />
                </div>
            </section>



            <section className="home__contact pt-6">
                <div className="home__projects__project__label">
                    <div className="label__inner label-1">
                        <p>SKILLS &amp; TECHNOLOGIES</p>
                    </div>
                </div>

                <div className="marquee">
                    <a href="mailto:pradeepmolleti09@gmail.com?subject=Lets%20work%20together!&body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
                        className="marquee__wrap">
                        <div className="marquee__inner">
                            <span aria-hidden="true" className="inner-span">
                                <span className="slide-up" data-content=" HTML — CSS — JavaScript — React — Node.js — Express.js — MongoDB — MySQL — Java — C — VsCode — IntelliJ —
              Git — GitHub — " aria-hidden="true"></span>
                                HTML — CSS — JavaScript — React — Node.js — Express.js — MongoDB — MySQL — Java — C — VsCode — IntelliJ —
                                Git — GitHub — </span>
                            <span className="inner-span">
                                <span className="slide-up" data-content=" HTML — CSS — JavaScript — React — Node.js — Express.js — MongoDB — MySQL — Java — C — VsCode — IntelliJ —
              Git — GitHub —" aria-hidden="true"></span>
                                HTML — CSS — JavaScript — React — Node.js — Express.js — MongoDB — MySQL — Java — C — VsCode — IntelliJ —
                                Git — GitHub — </span>
                        </div>
                    </a>
                </div>

                <p className="home__contact__desc">
                    Learning, building, and growing as a Full Stack Developer, focused on creating scalable and user-friendly
                    applications.
                </p>
            </section>

            <section className="home__projects pt-6" data-projects-section-1="">
                {set1.map((project, index) => {
                    const isEven = index % 2 === 0;
                    const lineDirection = isEven ? "left" : "right";
                    const scrollSpeed = isEven ? 8 : -8;
                    const scrollDirection = isEven ? "right" : "left";
                    const featured = index === 0;

                    return (
                        <React.Fragment key={project.id || index}>
                            <div className={'home__projects__line ' + lineDirection}>
                                <span></span>
                            </div>
                            <div className={`home__projects__project ${scrollDirection}`}>
                                <div className="home__projects__project__label">
                                    {featured ? (
                                        <div className="label__inner label-1">
                                            <p>FEATURED <br /> PROJECTS ({projectData.length})</p>
                                            <p dangerouslySetInnerHTML={{ __html: project.role }} />
                                        </div>
                                    ) : (
                                        <div className="label__inner">
                                            <p dangerouslySetInnerHTML={{ __html: project.role }} />
                                        </div>
                                    )}
                                </div>

                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="home__projects__project__link">
                                    <h1 className="home__projects__project__title" data-scroll="" data-scroll-direction="horizontal" data-scroll-speed={scrollSpeed}>
                                        <span className="inline-ovh">
                                            <div className={`title__main ${scrollDirection}`}>
                                                <span className="slide-up" data-content={project.title} aria-hidden="true"></span>
                                                {project.title}
                                            </div>
                                        </span>
                                    </h1>
                                </a>
                            </div>
                        </React.Fragment>
                    );
                })}
                <div className="home__projects__line left">
                    <span></span>
                </div>
            </section>


            <section className="home__awards pt-30">
                <div className="home__awards__left">
                    <h2 className="awards__title">
                        <span>Milestones X </span><br />
                        <span>EXPERIENCE</span>
                    </h2>
                    <div className="home__awards__table">
                        <div className="awards__item" data-fade-in="">
                            Lead Architect ⏤ Next-Gen MERN Apps
                        </div>
                        <div className="awards__item" data-fade-in="">
                            10+ Production Grade Scalable Solutions
                        </div>
                        <div className="awards__item" data-fade-in="">
                            Specialist ⏤ Performance Optimization
                        </div>
                        <div className="awards__item" data-fade-in="">
                            Open Source Contributor ⏤ UI Systems
                        </div>
                        <div className="awards__item" data-fade-in="">
                        </div>
                    </div>
                </div>

                <div className="home__awards__right">
                    <div className="home__awards__stack" data-fade-in="">
                        <h2 className="home__content__title">Interests</h2>
                        <p className="home__content__desc">
                            Designing, Art, Creative Development, E-Commerce,
                            Webflow, 3D/Augmented Reality <br />
                            <a href="https://github.com/PradeepMolleti-09" target="_blank" rel="noopener noreferrer">See my Github</a>
                        </p>
                    </div>

                    <div className="home__awards__ice" data-fade-in="">
                        <h2 className="home__content__title">ICEBREAKERS</h2>
                        <p className="home__content__desc">
                            I like traveling and good food (work with me so I can fund this).
                            <FeyButton className="contact-scroll">
                                GET IN TOUCH
                            </FeyButton>
                            about me.
                        </p>
                    </div>
                </div>
            </section>

            <section className="home__contact pt-4">
                <div className="marquee">
                    <a href="mailto:pradeepmolleti09@gmail.com"
                        className="marquee__wrap"
                        onClick={(e) => {
                            e.preventDefault();
                            const email = "pradeepmolleti09@gmail.com";
                            navigator.clipboard.writeText(email);
                            const status = document.getElementById("copy-status");
                            if (status) {
                                status.textContent = "EMAIL COPIED!";
                                status.classList.remove("opacity-0");
                                status.classList.add("opacity-100");
                                setTimeout(() => {
                                    status.classList.remove("opacity-100");
                                    status.classList.add("opacity-0");
                                }, 2500);
                            }
                        }}
                    >
                        <div className="marquee__inner">
                            <span aria-hidden="true" className="inner-span">
                                <span className="slide-up" data-content=" LET'S TALK ⏤ GET IN TOUCH ⏤ CLICK TO COPY ⏤ PRADEEPMOLLETI09@GMAIL.COM ⏤ LET'S TALK ⏤ GET IN TOUCH ⏤ CLICK TO COPY ⏤ PRADEEPMOLLETI09@GMAIL.COM ⏤  " aria-hidden="true"></span>
                                LET'S TALK ⏤ GET IN TOUCH ⏤ CLICK TO COPY ⏤ PRADEEPMOLLETI09@GMAIL.COM ⏤ LET'S TALK ⏤ GET IN TOUCH ⏤ CLICK TO COPY ⏤ PRADEEPMOLLETI09@GMAIL.COM ⏤ </span>
                            <span className="inner-span">
                                <span className="slide-up" data-content=" LET'S TALK ⏤ GET IN TOUCH ⏤ CLICK TO COPY ⏤ PRADEEPMOLLETI09@GMAIL.COM ⏤ LET'S TALK ⏤ GET IN TOUCH ⏤ CLICK TO COPY ⏤ PRADEEPMOLLETI09@GMAIL.COM ⏤ " aria-hidden="true"></span>
                                LET'S TALK ⏤ GET IN TOUCH ⏤ CLICK TO COPY ⏤ PRADEEPMOLLETI09@GMAIL.COM ⏤ LET'S TALK ⏤ GET IN TOUCH ⏤ CLICK TO COPY ⏤ PRADEEPMOLLETI09@GMAIL.COM ⏤ </span>
                        </div>
                    </a>
                </div>

                <div className="flex justify-center mb-8 h-4">
                    <span id="copy-status" className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase opacity-0 transition-all duration-500">
                        &nbsp;
                    </span>
                </div>

                <p className="home__contact__desc">
                    Got a question, proposal or project or want to work together on
                    something? Feel free to reach out.
                </p>
            </section>

            <footer className="home__footer mt-32 border-t border-white/5 pt-20 pb-10" id="js-footer">
                <div className="home__footer__center px-6 md:px-[6rem]">
                    <div className="mb-20 overflow-hidden" data-fade-in="">
                        <h2 className="font-bebas text-7xl md:text-[12rem] lg:text-[15rem] leading-[0.85] text-white/10 uppercase tracking-tighter">
                            SYSTEMS <br />
                            ARCHITECT <span className="text-primary italic">X</span> CODE
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                        <div className="space-y-6" data-fade-in="">
                            <h3 className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Social Discovery</h3>
                            <div className="flex flex-wrap gap-2">
                                <a href="https://github.com/PradeepMolleti-09" target="_blank" rel="noopener noreferrer">
                                    <FeyButton>GITHUB</FeyButton>
                                </a>
                                <a href="https://linkedin.com/in/pradeep-molleti" target="_blank" rel="noopener noreferrer">
                                    <FeyButton>LINKEDIN</FeyButton>
                                </a>
                                <a href="https://www.instagram.com/pradeep_molleti_09/" target="_blank" rel="noopener noreferrer">
                                    <FeyButton>INSTAGRAM</FeyButton>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6" data-fade-in="">
                            <h3 className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Current Status</h3>
                            <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
                                Currently available for architecting complex MERN applications and strategic collaborations.
                            </p>
                        </div>

                        <div className="space-y-6" data-fade-in="">
                            <h3 className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Location</h3>
                            <p className="text-white/40 text-sm leading-relaxed">
                                Andhra Pradesh, India <br />
                                17.3850° N, 78.4867° E
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 items-center pt-10 border-t border-white/5 gap-6" data-fade-in="">
                        <div className="text-[10px] text-white/20 tracking-widest uppercase text-center md:text-left">
                            © 2024 PRADEEP MOLLETI. ALL RIGHTS RESERVED.
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="text-[10px] text-white/40 hover:text-primary tracking-[0.4em] uppercase transition-colors duration-300 flex items-center gap-2 group"
                            >
                                <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span> BACK TO TOP
                            </button>
                        </div>

                        <div className="text-[10px] text-white/20 tracking-widest uppercase flex items-center justify-center md:justify-end gap-2">
                            BUILT WITH <span className="text-primary italic">MERN</span>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default App;
