const Appnew = () => {
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
                                <a id="links" className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="#">Get Involved</a>
                            </li>
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="../contact.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="row">
                <div className="col-xs-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.576175627873!2d79.14547174780927!3d12.978628264037425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47a36f5b0d4b%3A0x983cad8ccde24f9e!2sVIT!5e0!3m2!1sen!2sin!4v1699688113085!5m2!1sen!2sin"
                        width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-6">
                    <h1>Address:</h1>
                    <h3>VIT <br />
                        Vellore Campus <br />
                        Vellore - 632 014 <br />
                        Tamilnadu, India <br />
                        Tel: 91-416-2243091 / 93 <br />
                        Fax: 91-416-2243092 <br />
                        91-416-2240411</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-4">
                    <h1 id="h1">Contact Us</h1>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row">
                <div className="col-12 card">
                    <input type="radio" name="select" id="slide_1" defaultChecked />
                    <input type="radio" name="select" id="slide_2" />
                    <input type="radio" name="select" id="slide_3" />
                    <input type="checkbox" id="slideImg" />
                    <div className="slider">
                        <label htmlFor="slide_1" className="slide slide_1"></label>
                        <label htmlFor="slide_2" className="slide slide_2"></label>
                        <label htmlFor="slide_3" className="slide slide_3"></label>
                    </div>
                    <div className="inner_part">
                        <label htmlFor="slideImg" className="img">
                            <img className="img_1" src="../assets/potrait.webp" alt="İstanbul" />
                        </label>
                        <div className="content content_1">
                            <div className="title">İstanbul</div>
                            <div className="text">
                                Istanbul, a fascinating city built on two Continents, divided by the Bosphorus Strait. This is
                                one of the greatest cities in the world.
                            </div>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="inner_part">
                        <label htmlFor="slideImg" className="img">
                            <img className="img_2" src="../assets/potrait.webp" alt="Ankara" />
                        </label>
                        <div className="content content_2">
                            <div className="title">Ankara</div>
                            <div className="text">
                                Ankara is Turkey's beating heart, second largest city, located in the Central Anatolia region
                                and home to the Grand National Assembly of Turkey.
                            </div>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="inner_part">
                        <label htmlFor="slideImg" className="img">
                            <img className="img_3" src="../assets/potrait.webp" alt="İzmir" />
                        </label>
                        <div className="content content_3">
                            <div className="title">İzmir</div>
                            <div className="text">Located on the shores of the Aegean Sea, west of the Anatolian Peninsula, İzmir is
                                the third-largest city in Turkey.
                            </div>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" id="last">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="../assets/devlogo.png" alt="Michele Miller" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Michele Miller</h3>
                                <h4 className="title">role</h4>
                            </div>
                            <ul className="social">
                                <li><a href="#" className="fab fa-facebook" aria-hidden="true"></a></li>
                                <li><a href="#" className="fab fa-twitter" aria-hidden="true"></a></li>
                                <li><a href="#" className="fab fa-google-plus" aria-hidden="true"></a></li>
                                <li><a href="#" className="fab fa-linkedin" aria-hidden="true"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="../assets/devlogo.png" alt="Patricia Knott" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Patricia Knott</h3>
                                <h4 className="title">role</h4>
                            </div>
                            <ul className="social">
                                <li><a href="#" className="fab fa-facebook" aria-hidden="true"></a></li>
                                <li><a href="#" className="fab fa-twitter" aria-hidden="true"></a></li>
                                <li><a href="#" className="fab fa-google-plus" aria-hidden="true"></a></li>
                                <li><a href="#" className="fab fa-linkedin" aria-hidden="true"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="../assets/devlogo.png" alt="Justin Ramos" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Justin Ramos</h3>
                                <h4 className="title">role</h4>
                            </div>
                            <ul className="social">
                                <li><a href="#" className="fab fa-facebook" aria-hidden="true"></a></li>
                                <li><a href="#" className="fab fa-twitter" aria-hidden="true"></a></li>
                                <li><a href="#" className="fab fa-google-plus" aria-hidden="true"></a></li>
                                <li><a href="#" className="fab fa-linkedin" aria-hidden="true"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src="../assets/devlogo.png" alt="Mary Huntley" />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Mary Huntley</h3>
                                <h4 className="title">role</h4>
                            </div>
                            <ul className="social">
                                <li><a href="#" className="fab fa-facebook" aria-hidden="true"></a></li>
                                <li><a href="#" className="fab fa-twitter" aria-hidden="true"></a></li>
                                <li><a href="#" className="fab fa-google-plus" aria-hidden="true"></a></li>
                                <li><a href="#" className="fab fa-linkedin" aria-hidden="true"></a></li>
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
        </div>
    );
};



ReactDOM.render(<Appnew />, document.getElementById("root"));