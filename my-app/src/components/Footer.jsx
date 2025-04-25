import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="newsletter">
          <h2>Join the VIP List Today</h2>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://x.com/i/flow/login">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
