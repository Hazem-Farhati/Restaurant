import "../styles/contactemail.css"
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const ContactEmail = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

    function sendEmail(e) {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_yan2h26",
          "template_nvjryq7",
          e.target,
          "kZGUAkAPUeLpD5FPd"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  return (
    <>
      <div className="contact__email">
        <div className="contact__email__container">
          <div className="contact__email__content">
            <div className="position">
              <div
                style={{
                  paddingTop: "0px",
                  // paddingLeft: "20px",
                  marginTop: "0px",
                }}
              >
                <div className="exact_position">
                  {" "}
                  <i class="uil uil-home home"></i>
                  <h3>
                    California, United States <br />{" "}
                    <span>Santa monica bullevard</span>
                  </h3>
                </div>
                <div className="exact_position">
                  {" "}
                  <i class="uil uil-phone"></i>
                  <h3>
                    00 (440) 9865 56200 <br />{" "}
                    <span>Mon to Fri 9am to 6 pm</span>
                  </h3>
                </div>
                <div className="exact_position">
                  {" "}
                  <i class="uil uil-envelope-edit"></i>{" "}
                  <h3>
                    support@colorlib.com <br />{" "}
                    <span>Send us your query anytime!</span>
                  </h3>
                </div>
              </div>
            </div>
            <form className="info__message" onSubmit={sendEmail}>
              <div className="info">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="Enter your address"
                />
                <input
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="Enter your subject"
                />
              </div>
              <div className="message">
                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    id=""
                    cols="40"
                    rows="70"
                    placeholder="Enter text"
                  ></textarea>{" "}
                  <br />
                  <div className="send__email__button">
                    <button
                      onClick={() => {
                        setTimeout(() => {
                          setName("");
                          setEmail("");
                          setSubject("");
                          setMessage("");
                        }, 1500);
                      }}
                      type="submit"
                      value="send"
                    >
                      Send Email
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactEmail