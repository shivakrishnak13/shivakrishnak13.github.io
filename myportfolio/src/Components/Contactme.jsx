import React from 'react';
import "../Styles/contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import {HiMail} from "react-icons/hi";
import {MdLocationOn} from "react-icons/md";


const Contactme = () => {
    return (
        <div className='Contact-maindiv'>
            <div className='heading-div'>
                <button className='heading-textbtn'>
                    <h1 className='mainheading'>Contact <span style={{ color: "#0e4166" }}>Me</span></h1>
                </button>
            </div>

            <div className='contact'>

                {/* contact details */}
                <div className='contact-details'>
                    <div className="details-cards">
                        <div className="details-card red">
                            <div>
                                <div>
                                <BsFillTelephoneFill className='contact-icon'/>
                                </div>
                                <p>9440997107</p>
                            </div>
                        </div>
                        <div className="details-card blue">
                            <div>
                                <div>

                                <MdLocationOn className='contact-icon'/>
                                </div>
                                <p>Jagtial, Telangana</p>
                            </div>
                        </div>
                        <div className="details-card green">
                            <div>
                                <div>

                                <HiMail className='contact-icon' />
                                </div>
                                <p>kosarishivakrishna10@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact form */}

                <div className='contact-form-div'>

                    <div className="contact-card">

                        <span className="contact-title">Feel Free To Contact</span>
                        <form className="contact-form">
                            <div className="contact-group">
                                <input placeholder="‎" type="text" required="" />
                                <label for="name">Name</label>
                            </div>
                            <div className="contact-group">
                                <input placeholder="‎" type="email" id="email" name="email" required="" />
                                <label for="email">Email</label>
                            </div>
                            <div className="contact-group">
                                <input placeholder="‎" type="text" id="subject" name="subject" required="" />
                                <label for="subject">Subject</label>
                            </div>
                            <div className="contact-group">
                                <textarea placeholder="‎" id="comment" name="comment" rows="5" required=""></textarea>
                                <label for="comment">Message</label>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                </div>



            </div>





        </div>
    )
}

export default Contactme