import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../Component/NavBar/index";
import Footer from "../../Component/Footer/index";
import "./style.css";
import { Card, CardTitle, Col, Icon, Row } from "react-materialize";
import Depression from "../../Component/MentalHealth/depression-care";
import DrugAbuse from "../../Component/MentalHealth/drug-care";
import GeneralHealth from "../../Component/MentalHealth/general-care";
import LearningDisorder from "../../Component/MentalHealth/learning-care";
import Rape from "../../Component/MentalHealth/rape-care";
import EmotionalAbuse from "../../Component/MentalHealth/relationship-care";

const Index = () => {
    const [id, setId] = useState(0);
    const[title, setTitle] = useState('')
    const focus = useRef(null);

    
    const mentalCare = ['nothing', Depression, DrugAbuse, GeneralHealth, LearningDisorder, Rape, EmotionalAbuse]

  const category = [
    {
      id: 1,
      title: "Depression",
      img: "/support-group/depression.jpg",
    },
    {
      id: 2,
      title: "Drug Abuse",
      img: "/support-group/drug-abuse.jpg",
    },
    {
      id: 3,
      title: "General Mental Health",
      img: "/support-group/general-health.jpg",
    },
    {
      id: 4,
      title: "Learning Disorder",
      img: "/support-group/learning-disability.jpg",
    },
    {
      id: 5,
      title: "Rape",
      img: "/support-group/rape.jpg",
    },
    {
      id: 6,
      title: "Emotional Abuse",
      img: "/support-group/emotional-abuse.jpg",
    },
  ];
    
    const handleClick = (input, title) => {
        setId(input);
        setTitle(title)
        focus.current.scrollIntoView();
        console.log(input);
  };

  return (
    <div>
      <NavBar />
      <section className="topSection get-support-section">
        <div className="here-to-help">
          <h1> We're here to help.</h1>
          <p>
            Choose one of the categories below to get connected to a mental
            health support near you.
          </p>
        </div>
        <div className="support-group">
          <img src="/get-support.jpg" alt="group of ladies" />
        </div>
      </section>
      <section className="container">
        <Row>
          {category.map((item) => (
            <>
              <Col m={6} l={4} s={12} xl={3}>
                <Card
                  header={
                    <CardTitle image={item.img} className="category-image" />
                  }
                          className="category-card"
                  onClick={(e) => handleClick(item.id, item.title)}
                >
                  {item.title}
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </section>

      <section className="support container" ref={focus} >
        {id ? (
          <Row>
              <h3>{title}</h3>
            {mentalCare[id].map((item) => (
                <Col m={12} s={12}>
                <Card
                  actions={[
                    <a
                      key={item.id}
                      href={item.url}
                          style={{ color: "#e01860" }}
                          target="blank"
                    >
                      Click to view their website
                    </a>,
                  ]}
                  closeIcon={<Icon>close</Icon>}
                  header={<CardTitle image={item.img} className="ngoImg" />}
                  horizontal
                >
                  <h5>
                    <b>{item.title}</b>
                  </h5>
                  <p>
                    {item.details}
                  </p>
                  <p>
                            <b>Location: </b> 
                            {item.address}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          ""
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Index;
