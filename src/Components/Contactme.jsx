import React, { useState } from 'react';
import "../Styles/contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const ContactMe = () => {
  const [formStatus, setFormStatus] = useState('');

  const contactData = [
    {
      id: 'phone',
      title: 'Phone',
      value: '+91 9440997107',
      icon: <BsFillTelephoneFill />,
      action: () => window.location.href = 'tel:9440997107',
      clickable: true
    },
    {
      id: 'location',
      title: 'Location',
      value: 'Jagtial, Telangana',
      icon: <MdLocationOn />,
      clickable: false
    },
    {
      id: 'email',
      title: 'Email',
      value: 'shivakrishna.codes@gmail.com',
      icon: <HiMail />,
      action: () => window.location.href = 'mailto:shivakrishna.codes@gmail.com',
      clickable: true
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Let the form submit naturally to formsubmit.co
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  const handleContactClick = (contact) => {
    if (contact.clickable && contact.action) {
      contact.action();
    }
  };

  return (
    <section className='contact-section' id='contact'>
      <div className='contact-header'>
        <h1 className='contact-title'>
          Contact <span className='contact-title-accent'>Me</span>
        </h1>
      </div>

      <div className='contact-container'>
        {/* Contact Details */}
        <div className='contact-details'>
          {contactData.map((contact, index) => (
            <div
              key={contact.id}
              className='contact-item'
              onClick={() => handleContactClick(contact)}
              style={{ 
                cursor: contact.clickable ? 'pointer' : 'default',
                animationDelay: `${index * 0.1}s`
              }}
              role={contact.clickable ? 'button' : 'article'}
              tabIndex={contact.clickable ? 0 : -1}
              onKeyDown={(e) => {
                if (contact.clickable && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleContactClick(contact);
                }
              }}
              aria-label={contact.clickable ? `Contact via ${contact.title}` : contact.title}
            >
              <div className='contact-item-content'>
                <div className='contact-icon-wrapper'>
                  <div className='contact-icon'>
                    {contact.icon}
                  </div>
                </div>
                <div className='contact-info'>
                  <h3>{contact.title}</h3>
                  <p>{contact.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className='contact-form-section'>
          <div className='form-header'>
            <h2 className='form-title'>Get In Touch</h2>
            <p className='form-subtitle'>
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </div>

          <form 
            className='contact-form' 
            action="https://formsubmit.co/shivakrishna.codes@gmail.com" 
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className='form-group half'>
              <div>
                <input
                  className='form-input'
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  id="name"
                />
                <label className='form-label' htmlFor="name">Full Name</label>
              </div>
              <div>
                <input
                  className='form-input'
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                  id="email"
                />
                <label className='form-label' htmlFor="email">Email Address</label>
              </div>
            </div>

            <div className='form-group'>
              <input
                className='form-input'
                type="text"
                name="_subject"
                placeholder=" "
                required
                id="subject"
              />
              <label className='form-label' htmlFor="subject">Subject</label>
            </div>

            <div className='form-group'>
              <textarea
                className='form-textarea'
                name="message"
                placeholder=" "
                required
                id="message"
                rows="5"
              ></textarea>
              <label className='form-label' htmlFor="message">Your Message</label>
            </div>

            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_captcha" value="false" />

            <button 
              type="submit" 
              className='submit-button'
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus === 'success' && (
              <p style={{ color: 'green', textAlign: 'center', marginTop: '1rem' }}>
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
