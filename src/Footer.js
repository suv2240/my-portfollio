import React from 'react';

const Footer = () => {
  return (
    <div id='contact_section'>
      <div id='footer_left_section'>
        <p>Address: Shyamnagar, North 24 Parganas, WB PIN: 743127</p>
        <p>Contact No: 9330802143</p>
        <p>Email: suvankarbairagi@gmail.com</p>
      </div>
      
      <div id='footer_right_section'>
        <form>
          <label htmlFor="name">Name:</label>
          <input type='text' id='name' name='name' placeholder='Enter your name' className='contact_text'/>
          <label htmlFor="email">Name:</label>
          <input type='text' id='email' name='name' placeholder='Enter your email' className='contact_text' />
          <label htmlFor="comment">Name:</label>
          <input type='text' id='comment' name='name' placeholder='Enter your comment'  className='contact_text'/>
        </form>
      </div>
    </div>
  );
};

export default Footer;
