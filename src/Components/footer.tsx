import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer
      className="pt-5 pb-3 text-white"
      style={{ background: "linear-gradient(to top right, #08324b, #0a1b39)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src="/footerlogo.png"
                alt="SMBF Logo"
                height="36"
                className="me-2"
              />
            </div>
            <p className="text-white-50 large mb-3">
              Supporting Muslim businesses, through ethical and meaningful
              collaboration, to positively impact the world.
            </p>
            <div className="d-flex gap-3">
              <a href="/" className="text-white fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="/" className="text-white fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/" className="text-white fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/" className="text-white fs-5">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase text-white fw-bold mb-3 small">
              Menu
            </h6>
            <ul className="list-unstyled large d-flex flex-column gap-2">
              <li>
                <a href="/" className="text-decoration-none text-white-50">
                  Member Login
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none text-white-50">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none text-white-50">
                  Member Benefits
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none text-white-50">
                  Events
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none text-white-50">
                  Business Delegations
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none text-white-50">
                  Support Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase text-white fw-bold mb-3 small">
              Links
            </h6>
            <ul className="list-unstyled large d-flex flex-column gap-2">
              <li>
                <a href="/" className="text-decoration-none text-white-50">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none text-white-50">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none text-white-50">
                  Event Registration Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase text-white fw-bold mb-3 small">
              Get in Touch
            </h6>
            <p className="mb-1 large text-white-50">0121 820 8259</p>
            <p className="mb-3 large text-white-50">enquiries@smbf.global</p>
            <button
              className="btn btn-sm fw-bold text-white rounded-pill px-4 py-2"
              style={{
                background: "linear-gradient(to right, #4cb8c4, #3cd3ad)",
              }}
            >
              CONTACT US
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-3 small text-white">
          Copyright SMBF © 2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
