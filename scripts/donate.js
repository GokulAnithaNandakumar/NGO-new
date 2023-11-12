const Dona = () => {
    useEffect(() => {
        document.getElementById('donation-form').addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            var donorName = document.getElementsByName('donor-name')[0].value;
            var donationAmount = document.getElementsByName('donation-amount')[0].value;
            var mobileNumber = document.getElementsByName('mobile-number')[0].value;
            var donationPurpose = document.getElementsByName('donation-purpose')[0].value;

            // Add donation details to the receipt
            document.getElementById('receipt-donor-name').textContent = donorName;
            document.getElementById('receipt-donation-amount').textContent = donationAmount;
            document.getElementById('receipt-mobile-number').textContent = mobileNumber;
            document.getElementById('receipt-donation-purpose').textContent = donationPurpose;

            // Display donation receipt
            document.querySelector('.donation-receipt').style.display = 'block';

            // Reset form
            document.getElementById('donation-form').reset();
        });

        // Slideshow functionality
        var slides = document.querySelectorAll('.slide');
        var slideIndex = 0;

        function showSlide() {
            slides.forEach(function (slide) {
                slide.style.display = 'none';
            });
            slides[slideIndex].style.display = 'block';
        }

        setInterval(function () {
            slideIndex++;
            if (slideIndex === slides.length) slideIndex = 0;

            showSlide();
        }, 5000); // Change slide every 5 seconds

        // Function to print the donation receipt
        window.printReceipt = function () {
            var printContents = document.querySelector('.donation-receipt').innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        };
    }, []); // Empty dependency array to ensure useEffect runs only once

    return (
        <div>
            <div className="container">
                <h1 className="animate__animated animate__fadeInDown">Donation Tracking System</h1>

                <div className="form-container animate__animated animate__fadeInUp">
                    <form id="donation-form">
                        <input type="text" name="donor-name" placeholder="Donor Name" required />
                        <input type="number" name="donation-amount" placeholder="Donation Amount" required />
                        <input type="tel" name="mobile-number" placeholder="Mobile Number" required />
                        <select name="donation-purpose" required>
                            <option value="" selected disabled>
                                Select Donation Purpose
                            </option>
                            <option value="Education">Education</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Environment">Environment</option>
                            {/* Add more options as needed */}
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="donation-updates animate__animated animate__fadeIn">
                    <h2 className="animate__animated animate__fadeIn">Donation Updates</h2>
                    <div className="slideshow">
                        <div className="slide active">
                            <div className="slide-content">
                                <p>
                                    <strong>Donor Name:</strong> John Doe
                                </p>
                                <p>
                                    <strong>Donation Amount:</strong> $100
                                </p>
                                <p>
                                    <strong>Donation Purpose:</strong> Education
                                </p>
                                <p>
                                    <strong>Date:</strong> January 1, 2023
                                </p>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-content">
                                <p>
                                    <strong>Donor Name:</strong> Jane Smith
                                </p>
                                <p>
                                    <strong>Donation Amount:</strong> $250
                                </p>
                                <p>
                                    <strong>Donation Purpose:</strong> Healthcare
                                </p>
                                <p>
                                    <strong>Date:</strong> February 15, 2023
                                </p>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-content">
                                <p>
                                    <strong>Donor Name:</strong> Michael Johnson
                                </p>
                                <p>
                                    <strong>Donation Amount:</strong> $50
                                </p>
                                <p>
                                    <strong>Donation Purpose:</strong> Environment
                                </p>
                                <p>
                                    <strong>Date:</strong> March 22, 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="donation-receipt animate__animated animate__fadeIn">
                    <h2 className="animate__animated animate__fadeIn">Donation Receipt</h2>
                    <p>
                        <strong>Donor Name:</strong> <span id="receipt-donor-name"></span>
                    </p>
                    <p>
                        <strong>Donation Amount:</strong> $<span id="receipt-donation-amount"></span>
                    </p>
                    <p>
                        <strong>Mobile Number:</strong> <span id="receipt-mobile-number"></span>
                    </p>
                    <p>
                        <strong>Donation Purpose:</strong> <span id="receipt-donation-purpose"></span>
                    </p>
                </div>

                <button className="print-button animate__animated animate__fadeIn" onClick={window.printReceipt}>
                    Print Receipt
                </button>
            </div>
        </div>
    );
};



ReactDOM.render(<Dona />, document.getElementById('donat'));
