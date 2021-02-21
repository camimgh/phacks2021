
import React, { Component } from "react";
import './About.css';
import Navbar from 'react-bootstrap/Navbar';
import Doctor from '../nice_doctor.jpeg';
import Hug from '../hugging.jpeg';
import MedHist from '../med_history.jpeg';


class About extends Component {
    render() {
        return (
            <div id="about">
                <h1 className="headers">What is <b className="b-aligned">aligned</b>?</h1>
                <p className="normal-text">At aligned.space, we believe that an individual’s sense of safety, inclusion, and acceptance are key to any healthcare experience. 
                    Our platform seeks to provide members of the LGBTQ+ community with better clarity about the health spaces around them. 
                    Through our anonymous rating interface, users can assess local practices share their personal experiences in order to find the treatment options 
                    which best <i><b className="b-aligned">align</b></i> with their needs.</p>
                <h2 className="headers">Privacy</h2>
                <p className="normal-text">Here, your safety and privacy is our number one priority. That is why align emphasizes features such as our anonymous clinic
                 review system, captcha verification to ensure that all data is human provided, 
                 and the requirement that all new providers produce adequate proof of business to ensure the safety and integrity of our platform for its users.</p>
                 <h2 className="headers">With align you can...</h2>
                 <p className="text-align-center"><b><i>Find empathetic professionals.</i></b></p>
                 <img alt="doctor talking with patient" src={Doctor} width="250" height="128" />
                 <p className='text-align-center'>Search the map to find local health professionals whose identities align with your own.</p>
                 <p className="text-align-center"><b><i>Contribute valuable data.</i></b></p>
                 <img alt="two men hugging" src={Hug} width="250" height="128" />
                 <p className="text-align-center">Discover information about healthcare providers in your area and contribute 
                 to the crowdsourcing effort!</p>
                 <p className="text-align-center"><b><i>Explore health resources.</i></b></p>
                 <img alt="medical history document with stethoscope on top" src={MedHist} width="250" height="128" />
                 <p className="text-align-center">Access tools geared toward women's and LGBTQ+ health and receive
                 the additional support your need today.</p>
                 
            </div>
        )
    }
}

export default About;