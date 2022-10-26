import React from "react";

const LoginForm = () => {
  return (
    <div className="login">
      <strong>Sign In</strong>
      <form action="">
        {/* email */}
        <label htmlFor="">
          Email <span>*</span>
        </label>
        <div className="input-group">
          <i className="far fa-paper-plane"></i>
          <input type="email" name="" id="" required />
        </div>
        {/* Password */}
        <label htmlFor="">
          Password <span>*</span>
        </label>
        <div className="input-group">
          <i className="far fa-lock"></i>
          <input type="password" name="" id="" required />
        </div>

        {/* buttons */}
        <div className="btns">
          <button type="submit">Login</button>
        </div>

        {/* Forget password */}
        <a href="#!" className="forget">
          {" "}
          forgot your password?
        </a>
      </form>

      <div className="intro-text">
        <span>Welcome To This Site</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In assumenda
          provident nemo recusandae hic cum maxime quis vitae? Facere earum
          neque nemo veritatis nesciunt! Quae placeat cupiditate odio quod
          accusamus.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
