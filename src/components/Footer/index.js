import "./footer.css";

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="item">
            <h4>Funiro.</h4>
            <ul>
              <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </ul>
          </div>
          <div className="item">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="item">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">Payment Options</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </div>
          <div className="item">
            <h4>Newsletter</h4>
            <div className="input-box">
              <li>
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                ></input>
              </li>
              <li>
                <input type="button" value="SUBSCRIBE"></input>
              </li>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="bottom">
          <div className="logo-details"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
