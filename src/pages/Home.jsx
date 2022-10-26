import React from "react";
import "../styles/Home.css";
import img from "../images/email.svg";

const Home = ({ isAuth, setIsAuth }) => {
  return (
    <div id="Home" className={`${isAuth.open ? "active" : ""}`}>
      <div className="container">
        {/* image */}
        <div className="img">
          <img src={img} alt="" />
        </div>
        {/* content */}
        {/*  */}
      </div>
      <div className="text-btns">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
          eligendi.
        </p>

        <div className="btns">
          <a
            href="#!"
            className="login-btn"
            onClick={() => setIsAuth({ open: true, form: "login" })}
          >
            Login
          </a>
          <a
            href="#!"
            className="register-btn"
            onClick={() => setIsAuth({ open: true, form: "register" })}
          >
            {" "}
            Register
          </a>
        </div>
        <span>or via social media</span>
        <div className="via-social">
          <a href="#!">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#!">
            <i class="fa-brands fa-google"></i>
          </a>
          <a href="#!">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
      Home
    </div>
  );
};

export default Home;
