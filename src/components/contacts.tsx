import "./contacts.css";
import "../index.css";

const Contacts = (props: any) => {
  return (
    <div className="contacts">
      <h2>Contact Me</h2>
      <div className="contact-list flex flex-wrap">
        <div className="contact">
          <a
            href="https://twitter.com/_ikennaa"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
            <code className="scm">Twitter</code>
          </a>
        </div>
        <div className="contact">
          <a href="mailto:nikenna06@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa-sharp fa-solid fa-envelope"></i>
            <code className="scm">Mail</code>
          </a>
        </div>
        <div className="contact">
          <a
            href="https://github.com/ikenna-nwobodo"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
            <code className="scm">Github</code>
          </a>
        </div>
        <div className="contact">
          <a
            href="https://linkedin.com/in/ikennanwobodo"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
            <code className="scm">LinkedIn</code>
          </a>
        </div>
        <div className="contact">
          <a
            href="https://www.instagram.com/_ikennaa/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
            <code className="scm">Instagram</code>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
