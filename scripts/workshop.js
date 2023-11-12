const Worksh = () => {
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

            {/* <section>
                <head>
                    <link href='https://fonts.googleapis.com/css?family=Bree+Serif:300,400,700' rel='stylesheet' type='text/css'></link>

                    <link href='https://fonts.googleapis.com/css?family=Average:300,400,700' rel='stylesheet' type='text/css'></link>
                </head>

                <div className="page-body">
                    <div className="wrapper__outer-body">
                        <div className="wrapper__inner-body">

                            <div className="wrapper__header">
                                <section className="event-header-left">
                                    <section className="event-header-left-content">
                                        <img src="http://fiercebiotech.com/event/biobreakfast/2015/wp-content/themes/biobreakfast_2015/images/logo.png" />
                                        <h4 className="event-subtitle"> Presents: An Executive Breakfast</h4>
                                    </section>

                                </section>
                                <section className="social-media-wrapper">
                                    <h4 className="social-icons"> <ul className="share-buttons">
                                        <li>
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Ffiercebiotech.com%2Fevent%2Fbiobreakfast%2F2015%2F&t=" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;"><img src="http://simplesharingbuttons.com/images/flat_web_icon_set/inverted/Facebook.png"></img></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/intent/tweet?source=http%3A%2F%2Ffiercebiotech.com%2Fevent%2Fbiobreakfast%2F2015%2F&text=:%20http%3A%2F%2Ffiercebiotech.com%2Fevent%2Fbiobreakfast%2F2015%2F" target="_blank" title="Tweet" onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20'  + encodeURIComponent(document.URL)); return false;"><img src="http://simplesharingbuttons.com/images/flat_web_icon_set/inverted/Twitter.png"></img></a>
                                        </li>
                                        <li>
                                            <a href="https://plus.google.com/share?url=http%3A%2F%2Ffiercebiotech.com%2Fevent%2Fbiobreakfast%2F2015%2F" target="_blank" title="Share on Google+" onclick="window.open('https://plus.google.com/share?url=' + encodeURIComponent(document.URL)); return false;"><img src="http://simplesharingbuttons.com/images/flat_web_icon_set/inverted/Google+.png"></img></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Ffiercebiotech.com%2Fevent%2Fbiobreakfast%2F2015%2F&title=&summary=&source=http%3A%2F%2Ffiercebiotech.com%2Fevent%2Fbiobreakfast%2F2015%2F" target="_blank" title="Share on LinkedIn"
                                                onclick="window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;"><img src="http://simplesharingbuttons.com/images/flat_web_icon_set/inverted/LinkedIn.png"></img></a>
                                        </li>
                                        <li>
                                            <a href="mailto:?subject=&body=:%20http%3A%2F%2Ffiercebiotech.com%2Fevent%2Fbiobreakfast%2F2015%2F" target="_blank" title="Email" onclick="window.open('mailto:?subject=' + encodeURIComponent(document.title) + '&body=' +  encodeURIComponent(document.URL)); return false;"><img src="http://simplesharingbuttons.com/images/flat_web_icon_set/inverted/Email.png"></img></a>
                                        </li>
                                    </ul>
                                    </h4>

                                </section>
                            </div>
                            <div className="wrapper__menu">
                                <nav className="menu-main">
                                    <ul>
                                        <li><a href="" className="menu-button">		REGISTER</a></li>
                                        <li><a href="#venue" className="menu-button">		VENUE</a></li>
                                        <li><a href="#sponsors" className="menu-button">		SPONSORS</a></li>
                                        <li><a href="#panelists" className="menu-button">PANELISTS</a></li>
                                        <li><a href="#faqs" className="menu-button">		FAQS</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="wrapper__event-info">
                                <h1 className="event-title">
                                    Cancer drug R&D: Blazing a short path to an accelerated approval
                                </h1>

                                <section className="event-summary">
                                    Cancer drug R&D has attracted billions of dollars in new investments as biopharma companies rush to stake out leading positions in hot new fields of research. With the FDA assisting with a raft of breakthrough drug designations and accelerated approvals in oncology, investigators have completely reengineered timelines and development strategies for experimental therapies.

                                    FierceBiotech Editor-in-Chief John Carroll will moderate a panel at BIO with the leading experts in the field to review the new clinical trial strategies in the revolutionary world of cancer drug development. And we’ll be looking for the audience to participate in Q&A following the panel discussion.

                                    Schedule:

                                    7:15-7:45am: Registration, networking, and a full breakfast buffet

                                    7:45-8:45am: Panel Discussion

                                    $109 Early Bird rate through Friday, May 29, 2015

                                    $129 Regular rate after Friday, May 29, 2015

                                    Questions? Please email events@fiercemarkets.com
                                </section>
                                <section className="event-details">
                                    <h2 className="event-date">
                                        Tuesday, June 16, 2015</h2>
                                    <h3 className="event-time">
                                        7:15-8:45am</h3>

                                    <section className="event-address">
                                        <p className="event-address-name">Pennsylvania Convention Center</p>

                                        1101 Arch St,
                                        Room 204-B
                                        Philadelphia, PA 19107
                                    </section>
                                    <section className="register-button">
                                        <img src="http://fiercebiotech.com/event/biobreakfast/2015/wp-content/uploads/2015/03/register_button.png" />
                                    </section>
                                </section>

                            </div>
                            <div className="wrapper__panelists">
                                <h3 className="event-faq__title">
                                    <a name="panelists">
                                        Panelists: </a>
                                </h3>

                                <ul id="panelist-info__border">
                                    <li><input type="checkbox" id="cb1" /><label for="cb1"><span className="click">(Click to view/hide Bio)</span>
                                        <div><img src="http://fiercebiotech.com/event/biobreakfast/2015/wp-content/uploads/2015/03/John_Carroll_Web.gif"></img></div><span className="panelist-name">John Carroll</span><br></br> <p className="job-title">Editor-in-Chief,  <br> </br>FierceBiotech</p>
                                    </label>
                                        <ul id="panelist-bio__border">
                                            <li > John D. Carroll is a biotech analyst with 32 years of prize-winning experience in journalism. Appointed editor of FierceBiotech in 2003, he has covered genomics, biotechnology, healthcare and other business topics for Managed Care, American Banker, Small Times, and Local Business.com, He has also contributed stories from Central America and Ireland to the Dallas Morning News and Time and wrote for the Houston Press and other leading publications. He spent six years as editor and publisher of the Dallas Business Journal, was publisher of Texas Business and early in his career was part of a Pulitzer Prize-winning team of reporters and editors at the Kansas City Star & Times. He enjoys hiking, traveling and spending time with his family. Carroll is based in Vermont and Texas and can be reached at john@fiercemarkets.com. Follow @JohnCFierce on Twitter.</li>
                                        </ul>
                                    </li>

                                    <li><input type="checkbox" id="cb2" /><label for="cb2"><span className="click">(Click to view/hide Bio)</span><div><img src="http://fiercebiotech.com/event/biobreakfast/2015/wp-content/uploads/2015/04/Baynes_BIO_Web-150x150.gif"></img></div><span className="panelist-name">Roy Baynes</span><br></br> <p className="job-title">SVP of Global Clinical Development,  <br></br>Merck Research Laboratories </p></label>
                                        <ul id="panelist-bio__border">
                                            <li>Roy Baynes is Senior Vice President Global Clinical Development at Merck Research Laboratories in Rahway, New Jersey. He was previously Senior Vice President of Oncology, Inflammation and Respiratory Therapeutics at Gilead Sciences and prior to that was Vice President Global Clinical Development, and Therapeutic Area (TA) Head for Hematology / Oncology, at Amgen Inc. He graduated as a Medical Doctor and obtained a Master of Medicine and Doctor of Philosophy from the University of the Witwatersrand, Johannesburg, South Africa. He has had a long and distinguished career in the haematology-oncology-and stem cell transplantation fields, including drug development, basic research, clinical practice, clinical research, teaching and administration. He is a member of many international societies, including the American Society of Hematology (ASH) and the American Society of Clinical Oncology (ASCO), and has authored some 150 publications.</li>
                                        </ul>
                                    </li>

                                    <li><input type="checkbox" id="cb3" /><label for="cb3"><span className="click">(Click to view/hide Bio)</span><div><img src="http://fiercebiotech.com/event/biobreakfast/2015/wp-content/uploads/2015/04/Iannone_Robert_BIO_Web_Final.gif"></img></div><span className="panelist-name">Robert Iannone</span><br></br><p className="job-title"> Head of Immuno-oncology, <br></br>AstraZeneca </p></label>
                                        <ul id="panelist-bio__border">
                                            <li>Robert Iannone is a board-certified pediatrician and pediatric hematologist-oncologist.  Iannone trained in pediatrics and pediatric-hematology-oncology at Johns Hopkins Hospital, where he also served as Chief Resident.  His fellowship research project was on bone marrow transplantation for sickle cell disease under the mentorship of the Pediatric Department Chair, George Dover and immunologist, Ephraim Fuchs.  After fellowship, he was appointed Assistant Professor of Pediatrics at the University of Pennsylvania and Children’s Hospital of Philadelphia, where he was an NIH-funded member of the section of Bone Marrow Transplantation. During this time, he earned a Master’s of Science in Clinical Epidemiology from the University of Pennsylvania Medical School/Center for Clinical Epidemiology and Biostatistics.</li>
                                        </ul>
                                    </li>

                                    <li><input type="checkbox" id="cb4" /><label for="cb4"><span className="click">(Click to view/hide Bio)</span><div><img src="http://fiercebiotech.com/event/biobreakfast/2015/wp-content/uploads/2015/05/mark-frohlichWEB.gif" /></div><span className="panelist-name">Mark Fröhlich</span><br></br><p className="job-title"> EVP of Research & Development,  <br></br>Juno Therapeutics </p></label>
                                        <ul id="panelist-bio__border">
                                            <li>Mark W. Frohlich is the Executive Vice President of Research and Development at Juno Therapeutics. Prior to joining Juno, Dr. Frohlich served as Executive Vice President of Research and Development and Chief Medical Officer at Dendreon Corporation, where he served in various capacities beginning in August 2005. Dr. Frohlich received a B.S. in Electrical Engineering and Economics from Yale University and an M.D. from Harvard Medical School. Dr. Frohlich was a resident in internal medicine and a fellow in oncology at the University of California, San Francisco.
                                            </li>
                                        </ul>
                                    </li>


                                </ul>

                            </div>
                            <div className="wrapper__event-content">

                                <section className="event-content-section">
                                    <section className="event-venue">
                                        <h3 className="event-venue__title">
                                            <a name="venue">
                                                Venue: </a>
                                        </h3>
                                        <div className="venue-photo-map">
                                            <section className="event-venue-photo">
                                                <img src="http://fiercebiotech.com/event/biobreakfast/2015/wp-content/uploads/2015/03/Penn-Con-Ceneter-Image.jpg"></img>
                                            </section>

                                            <section className="event-venue-map">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3058.392341530598!2d-75.159937!3d39.95498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c62bddc20ebd%3A0x4ea4e2201d6f9fe6!2sPennsylvania+Convention+Center!5e0!3m2!1sen!2sus!4v1432067082603" width="600" height="450" frameborder="0" style="border:0"></iframe>

                                            </section>
                                        </div>
                                        <p className="event-address-name-large">Pennsylvania Convention Center</p>

                                        1101 Arch St,
                                        Room 204-B
                                        Philadelphia, PA 19107
                                    </section>
                                    <section className="event-faq">
                                        <h3 className="event-faq__title">
                                            <a name="faqs">
                                                FAQs: </a>
                                        </h3>
                                        Is parking available at the venue? <br></br>
                                        Yes, parking is available at the Sands Expo and Convention Center. <br></br> <br></br>
                                        Is breakfast provided at this event? <br></br>
                                        Yes, a full buffet breakfast will be served from 7:30am-8:00am <br></br> <br></br>
                                        I can no longer attend this event, may I offer my place to my colleague?<br></br>
                                        Attendee substitutions may be made on or before October 10, 2014. Please submit a written request by email to events@fiercemarkets.com.<br></br><br></br>
                                        I can no longer attend this event, may I receive a refund?<br></br>
                                        Due to the nature of this event, we are unable to provide refunds. Attendee substitutions may be made on or before October 10, 2014. Please submit a written request by email to events@fiercemarkets.com.



                                    </section>
                                </section>
                                <section className="event-sponsor">
                                    <h3 className="event-sponsor__title">
                                        <a name="sponsors">
                                            Sponsors: </a>
                                    </h3>
                                    <section className="sponsor-name">

                                    </section>
                                    <section className="sponsor-logo">

                                        <li><input type="checkbox" id="spons" /><label for="spons"><span className="click">(Click photo view/hide Info)</span><div><h4 className="sponsor-logo__title">
                                            <img src="http://fiercebiotech.com/event/biobreakfast/2015/wp-content/uploads/2015/03/PRAHS_LOGO_SMALL_VectorCMYK_Pos-207x250.png"></img>
                                        </h4></div></label>
                                            <ul id="panelist-bio__border">
                                                <li>The story of PRA Health Sciences would naturally talk about how we’ve become one of the world’s largest CROs. It would talk about our innovation and growth and would speak to our operational efficiencies and transparency. It would highlight our expertise and customization. And it would touch on the incredible differences we’ve made, over our more than 30years, in helping to bring to market everything from niche treatments and therapies to blockbuster drugs. More than anything else, our story would be about people. Not only our over 10,000 employees operating in more than 80 countries, though they’d certainly be a big part of it, but also the people that inspire them. The heroes of any PRA Health Sciences story are the clients we serve and the people whose lives we help improve, all over the world. And our story has only just begun. To learn more about our solutions, please visit us at prahs.com or email us at prahealthsciences@prahs.com.

                                                </li>
                                            </ul>
                                        </li>
                                    </section>

                                </section>

                            </div>


                            <div className="wrapper__event-footer">
                                <img src="http://pages.questexweb.com/rs/questex/images/RegisterToday.png"></img>
                            </div>


                        </div>

                    </div>


                </div>


            </section> */}




        </div >

    )
}

ReactDOM.render(<Worksh />, document.getElementById('workshop'));