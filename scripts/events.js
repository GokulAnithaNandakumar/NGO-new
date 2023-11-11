const Thecompo = () => {
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




            <div className="container">
                <div className="card-media">
                    {/* media container */}
                    <div className="card-media-object-container">
                        <div className="card-media-object" style={{ backgroundImage: 'url(https://s9.postimg.cc/y0sfm95gv/prince_f.jpg)' }}></div>
                        <span className="card-media-object-tag subtle">Selling Fast</span>
                        <ul className="card-media-object-social-list">
                            <li>
                                <img src="https://s10.postimg.cc/3rjjbzcvd/profile_f.jpg" className="" alt="Profile" />
                            </li>
                            <li>
                                <img src="https://s16.postimg.cc/b0j0djh79/profile_0_f.jpg" className="" alt="Profile" />
                            </li>
                            <li className="card-media-object-social-list-item-additional">
                                <span>+2</span>
                            </li>
                        </ul>
                    </div>
                    {/* body container */}
                    <div className="card-media-body">
                        <div className="card-media-body-top">
                            <span className="subtle">Mon, APR 09, 7:00 PM</span>
                            <div className="card-media-body-top-icons u-float-right">
                                <svg fill="#888888" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                                </svg>
                                <svg fill="#888888" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            </div>
                        </div>
                        <span className="card-media-body-heading">This Thing Called Life: A Celebration of Prince and His Legacy at MEZZANINE SF</span>
                        <div className="card-media-body-supporting-bottom">
                            <span className="card-media-body-supporting-bottom-text subtle">Mezzanine, San Francisco, CA</span>
                            <span className="card-media-body-supporting-bottom-text subtle u-float-right">Free &ndash; $30</span>
                        </div>
                        <div className="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                            <span className="card-media-body-supporting-bottom-text subtle">#Education #Humanity</span>
                            <a href="#/" className="card-media-body-supporting-bottom-text card-media-link u-float-right">VIEW TICKETS</a>
                        </div>
                    </div>
                </div>

                <div className="card-media">
                    {/* media container */}
                    <div className="card-media-object-container">
                        <div className="card-media-object" style={{ backgroundImage: 'url(https://s16.postimg.cc/x8m99xtgl/tyco_f.jpg)' }}></div>
                        <ul className="card-media-object-social-list">
                            <li>
                                <img src="https://s13.postimg.cc/c5aoiq1w7/stock3_f.jpg" className="" alt="Profile" />
                            </li>
                        </ul>
                    </div>
                    {/* body container */}
                    <div className="card-media-body">
                        <div className="card-media-body-top">
                            <span className="subtle">Mon, APR 09, 7:00 PM</span>
                            <div className="card-media-body-top-icons u-float-right">
                                <svg fill="#888888" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                                </svg>
                                <svg fill="#888888" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            </div>
                        </div>
                        <span className="card-media-body-heading">DAY // NIGHT - Tycho (Live) w/ Gold Panda, Com Truise + More at 1015 Folsom</span>
                        <div className="card-media-body-supporting-bottom">
                            <span className="card-media-body-supporting-bottom-text subtle">1015 Folsom, San Francisco, CA</span>
                            <span className="card-media-body-supporting-bottom-text subtle u-float-right">$25 &ndash; $80</span>
                        </div>
                        <div className="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                            <span className="card-media-body-supporting-bottom-text subtle">#Donate #Learn</span>
                            <a href="#/" className="card-media-body-supporting-bottom-text card-media-link u-float-right">VIEW TICKETS</a>
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
    )
};



ReactDOM.render(<Thecompo />, document.getElementById('eventid'));
