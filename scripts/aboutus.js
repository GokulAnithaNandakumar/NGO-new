
const App = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-light bg-light navbar-expand-md py-0">
                    <a className="navbar-brand" href="../index.html">
                        <img
                            src="../assets/Educatalyst__1_-removebg-preview.png"
                            id="logo"
                            className="d-inline-block align-top"
                            alt=""
                            loading="lazy"
                        />
                    </a>
                    <button
                        id="hamburger"
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="../index.html">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="../aboutus.html">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="../project.html">
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="../involve.html">
                                    Get Involved
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    id="links"
                                    className="nav-link"
                                    href="../contact.html"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <div className="row container-fluid">
                <div className="col-xl-1"></div>
                <div className="col-xl-5">
                    <iframe
                        width="500"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/6fNTdBEX3Vo?si=G34SHJfVRKNqiYvf&;start=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="col-xl-5 flipbox">
                    <div id="flipboxback">
                        <h1><b>About Educatalyst</b></h1>
                        <h4 className="text-center">Save the Children believes every child deserves a future. <br />
                            <br />
                            Our founder <a href="#"> xyz</a> saw children dying of starvation and wracked with disease after at
                            the
                            end of the 20th century. So, in 2000, she launched the Save the Children Fund to raise much-needed
                            funds
                            to
                            end children’s suffering across India.
                            <br />
                            <br />
                            Today, over 100 years later, we work in <a href="https://en.wikipedia.org/wiki/India">India</a> and
                            around the world to give children a
                            healthy start in life, the opportunity to learn and protection from harm. When crisis strikes and
                            children are most vulnerable, we are always among the first to respond and the last to leave. We do
                            whatever it takes for children - every day and in times of crisis transforming their lives and the
                            future we share.
                        </h4>
                    </div>
                    <div id="flipboxfront" className="text-center mt-5">
                        <h1>Educatalyst</h1>
                        <h2><b>Educating Dreams, Empowering Futures</b></h2>
                        <h3>"The function of education is to teach one to think intensively and to think critically.
                            Intelligence plus character - that is the goal of true education." - <span> Martin Luther King Jr.</span>
                        </h3>
                    </div>
                </div>


                <div className="col-xl-1"></div>
            </div>

            <div className="container">
                <div className="col-md-12 text-center">
                    <button id="btn1"><a href="../donate.html">Donate Now</a></button>
                </div>
            </div>

            <section>
                <div className="container text-center col-lg">
                    <h1>Our Values</h1>
                    <h3>At Save the Children, we live by five Core Values: <br />
                        <br />
                        <div class="popover__wrapper">
                            <a href="#">
                                <h2 class="popover__title">Accountability</h2>
                            </a>
                            <div class="popover__content">
                                <p class="popover__message">"Accountability is at the core of our mission at Educatalyst. We are committed to transparency and responsibility in all our endeavors. Our dedicated team ensures that every contribution is utilized efficiently and effectively to make a lasting impact on the lives of underprivileged children. We believe in being answerable to our donors, partners, and the communities we serve, fostering trust and creating positive change together. Join us in our journey towards accountable and impactful education initiatives."

                                </p>
                                <img alt="" src="../assets/Educatalyst.png"></img>
                            </div>
                        </div>
                        <br />
                        <div class="popover__wrapper">
                            <a href="#">
                                <h2 class="popover__title">Integration</h2>
                            </a>
                            <div class="popover__content">
                                <p class="popover__message">"At Educatalyst, we champion integration—bringing together diverse perspectives, ideas, and resources. By fostering collaboration and unity, we create a holistic approach to education that addresses the multifaceted needs of underprivileged children. Together, we integrate compassion, innovation, and dedication for a brighter future."

                                </p>
                                <img alt="" src="../assets/Educatalyst.png"></img>
                            </div>
                        </div>
                        <br />
                        <div class="popover__wrapper">
                            <a href="#">
                                <h2 class="popover__title">Ambition</h2>
                            </a>
                            <div class="popover__content">
                                <p class="popover__message">"Ambition fuels our mission at Educatalyst. We aspire to break barriers and transform the landscape of education for underprivileged children. With unwavering determination, we dream big, set audacious goals, and work tirelessly to achieve them. Join us in our ambitious pursuit of empowering young minds."

                                </p>
                                <img alt="" src="../assets/Educatalyst.png"></img>
                            </div>
                        </div>
                        <br />
                        <div class="popover__wrapper">
                            <a href="#">
                                <h2 class="popover__title">Collaboration</h2>
                            </a>
                            <div class="popover__content">
                                <p class="popover__message">"Collaboration is the cornerstone of our impact. At Educatalyst, we believe in the power of partnerships. By collaborating with communities, donors, and like-minded organizations, we amplify our collective strength to create meaningful change. Together, we build a network of support that empowers education for all."

                                </p>
                                <img alt="" src="../assets/Educatalyst.png"></img>
                            </div>
                        </div>
                        <br />
                        <div class="popover__wrapper">
                            <a href="#">
                                <h2 class="popover__title">Integrity</h2>
                            </a>
                            <div class="popover__content">
                                <p class="popover__message">"Integrity is the foundation of Educatalyst's commitment. We uphold the highest ethical standards in all our actions. Transparency, honesty, and accountability guide our interactions with donors, partners, and the communities we serve. With integrity as our compass, we strive to make a lasting impact on the lives of those we support."

                                </p>
                                <img alt="" src="../assets/Educatalyst.png"></img>
                            </div>
                        </div>
                        <br />

                    </h3>
                    <h4>These Core Values drive our long-term strategies and short-term goals, and they underpin our mission to
                        inspire breakthroughs in the way the world treats children and achieve immediate and lasting impact in
                        their lives. <br />
                        <br />

                        Save the Children is committed to advancing diversity, equity and inclusion in our workplace as well as
                        in the communities where we work.
                    </h4>
                </div>
            </section>

            <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../assets/motto.png" className="d-block w-100" alt="First Image" />
                        <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../assets/vision.png" className="d-block w-100" alt="First Image" />
                        <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <footer class="footer">
                <div class="wrapper">





                    <div class="footer_middle">
                        <div class="footer_middle_left">
                            <h5>Follow Us</h5>
                            <div class="footer_middle_left_list">
                                <div class="footer_icons">
                                    <a href="https://www.facebook.com/"><img src="../assets/facebook.svg" alt="facebook" /></a>
                                </div>
                                <div class="footer_icons">
                                    <a href="https://www.linkedin.com">
                                        <img src="../assets/linkedIn.svg" alt="linkedIn" /></a>
                                </div>
                                <div class="footer_icons">
                                    <a href="https://twitter.com/?lang=en">
                                        <img src="../assets/twitter.svg" alt="twitter" /></a>
                                </div>
                                <div class="footer_icons">
                                    <a href="https://www.youtube.com/">
                                        <img src="../assets/youtube.svg" alt="youtube" /></a>
                                </div>
                                <div class="footer_icons">
                                    <a href="https://www.instagram.com/">
                                        <img src="../assets/instagram.svg" alt="instagram" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="footer_middle_right">
                            <h5>Mobile app</h5>
                            <div class="footer_middle_right_list">
                                <div class="footer_icons">
                                    <img src="../assets/apple.svg" alt="apple" />
                                </div>
                                <div class="footer_icons">
                                    <img src="../assets/android.svg" alt="android" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer_bottom">
                        <p>© 2023 Educatalyst®</p>
                        <ul class="footer_bottom_list">
                            <li> <a href="../aboutus.html">  About Us</a></li>
                            <li><a href="../contact.html">Contact Us</a></li>

                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root3'));
