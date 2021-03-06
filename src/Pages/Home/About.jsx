import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {

    const scroll = () => {
        props.scrollPage("Staff");
    }

    return (
        <React.Fragment>

            {/* <br/><br/><br/><br/>
            <br/><br/><br/><br/> */}
            
            <h2>About us</h2>
            <h4>What kinds of SEN do we provide for?</h4>
            <p className="justify">
                We are committed to ensuring 
                that all pupils achieve their potential, personally, socially, emotionally and academically 
                across all areas of the curriculum, regardless of their gender, ethnicity, social background 
                or religion.
            </p>

            <div className="card" >

                    <h3>Our Local Offers</h3>
                    <ul>
                        <li>
                            <a href="https://www.wisherefordshire.org/marketplace/cat/vendor/1776">Herefordshire County Council</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://www.staffordshireconnects.info/kb5/staffordshire/directory/service.page?id=k_BV9WkXsp8&localofferchannel=0">Staffordshire County Council</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://raw.githubusercontent.com/EllisCWells/WribbenhallFiles/master/Local%20Offer%20Worestershire.docx">Worcestershire Children First</a>
                        </li>
                    </ul>
                    <h3>Quick links:</h3>
                    <Link to={{ pathname: '/contact', state: {form: "application"} }} className="link"><h4>Click here to make a pupil application</h4></Link>
                    <Link to='' className="link" onClick={scroll}><h4>Click here to view our current Vacancies</h4></Link>
                    <Link to='/policies'className="link"><h4>Click here to view our policies</h4></Link>
                    <img src={require("../../Images/thrive_logo.png")} id="thrive-logo" alt=""/>
            
            </div>

        </React.Fragment>
    );
}

export default About;
