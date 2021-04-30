import React,{useState} from 'react'
import Faq from '../components/Faq.js';
import Accordion from 'react-bootstrap/Accordion';
import {Button, Card} from 'react-bootstrap';import { useTranslation } from "react-i18next";
import IntlMessages from '../helpers/IntlMessages';

function Accordian() {
    const [faqs, setfaqs]=useState([
       {
          question: <IntlMessages id="question1"/>,
          answer: <IntlMessages id="answer1"/>,
          open: false
        }, 
       {
          question:<IntlMessages id="question2"/>,
          answer:<IntlMessages id="answer2"/>,
          open: false
       },
       {
          question:<IntlMessages id="question3"/>,
          answer:<IntlMessages id="answer3"/>,
          open:false
       },
       {
           question:<IntlMessages id="question4"/>,
           answer:<IntlMessages id="answer4"/>,
           open:false
        },

        {
           question:<IntlMessages id="question5"/>,
           answer:<IntlMessages id="answer5"/>,
           open:false
        },
        {
        question:<IntlMessages id="question6"/>,
        answer:<IntlMessages id="answer6"/>,
         open:false    
       },

       {
           question:<IntlMessages id="question7"/>,
           answer:<IntlMessages id="answer7"/>,
           open:false
        },

        {
            question:<IntlMessages id="question8"/>,
            answer:<IntlMessages id="answer8"/>,
            open:false
        },

        {
          question:<IntlMessages id="question9"/>,
          answer:<IntlMessages id="answer9"/>,
          opne:false
        }


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

    const toggleFAQ = index =>{

        setfaqs(faqs.map((faq, i) => {
            if(i === index){
                faq.open= !faq.open
            }
            else{
                faq.open=false;
            }
            return faq;
        }
        
         ))
    }
    

    return (
        <div className="container">
             
             {/* <div className="accordian">
                           {faqs.map((faq, i)=>(
                
                     
                    <Faq faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                
            ))}
        </div> */}

<Accordion defaultActiveKey="0">
{faqs.map((faq, i)=>(


  <Card >
    <Card.Header >
      <Accordion.Toggle className="header1" as={Button}  eventKey={i+1}>
      {faq.question}

      </Accordion.Toggle >
    </Card.Header>
    <Accordion.Collapse eventKey={i+1}>
      <Card.Body className="answer" style={{textAlign:'justify'}}><h5 class="faq-col" >{faq.question}</h5>{faq.answer}</Card.Body>
    </Accordion.Collapse>
  </Card>
   ))}
</Accordion>
        </div>
       
  
        
    );
}

export default Accordian
