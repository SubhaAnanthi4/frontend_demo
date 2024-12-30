function Contactus() {
    return (
        <div className="conta">
            <div className="contact-header">
                <h1 className="conh1">Ice Scream</h1>
                <h3 className="conh3">You can't buy happiness, but you can buy ice cream, and that's pretty close.</h3>
            </div>

            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>If you have any questions, feedback, or would like to place an order, feel free to reach out to us:</p>

                <div className="contact-details">
                    <p><strong>Email:</strong> support@icescream.com</p>
                    <p><strong>Phone:</strong> +91 9754321907</p>
                    <p><strong>Address:</strong> 123 Sweet Street, Ice Cream Town, Yummyland</p>
                </div>

                <h3>Or send us a message!</h3>
                <form className="contact-form">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contactus;
