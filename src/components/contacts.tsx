import "./contacts.css";
import "../index.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <h2>Contact Me</h2>
      <div className="contact-list flex flex-wrap">
        <div className="contact">
          <i className="fa-brands fa-twitter"></i>
          <code className="scm">Twitter</code>
        </div>
        <div className="contact">
          <i className="fa-sharp fa-solid fa-envelope"></i>
          <code className="scm">Mail</code>
        </div>
        <div className="contact">
          <i className="fa-brands fa-github"></i>
          <code className="scm">Github</code>
        </div>
        <div className="contact">
          <i className="fa-brands fa-linkedin-in"></i>
          <code className="scm">LinkedIn</code>
        </div>
        <div className="contact">
          <i className="fa-brands fa-instagram"></i>
          <code className="scm">Instagram</code>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
