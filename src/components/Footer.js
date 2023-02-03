import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="ftco-footer">
      <div className="container-xl">
        <div className="row mb-5 pb-5 justify-content-between">
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 logo d-flex">
                <a
                  className="navbar-brand align-items-center"
                  href="index-2.html"
                >
                  <span className="">
                    CrossDevLogix <small>Real Estate Agency</small>
                  </span>
                </a>
              </h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <ul className="ftco-footer-social list-unstyled mt-2">
                <li>
                  <a href="#">
                    <span className="fa fa-instagram">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-instagram">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-instagram">
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Offers</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Properties
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Agents
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Locations
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Clients
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Company</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Blog
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Terms
                    &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>User's
                    Guide
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Support
                    Center
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-chevron-right mr-2"></span>Press Info
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map marker"></span>
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-phone"></span>
                      <span className="text">+2 392 3929 210</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-paper-plane pr-4"></span>
                      <span className="text">
                        <span
                          className="__cf_email__"
                          data-cfemail="8ae3e4ece5caf3e5fff8eee5e7ebe3e4a4e9e5e7"
                        >
                          [email&#160;protected]
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 py-5 bg-darken">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12 text-center">
              <p
                className="mb-0"
                style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "13px" }}
              >
                Copyright &copy;
                <script
                  data-cfasync="false"
                  src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                ></script>
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This template is made with
                <i
                  className="fa fa-heart color-danger"
                  aria-hidden="true"
                ></i>{" "}
                by
                <a
                  href="https://crossdevlogix.com/"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  CrossDevLogix
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
