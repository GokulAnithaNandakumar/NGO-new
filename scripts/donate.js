

const Dona = () => {
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
        </div>
    )
};


const Foot = () => {
    return (
        <div>
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
}



ReactDOM.render(<Dona />, document.getElementById('donat'));
ReactDOM.render(<Foot />, document.getElementById('fot'));
