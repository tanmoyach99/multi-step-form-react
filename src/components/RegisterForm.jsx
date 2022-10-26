import React, { useState } from "react";

const RegisterForm = () => {
  //   const [active, setActive] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  function plusIndex(n) {
    setCurrIndex((prev) => prev + n);
  }
  function handleNext(e) {
    e.preventDefault();
    plusIndex(1);
    console.log("clicked");
  }
  return (
    <div className="register">
      <strong>Sign Up</strong>
      {/* progress bar */}
      <div className="progress-bar">
        <ul>
          <div
            className="progress"
            style={{ width: `calc(100%/3 * ${currIndex})` }}
          ></div>
          {["Name", "Contact", "Birth", "Submit"].map((item, index) => {
            return (
              <li
                key={item}
                data-title={item}
                className={`${currIndex >= index ? "active" : ""}`}
              >
                {index + 1}
              </li>
            );
          })}
        </ul>
      </div>

      {/* pages */}
      <div className="wrapper" style={{ marginLeft: `${currIndex * -100}%` }}>
        {/* Basic info */}
        <form onSubmit={handleNext}>
          {/* First Name */}
          <label htmlFor="">
            First Name<span>*</span>
          </label>
          <div className="input-group">
            <i className="fa-solid fa-user "></i>
            <input type="text" name="" id="" required />
          </div>

          {/* Last Name */}
          <label htmlFor="">
            Last Name<span>*</span>
          </label>
          <div className="input-group">
            <i className="fa-solid fa-user "></i>
            <input type="text" name="" id="" required />
          </div>

          {/* buttons */}
          <div className="btns">
            <button type="submit">Next</button>
          </div>
        </form>

        {/* Contact */}

        <form onSubmit={handleNext}>
          {/* email */}
          <label htmlFor="">
            Email <span>*</span>
          </label>
          <div className="input-group">
            <i className="far fa-paper-plane"></i>
            <input type="email" name="" id="" required />
          </div>
          {/* Phone Number */}
          <label htmlFor="">
            Phone Number <span>*</span>
          </label>
          <div className="input-group">
            <i className="fa fa-phone"></i>
            <input type="number" name="" id="" required />
          </div>

          {/* buttons */}
          <div className="btns">
            <button type="button" onClick={() => plusIndex(-1)}>
              Prev
            </button>
            <button type="submit">Next</button>
          </div>
        </form>

        {/* Date of Birth */}

        <form onSubmit={handleNext}>
          {/* Date */}
          <label htmlFor="">
            Email <span>*</span>
          </label>
          <div className="input-group">
            <i className="far fa-copy"></i>
            <input type="date" name="" id="" required />
          </div>
          {/* Gender */}
          <label htmlFor="">
            Gender <span>*</span>
          </label>
          <div className="input-group">
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* buttons */}
          <div className="btns">
            <button type="button" onClick={() => plusIndex(-1)}>
              Prev
            </button>
            <button type="submit">Next</button>
          </div>
        </form>

        {/* Submit*/}

        <form>
          {/* User Name */}
          <label htmlFor="">
            Name <span>*</span>
          </label>
          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input type="text" name="" id="" required />
          </div>
          {/* Password */}
          <label htmlFor="">
            Password <span>*</span>
          </label>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" name="" id="" required />
          </div>

          {/* buttons */}
          <div className="btns">
            <button type="button" onClick={() => plusIndex(-1)}>
              Prev
            </button>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>

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

export default RegisterForm;
