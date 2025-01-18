import React, { useContext, useState } from 'react';
import { images } from '../../Constant/images';
import { PopUpContext, useToast } from '../../Context/ToastContext';
import emailjs from 'emailjs-com';

const Popup = () => {
  
  const {isPopUp, togalPopUp} = useContext(PopUpContext)
  const { showToast } = useToast();
  // const { supportImage } = images;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [comment, setComment] = useState('');
  // const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();
    e.stopPropagation();
    if (!name || !email || !phone || !comment) {
      showToast('error', 'All fields are mandatory!');
      return;
    }
    const templateParams = {
      name: name,
      email: email,
      message: `Hi I have query regarding ${comment}. You can contact me on ${phone} or ${email}`,
      services: service,
    };
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        () => {
          showToast(
            'success',
            'The email has been sent successfully. The team will connect with you shortly.',
          );
        })
        .catch((error) => {
          if(process.env.NODE_ENV !== 'production'){
            console.error(error)
          }
          showToast('error', 'Something went wrong. Please try again!');
        },
      );
      togalPopUp(false);
  };

  
  
  return (
    <div className="login-popup" style={{display: !isPopUp ? 'none' : 'block'}}>
     <div className="box">
         <div className="img-area">
            <div className="popup-img">
            </div>
            <div className="logo-image">
                <img src={images.techSarazPopUpLogo} alt="TechSaraz Logo Image"/>
            </div>
            <div className="popup-social-icon-group">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
         </div>
         <div className="popup-form">
            <div className="close" onClick={()=>togalPopUp(false)}>&times;</div>
            <h1 className="popup-heading">Get a Free Quote Now</h1>
            <hr className="popup-hr"/>
            <form>
                <div className="form-group">
                  <input type="text" placeholder="Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Phone" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div className="form-group">
                  <select name="cars" id="dropbox" value={service} onChange={(e)=>setService(e.target.value)}>
                    <option value="volvo">Select Service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Web Application Development">
                      Web Application Development
                    </option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Ui & Ux Design">Ui & Ux Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="Graphics Design">Graphics Design</option>
                  </select>
                </div>
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="3"
                  cols="50"
                  placeholder="Comment"
                  value={comment}
                  onChange={(e)=>setComment(e.target.value)}
                ></textarea>
   
                <button type="button" className="pop-up-btn" onClick={(e)=>handleSubmit(e)}>
                  Submit
                </button>
              </form>
         </div>
     </div>
    </div>
  )
}

export default Popup;
