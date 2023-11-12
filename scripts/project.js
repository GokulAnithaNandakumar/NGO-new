const Appli = () => {
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
                                <a id="links" className="nav-link" href="../involve.html">Get Involved</a>
                            </li>
                            <li className="nav-item">
                                <a id="links" className="nav-link" href="../contact.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>




            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-4">
                    <h1 id="h1">Current Projects  </h1>
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
                            <div className="title">Project1</div>
                            <div className="text">
                                Details of project 1
                            </div>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="inner_part">
                        <label htmlFor="slideImg" className="img">
                            <img className="img_2" src="../assets/potrait.webp" alt="Ankara" />
                        </label>
                        <div className="content content_2">
                            <div className="title">Project2</div>
                            <div className="text">
                                Details of project 2
                            </div>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="inner_part">
                        <label htmlFor="slideImg" className="img">
                            <img className="img_3" src="../assets/potrait.webp" alt="İzmir" />
                        </label>
                        <div className="content content_3">
                            <div className="title">Project3</div>
                            <div className="text">Details of project 3
                            </div>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>




            <div>
                <h1 id="h1">Previous Projects</h1>
                <div>
                    <script src="https://kit.fontawesome.com/ee7a178a15.js" crossOrigin="anonymous"></script>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />

                    <div className="parent-container">
                        <div className="child-container" id="one">
                            <img src="https://source.unsplash.com/s4uCgs7qVQc" width="100%" height="auto" alt="Image 1" />
                            <img src="https://source.unsplash.com/6Pou6SeJ6cY" width="100%" height="auto" alt="Image 2" />
                            <img src="https://source.unsplash.com/QwoNAhbmLLo" width="100%" height="auto" alt="Image 3" />
                            <img src="https://source.unsplash.com/an-artists-rendering-of-a-distant-object-in-space-fSLGThEmY2Y" width="100%" height="auto" alt="Image 4" />
                            <img src="https://source.unsplash.com/3yQY9GPM8Mg" width="100%" height="auto" alt="Image 5" />
                        </div>
                        <div className="child-container" id="two">
                            <img src="https://source.unsplash.com/QrlCL6DH3yU" width="100%" height="auto" alt="Image 6" />
                            <img src="https://source.unsplash.com/7bnvNN3R_eo" width="100%" height="auto" alt="Image 7" />
                            <img src="https://source.unsplash.com/zwk1sQqGRcQ" width="100%" height="auto" alt="Image 8" />
                        </div>
                        <div className="child-container" id="three">
                            <img src="https://source.unsplash.com/UGNXT7QryGA" width="100%" height="auto" alt="Image 9" />
                            <img src="https://source.unsplash.com/nc1zsYGkLFA" width="100%" height="auto" alt="Image 10" />
                            <img src="https://source.unsplash.com/a-man-in-a-space-suit-standing-on-top-of-a-rock-XDFfAHlxw9I" width="100%" height="auto" alt="Image 11" />
                            <img src="https://source.unsplash.com/kXLgdCmmGYk" width="100%" height="auto" alt="Image 12" />
                            <img src="https://source.unsplash.com/OiiVv1iiB0A" width="100%" height="auto" alt="Image 13" />
                        </div>
                    </div>


                </div>
            </div>


            <div className="col-xl-1"></div>



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

        </div >
    );
}


ReactDOM.render(<Appli />, document.getElementById('pro'));
