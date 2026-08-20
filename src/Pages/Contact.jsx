import "../Styles/Contact.css";

export default function Contact() {
    return (
        <div className="contact">
            <form className="contact-form">
                <h1>Get In Touch</h1>
                <p className="contact-subtitle">
                    Questions or feedback about the app? Send a message below.
                </p>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Your name" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="you@example.com" />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        placeholder="Write your message here..."
                    ></textarea>
                </div>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}