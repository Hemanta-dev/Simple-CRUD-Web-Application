import React from "react";
import "./style.css";
function Footer() {
  return (
    <div>
      <section class="social">
        <br />
        <br />
        <div class="container1 text-center">
          <a href="https://www.facebook.com/">
            <img src="https://img.icons8.com/fluent/50/000000/facebook-new.png" />
          </a>

          <a href="https://www.instagram.com/">
            <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
          </a>

          <a href="https://twitter.com/?lang=en">
            <img src="https://img.icons8.com/fluent/48/000000/twitter.png" />
          </a>
        </div>
      </section>

      <section class="footer">
        <div class="container1 text-center">
          <p>
            {" "}
            Designed By <a>Hemanta Adhikari</a>
          </p>
        </div>
      </section>
    </div>
  );
}
export default Footer;
