import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <div className="contact__content__form">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <form
              action="https://getform.io/f/pbgxzgra"
              method="POST"
            >
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="name"
                    className="inputName"
                    type="text"
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="email"
                    className="inputEmail"
                    type="text"
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name="description"
                    className="inputDescription"
                    rows="5"
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Description
                  </label>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Contact;
