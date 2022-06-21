import React from "react";
import Footer from "../../Component/Footer/index";
import NavBar from "../../Component/NavBar/index";
import './about.css'

const Index = () => {
  return (
    <div>
      <NavBar />
      <div className="aboutSection topSection">
        <div className="about-img">
          <img
            src="/flowerGirl.png"
            className="aboutImg"
            alt="a girl being rebuilt"
          />
        </div>
        <div className="motto">
          <h3 className="center-align">About Us</h3>
                    <strong>
                  <h5>
                      "We’re here to share trusted and reliable information to help you find a happier, more balanced life."
            </h5>
            <p>
            Your mental health is just as important as your physical health..
            </p>
         </strong>
          <p>
            {" "}
            It’s our duty and responsibility to help you explore mental health
            and psychology topics in a way that’s approachable, personal, and
            stigma-free. We work hard to break down complex health jargon,
            reflect the latest research, and present the most accurate
            information in a way that empowers you to take an active role in
            understanding the way your mind works.{" "}
          </p>

          <p>
            Verywell Mind answers your mental health questions in the very
            moments they matter most to you. Just like your physical health, we
            understand mental health is a journey, so we intend to be your
            partner along the way, equipping you with the information necessary
            to make informed and actionable choices.
          </p>
          <p>
            <b>
              Our mission is simple; we help you prioritize your mental health
              and find balance.
            </b>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
