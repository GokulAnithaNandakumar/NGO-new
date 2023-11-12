const Involv = () => {
    return (
        <div>
            <header>
                <nav id="mainNavbar" className="navbar navbar-light bg-light navbar-expand-md py-0">
                    <a className="navbar-brand" href="../index.html">
                        <img src="../assets/Educatalyst__1_-removebg-preview.png" id="logo" className="d-inline-block align-top" alt="" loading="lazy" />
                    </a>
                    <button id="hamburger" className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="../index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="../aboutus.html">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="../project.html">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="../events.html">Get Involved</a>
                            </li>
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="../contact.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <div>
                <h1>Upcoming Events</h1>
            </div>
            <section className="container-fluid px-0">
                <div className="row align-items-center">
                    <div className="col-lg-1"></div>
                    <div className="col-lg flipbox">
                        <li class="card" aria-labelledby="event card">
                            <div class="card__filter">
                                <img class="card__photo" src="../assets/Educatalyst.png" alt="A man in colorful clothing with the sun behind him on a beach."></img>
                            </div>
                            <div class="card__container">
                                <h2>Workshop</h2>
                                <time>Friday, December 10 • 7:00AM</time>
                                <p>VIT Vellore, <abbr title="Florida">IN</abbr></p>
                                <a class="card__location" href="https://maps.app.goo.gl/DXegbAN2YG6HoT1H6">Anna Auditorium</a>
                                <div class="card__buttons">
                                    <a href="#" class="card__buttons btn primary" role="button" aria-haspopup="false">
                                        Details
                                        <div class="card__fill"></div>
                                    </a>
                                    <a href="#" class="card__buttons btn secondary" role="button" aria-haspopup="false">
                                        Tickets
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </div>


                    <div className="col-lg flipbox">
                        <li class="card" aria-labelledby="event card">
                            <div class="card__filter">
                                <img class="card__photo" src="../assets/Educatalyst.png" alt="A man in colorful clothing with the sun behind him on a beach."></img>
                            </div>
                            <div class="card__container">
                                <h2>Meet</h2>
                                <time>Friday, December 10 • 7:00AM</time>
                                <p>VIT Vellore, <abbr title="Florida">IN</abbr></p>
                                <a class="card__location" href="https://maps.app.goo.gl/DXegbAN2YG6HoT1H6">Anna Auditorium</a>
                                <div class="card__buttons">
                                    <a href="#" class="card__buttons btn primary" role="button" aria-haspopup="false">
                                        Details
                                        <div class="card__fill"></div>
                                    </a>
                                    <a href="#" class="card__buttons btn secondary" role="button" aria-haspopup="false">
                                        Tickets
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </div>



                    <div className="col-lg flipbox">
                        <li class="card" aria-labelledby="event card">
                            <div class="card__filter">
                                <img class="card__photo" src="../assets/Educatalyst.png" alt="A man in colorful clothing with the sun behind him on a beach."></img>
                            </div>
                            <div class="card__container">
                                <h2>Get Together</h2>
                                <time>Friday, December 10 • 7:00AM</time>
                                <p>VIT Vellore, <abbr title="Florida">IN</abbr></p>
                                <a class="card__location" href="https://maps.app.goo.gl/DXegbAN2YG6HoT1H6">Anna Auditorium</a>
                                <div class="card__buttons">
                                    <a href="#" class="card__buttons btn primary" role="button" aria-haspopup="false">
                                        Details
                                        <div class="card__fill"></div>
                                    </a>
                                    <a href="#" class="card__buttons btn secondary" role="button" aria-haspopup="false">
                                        Tickets
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </section>

        </div>
    )
}

ReactDOM.render(<Involv />, document.getElementById('involve'))