import React, { useState } from 'react';
// import { images } from '../../Constant/images';
import { useToast } from '../../Context/ToastContext';
import { constants } from '../../Constant/constants';

const ContactForm = () => {
  const { showToast } = useToast();
  // const { supportImage } = images;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!name || !email || !phone || !message) {
      showToast('error', 'All fields are mandatory!');
      return;
    }
    const payload = {
      toEmail: process.env.REACT_APP_TO_EMAIL,
      subject: process.env.REACT_APP_SUBJECT,
      fromEmail: process.env.REACT_APP_FROM_EMAIL,
      fromEmailName: process.env.REACT_APP_FROM_EMAIL_NAME,
      htmlTemplate: `<!DOCTYPE html>             <html>             <head><meta charset='UTF-8' /><title>Your OTP Code</title></head>             <body style='font-family:Arial,sans-serif;background:#f4f6f8;padding:20px;>             <div style='max-width:500px;margin:auto;background:#fff;padding:30px;text-align:center;border-radius:8px;'>       <h2>name: ${name} </h2>    <p>Hi I have query regarding ${message}. You can contact me on ${phone} or ${email}</p>                 </div>             </body>             </html>`
    }
    const response = await fetch(constants?.apiUrl?.SEND_MAIL,{
      method: constants?.apiMethod?.POST,
      headers: {...constants?.apiHeader?.JSON, 'Authorization': process.env.REACT_APP_AUTHORIZATION},
      body: JSON.stringify(payload)
    })
    if(response?.status === constants?.apiResponse?.SUCCESS_CODE){
      showToast('success', 'Thanks for your query. we will respond soon');
      setMessage('');
      setEmail('');
      setName('');
      setPhone('');
      setServices('');
    }
  };

  return (
    <>
      <section className="contact-fill-up">
        {/* <div className="about-company-pulse">
          <img src={supportImage} alt="Support" />
        </div> */}
        <div className="contact-fill-up-in-box">
          <div className="contact-fill-up-in-box-textbox">
             <div className="top-heading">
              <button className="top-heading-text justify-center">
                CONTACT WITH US! 
                <span className="top-section-span-round"></span>
              </button>
             </div>
              <div className="full-heading-text-color-change-span">
              Have Any<span className='heading-text-color-change-span'> Questions?</span>
            </div>
            <p className="contact-fill-up-in-box-up-p">
              Enthusiastically disintermediate one-to-one leadership via
              business e-commerce. Dramatically reintermediate compelling
              process improvements rather than empowered relationships.
            </p>
          </div>

          <div className="contact-fill-up-in-box-fillup">
            <form
              onSubmit={handleSubmit}
              className="contact-fill-up-in-box-fillup-wraper"
            >
              <div className="contact-fill-up-in-box-fillup-wraper23">
                <div className="contact-fill-up-in-box-fillup-name-input">
                  <input
                    type="text"
                    name="name"
                    id="contact-fill-up-in-box-fillup-name-input-input"
                    placeholder="Full Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="contact-fill-up-in-box-fillup-email-input">
                  <input
                    type="email"
                    name="email"
                    id="contact-fill-up-in-box-fillup-email-input-input"
                    placeholder="Email Address*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-fill-up-in-box-fillup-phone-input">
                  <input
                    type="text"
                    name="phone"
                    id="contact-fill-up-in-box-fillup-email-phone-input"
                    placeholder="Phone Number*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="contact-fill-up-in-box-fillup-services-input">
                  {/* <input
                    type="text"
                    name="phone"
                    id="contact-fill-up-in-box-fillup-email-phone-input"
                    placeholder="Phone Number*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  /> */}

                  <div className="select-wraper">
                    <select
                      name="cars"
                      id="contact-fill-up-in-box-fillup-services-input-child-box"
                      value={services}
                      onChange={(e) => setServices(e.target.value)}
                    >
                      <option value="Select Services">Select Services</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Web Application Development">
                        Web Application Development
                      </option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Ui & Ux Design">Ui & Ux Design</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Content Writing">Content Writing</option>
                      <option value="Graphics Design">Graphics Design</option>
                      <option value="Ecommerce Development">
                        Ecommerce Development
                      </option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="Software Development">
                        Software Development
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <textarea
                id="contact-fill-up-in-box-fillup-textarea"
                name="w3review"
                rows="6"
                cols="50"
                placeholder="Write Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="contact-us-btn pt">
                <button type="submit" className="section-btn-btn">
                  CONTACT US
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
