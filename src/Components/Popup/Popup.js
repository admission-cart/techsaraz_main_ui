import React from 'react'

const Popup = () => {
  return (
    <div class="login-popup">
        <div class="box">
             <div class="img-area">
                 <div class="img">
                 </div>
                 <h1>Your Logo</h1>
             </div>
             <div class="form">
                 <div class="close">&times;</div>
                 <h1>Get a Free Quote Now</h1>
                 <form>
                     <div class="form-group">
                         <input type="text" placeholder="Name" class="form-control"/>
                     </div>
                     <div class="form-group">
                        <input type="text" placeholder="Email" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Phone" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <select name="cars" id="dropbox">
                            <option value="volvo">Select Service</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Web Application Development">Web Application Development</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="Ui & Ux Design">Ui & Ux Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Content Writing">Content Writing</option>
                            <option value="Graphics Design">Graphics Design</option>
                          </select>
                    </div>
                    <textarea id="w3review" name="w3review" rows="2" cols="50" placeholder="Comment"></textarea>
                     
                     <button type="button" class="btn">Log In</button>
                 </form>
             </div>
        </div>
   </div>
  )
}

export default Popup
