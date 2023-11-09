import { SocialIcon } from "react-social-icons";
import "../contact/Contact.css";
import contactData from "../contact/ContactData.json";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-main">
        <div className="header">Contact</div>
        <div className="description">
          You can reach out to me through various ways.
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="contact-detail">
        <div>
          {contactData.map((data) => {
            return (
              <div className="social-media-container">
                <div>
                  <a href={data.link} className="contact-link">
                    <div className="single-contact">
                      <div>
                        <SocialIcon network={data.network} target="blank" />
                      </div>
                      <div className="name-mention-div">
                        <div>
                          <span className="social-acc-name">{data.name} </span>
                        </div>
                        <div>{data.mention}</div>
                      </div>
                    </div>
                  </a>
                </div>

                <br />
              </div>
            );
          })}
        </div>
        <div className="form-container">
          <div className="query-question">
            <div>
              <b>HAVE ANY QUERIES?</b>
            </div>
            <div>Ask below..</div>
          </div>
          <br />
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            Name:
            <br />
            <input placeholder="Enter your name." type="text" />
            <br />
            <br />
            Address:
            <br />
            <input placeholder="Enter your address." type="address" />
            <br />
            <br />
            Email:
            <br />
            <input placeholder="Enter your email." type="email" />
            <br />
            <br />
            Comment:
            <br />
            <textarea placeholder="Write your comment." />
            <br />
            <br />
            <button>
              <b>Submit</b>
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "20px" }}
      >
        <span>&#169; Copyright 2023 Anish Neupane. All rights reserved.</span>
      </div>
    </div>
  );
};
export default Contact;
