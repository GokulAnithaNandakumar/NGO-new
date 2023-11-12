

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




ReactDOM.render(<Dona />, document.getElementById('donat'));
