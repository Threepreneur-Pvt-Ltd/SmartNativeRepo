import React, { useState } from "react";
import Faq from "../components/Faq.js";
import Accordion from "react-bootstrap/Accordion";
import { Button, Card } from "react-bootstrap";

function Accordian() {
  const [faqs, setfaqs] = useState([
    {
      question: "Do you focus on certain industries or organisations?",
      answer:
        "Since we tailor our solution to your needs, our solutions can cover most industries and challenges, including communities outside of your organization. Smart Natives are popular within the technology and sustainability consulting sector.",
      open: false,
    },
    {
      question: "What kind of skills training do you offer?",
      answer:
        "We offer the most in-demand skills in Technology, R&D, Data, and Business verticals. Business and organisational transformation within the Governmental and non-profit sector is among our key",
      open: false,
    },
    {
      question: "What training methodology do you use?",
      answer:
        "Smart Natives is known for its’ Blended Learning methodology - combining self-learning and live guided mentorship.",
      open: false,
    },
    {
      question: "Do your services apply to a certain seniority level?",
      answer:
        "Our approach, knowledge, experience, and methodology can be relevant and applied for every seniority level - from beginners to juniors and up to senior level.",
      open: false,
    },

    {
      question: "Where do your trainers come from?",
      answer:
        "Our mentors are from various domains, with practical hands-on experience, equipped with the right skills to pass their knowledge.",
      open: false,
    },
    {
      question: "What are Barcamps?",
      answer:
        "Bar Camps are similar to the Open Space method sessions, but are looser organized. It consists of lectures and discussion sessions (sessions) that are co-ordinated on whiteboards, metaplases or bulletin boards each morning by the participants themselves. Specifically, it is important to observe the Bar Camp rules, otherwise the format is completely open.",
      open: false,
    },

    {
      question: "What is a Hackathon?",
      answer:
        "The word Hackathon is a contraction of “Hack” and “Marathon”. “Hack” may be used in the sense of hacking into a computer system, but I prefer the broader sense of finding a quick solution (a “hack”) to solve a particular problem. The idea is to gather motivated people, form teams, give them a challenge to solve in a short time-frame (usually a day or a weekend) and let the magic happen!",
      open: false,
    },

    {
      question: "What is Innovation as a Service?",
      answer:
        "Innovation as a service is a pragmatic process to inspire and create new innovative experiments (that have a strategic impact on your organization). Together with the key people of your organization we will ideate and jointly craft a list of innovative experiments shaping your digital transformation journey. Afterwards, this list of experiments will be prioritized based on the strategy and vision of your company.",
      open: false,
    },

    {
      question: "What is a makerspace?",
      answer:
        "A makerspace is a collaborative work space inside a school, library or separate public/private facility for making, learning, exploring and sharing that uses high tech to no tech tools.  These spaces are open to kids, adults, and entrepreneurs and have a variety of maker equipment including 3D printers, laser cutters, cnc machines, soldering irons and even sewing machines. ",
      opne: false,
    },
  ]);

  //     const accordian {
  //         var acc = document.getElementsByClassName("accordion")
  // var i;

  // for (i = 0; i < acc.length; i++) {
  //   acc[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     var panel = this.nextElementSibling;
  //     if (panel.style.display === "block") {
  //       panel.style.display = "none";
  //     } else {
  //       panel.style.display = "block";
  //     }
  //   });
  // }
  //     }

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="container">
      {/* <div className="accordian">
                           {faqs.map((faq, i)=>(
                
                     
                    <Faq faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                
            ))}
        </div> */}

      <Accordion defaultActiveKey="0">
        {faqs.map((faq, i) => (
          <Card>
            <Card.Header>
              <Accordion.Toggle
                className="header1"
                as={Button}
                eventKey={i + 1}
              >
                {faq.question}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={i + 1}>
              <Card.Body className="answer" style={{ textAlign: "justify" }}>
                <h5 class="faq-col">{faq.question}</h5>
                {faq.answer}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}

export default Accordian;
