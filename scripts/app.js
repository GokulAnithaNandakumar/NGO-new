const App = () => {
    return (
        <div>
            <header>
                <nav id="mainNavbar" className="navbar navbar-light bg-light navbar-expand-md py-0">
                    <a className="navbar-brand" href="../index.html">
                        <img src="../assets/Educatalyst__1_-removebg-preview.png" id="logo" className="d-inline-block align-top"
                            alt="" loading="lazy" />
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
                                <a id="links" className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="#">Get Involved</a>
                            </li>
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="../public/contact.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../assets/firstslide.png" className="d-block w-100" alt="First Image" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Child Protection</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="../assets/secondslide.jpg" className="d-block w-100" alt="Second Image" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Girl's Education</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="../assets/thirdslide.png" className="d-block w-100" alt="Third Image" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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

                <section className="container-fluid px-0">
                    <div className="row align-items-center">
                        <div className="col-lg-2"></div>
                        <div className="col-lg flipbox">
                            <div id="flipboxfront" className="text-center mt-5">
                                <h1>Educatalyst</h1>
                                <h2><b>Educating Dreams, Empowering Futures</b></h2>
                                <h3>"The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education." - Martin Luther King Jr.</h3>
                            </div>
                            <div id="flipboxback" className="col-lg text-center mt-5">
                                <h1>Educatalyst</h1>
                                <h2><b>Empowering minds, shaping futures, one child at a time</b></h2>
                                <h3>Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</h3>
                                <button id="button3" className="btn"><a href="../public/aboutus.html">About Us</a></button>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </section>

                <section class="container-fluid px=0">
                    <div class="row align-items-center justify-content">
                        <div class="col-lg-1"></div>
                        <div id="headingGroup2" class="col-lg-10 text-left mt-5 container2">
                            <h2 class="text-left" id="pad1">What is Educatalyst?</h2>
                            <h3 class="text-left" id="pad1">EduCatalyst is more than an educational initiative; it's a dynamic
                                force driving empowerment. We strive to create an educational ecosystem that not only imparts
                                knowledge but also nurtures critical thinking, creativity, and a passion for lifelong learning.
                                Through innovative approaches and community engagement, EduCatalyst is dedicated to shaping a
                                brighter and more inclusive future for all.</h3>
                        </div>
                        <div class="col-lg-1"></div>
                    </div>
                </section>


                <section class="container-fluid px=0">

                    <div class="row align-items-center justify-content">
                        <div class="col-lg-1"></div>
                        <div class="col-md-5 text-left mt-5">
                            <div class="col-md-12 container3" id="effects">
                                <h2>Projects</h2>
                                <h3>At Educatalysts, we believe in the transformative power of education to uplift
                                    communities and break the cycle of poverty. Our projects are carefully designed to address
                                    the specific needs of underprivileged children, providing them with opportunities for
                                    growth, empowerment, and a brighter future.</h3>
                                <button id="button4" class="btn"><a href="">Projects</a></button>
                            </div>
                        </div>


                        <div class="col-md-5 text-left mt-5">
                            <div class="col-md-12 container4" id="effects">
                                <h2>Get Involved</h2>
                                <h3>At Educatalysts, we understand that meaningful change begins with collective action. We
                                    invite you to join us in our mission to empower underprivileged children.
                                    Your involvement is the catalyst that fuels our vision for a world where every child has the
                                    opportunity to break the cycle of poverty.</h3>
                                <button id="button5" class="btn"><a href="">Get Involved</a></button>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                    </div>
                </section>



                <section class="container-fluid px=0">

                    <div class="row align-items-center justify-content">
                        <div class="col-lg-1"></div>
                        <div class="col-md-5 text-left mt-5">
                            <div class="col-md-12 container3" id="effects">
                                <h2>Events</h2>
                                <h3>Discover and engage in impactful events that shape the narrative of empowerment. Join us as
                                    we create moments that foster community, inspire change, and contribute to the education of
                                    underprivileged children. Explore our upcoming events and be part of a movement that makes a
                                    difference.</h3>
                                <button id="button4" class="btn"><a href="">Events</a></button>
                            </div>
                        </div>

                        <div class="col-md-5 text-left mt-5">
                            <div class="col-md-12 container4" id="effects">
                                <h2>Blogs</h2>
                                <h3>Dive into stories of transformation, success, and the latest updates on our mission. Our
                                    blog/news section is a window into the heart of our endeavors. Stay informed, and
                                    connected as we share the journey of empowering underprivileged children through education.
                                    Explore our stories and be part of the narrative for change.</h3>
                                <button id="button5" class="btn"><a href="../public/blogs.html">Blogs</a></button>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                    </div>
                </section>



                <section className="container-fluid px-0">
                    <div className="row align-items-center justify-content">
                        <div className="col-md-1"></div>
                        <div className="col-md-1">
                            <h2 id="footer_name">Contact</h2>
                        </div>
                        <div className="col-md-7"></div>
                        <div className="col-md-1"></div>
                    </div>
                </section>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="../assets/devlogo.png"></img>
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">role</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-facebook"
                                        aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-twitter"
                                        aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-google-plus"
                                        aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-linkedin"
                                        aria-hidden="true"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="../assets/devlogo.png"></img>
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">role</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-facebook"
                                        aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-twitter"
                                        aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-google-plus"
                                        aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-linkedin"
                                        aria-hidden="true"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="../assets/devlogo.png"></img>
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">role</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-facebook"
                                        aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-twitter"
                                        aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-google-plus"
                                        aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-linkedin"
                                        aria-hidden="true"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="../assets/devlogo.png"></img>
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">role</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-facebook"
                                        aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-twitter"
                                        aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-google-plus"
                                        aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fab fa-linkedin"
                                        aria-hidden="true"></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
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
            </header>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
