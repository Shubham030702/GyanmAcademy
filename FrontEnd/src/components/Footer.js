import React from 'react'
import './css/Footer.css'
function Footer() {
  return (
    <>
    <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h4>Contact Us</h4>
        <p>
          <strong>Gyanm Academy</strong><br/>
          Near NIT srinagar garhwal<br/>
          Srinagar, Uttarakhand<br/>
          Phone: 9557121439<br/>
          Email: amituniyal10@gmail.com
        </p>
      </div>
      <div className="col-md-4">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="logo">
        
      </div>
    </div>
  </div>
  <div className="bottom-bar">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p className="text-center">&copy; 2023 Gyanm Academy. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
