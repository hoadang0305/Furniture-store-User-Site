import React from "react";
import "./styles.css";

const Register = () => {
  return (
    <>
      <div className="wrapper">
        <form action="action_page.php">
          <div className="container">
            <h1 style={{ color: `rgb(178, 58, 98)` }}>Sign Up</h1>
            <hr />

            <div className="form-item-container">
              <div className="item-container">
                <label for="name" style={{ color: `rgb(178, 58, 98)` }}>
                  <b>Full name</b>
                </label>
                <span id="reName">required</span>
                <input
                  type="text"
                  placeholder="Enter Full name"
                  name="name"
                  id="name"
                  required
                />
              </div>

              <div className="item-container">
                <label for="email" style={{ color: `rgb(178, 58, 98)` }}>
                  <b>Email</b>
                </label>
                <span id="reEmail">required</span>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  required
                />
              </div>

              <div className="item-container">
                <label for="phone" style={{ color: "rgb(178, 58, 98)" }}>
                  <b>Phone number</b>
                </label>
                <span id="rePhone">required</span>
                <input
                  type="text"
                  placeholder="Enter Phone number"
                  name="phone"
                  id="phone"
                  required
                />
              </div>

              <div className="item-container">
                <label for="psw" style={{ color: "rgb(178, 58, 98)" }}>
                  <b>Password</b>
                </label>
                <span id="rePass">required</span>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  id="psw"
                  required
                />
                <img src="eye-close.png" id="eyeicon" alt="" />
                <script src="script2.js"></script>
              </div>

              <div className="button-group-container">
                <button id="yes" className="btn signup">
                  Sign up
                </button>
                <button id="no" className="btn cancel">
                  Cancel
                </button>
              </div>

              <div className="signup-container">
                <h5 style={{ color: "rgb(178, 58, 98)" }}>
                  Already have an account?
                </h5>
                <h5>
                  <a href="signin.html">Sign in</a>
                </h5>
              </div>

              <script src="script1.js"></script>
            </div>
            <hr />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
