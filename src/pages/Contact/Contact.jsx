import "./contact.style.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">Contact us</h1>
      <p className="contact-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="input-area">
        <div className="input-holder">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="number" placeholder="Your Phone" min={0} />
        </div>
        <textarea name="" id="text-area" placeholder="Your Message"></textarea>
      </div>
      <button className="contact-page-btn">Send message</button>
    </div>
  );
};

export default Contact;
