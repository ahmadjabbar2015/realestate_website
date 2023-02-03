import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useState } from "react";
import PropertySearch from "../actions/propertySearch.js";
import { useEffect } from "react";

const SingleProperty = () => {
  const { id } = useParams();
  const url = PropertySearch();
  const [property, setProperty] = useState([]);
  const fetchProperty = () => {
    url.get("/property/" + id).then((res) => {
      setProperty(res.data.data[0]);
      console.log(res.data.data[0]);
    });
  };
  useEffect(() => {
    fetchProperty();
  }, []);
  console.log(id);
  return (
    <>
      <section className="ftco-section" style={{ padding: " 4.9em 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <hr className="hr" />
              <h5 style={{ marginBottom: "0" }}>
                {property?.name ? property.name : ""}
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <hr className="hr" />
          <div className="row">
            <div className="col-lg-8 blog-single">
              <div className="propertyImage-container">
                <img
                  src={
                    property?.property_images?.image_url
                      ? property.property_images.image_url
                      : "./images/bg_3.jpg"
                  }
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="feature-widget">
                <div className="main-features">
                  <div className="feature">
                    <div>
                      <FontAwesomeIcon icon="bed" />
                    </div>
                    {property?.amenities?.bedroom
                      ? property.amenities.bedroom
                      : ""}
                  </div>
                  <div className="feature">
                    <div>
                      <FontAwesomeIcon icon="bath" />
                    </div>
                    {property?.amenities?.bathroom
                      ? property.amenities.bathroom
                      : ""}
                  </div>
                  <div className="feature">
                    <div>
                      <FontAwesomeIcon icon="ruler-combined" />
                    </div>
                    {property?.area ? property.area : ""}
                  </div>
                </div>
              </div>
              <div className="navbar navbar-expand-lg ftco-navbar-dark">
                <div className="collapse navbar-collapse" id="">
                  <ul
                    className="navbar-nav m-auto mb-2 mb-lg-0"
                    style={{ justifyContent: "space-between", width: "100%" }}
                  >
                    <li className="nav-item">
                      <a className="nav-link" href="index-2.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="properties.html">
                        Properties
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="agents.html">
                        Agents
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="tab-detail">
                <div className="tab-detail__heading-container">
                  <h3 className="tab-detail__heading">Overview</h3>
                </div>
                <div className="tab-detail__body">
                  <div className="tab-detail__sub-heading-container">
                    <h5 className="tab-detail__sub-heading">Details</h5>
                  </div>
                  <ul
                    className="tab-detail__list"
                    style={{ columns: "2" }}
                    aria-label="Property details"
                  >
                    <li className="tab-detail__list-item">
                      <span className="list-item_col-1">Type</span>
                      <span className="list-item_col-2" aria-label="Type">
                        House
                      </span>
                    </li>

                    <li className="tab-detail__list-item">
                      <span className="list-item_col-1">Type</span>
                      <span className="list-item_col-2" aria-label="Type">
                        House
                      </span>
                    </li>
                    <li className="tab-detail__list-item">
                      <span className="list-item_col-1">Type</span>
                      <span className="list-item_col-2" aria-label="Type">
                        House
                      </span>
                    </li>
                    <li className="tab-detail__list-item">
                      <span className="list-item_col-1">Type</span>
                      <span className="list-item_col-2" aria-label="Type">
                        House
                      </span>
                    </li>
                  </ul>
                </div>
                <hr />
                <div className="tab-detail__body">
                  <div className="tab-detail__sub-heading-container">
                    <h5 className="tab-detail__sub-heading">Description</h5>
                  </div>
                  <div
                    className="tab-detail_description"
                    style={{ maxHieght: "120px" }}
                  >
                    <div>
                      <div className="" aria-label="Property description">
                        <div dir="auto">
                          <span className="">
                            Chohan HAY Estate Offers
                            <br />- Front Back Open
                            <br />- Lane Corner House
                            <br />- 6 Bedrooms with Attached Washrooms
                            <br />- Drawing and TV Lounge
                            <br />- Elegant Kitchen
                            <br />- Modern Bath
                            <br />- Wooden Floor
                            <br />- Servant Quarters with Kitchen and Washroom
                            <br />- Laundry Area
                            <br />- Terrace
                            <br />- Lawn
                            <br />- Water Bore and CDA Water
                            <br />- Very Prime Location
                            <br />- Don t Waste Your Time, Just Grab this
                            Opportunity
                            <br />
                            For more information and other information, Kindly
                            contact at mentioned numbers or visit CHOHAN HAY
                            ESTATE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="tab-detail__body">
                  <div className="tab-detail__sub-heading-container">
                    <h5 className="tab-detail__sub-heading">Amenities</h5>
                  </div>
                </div>
              </div>

              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    house
                  </a>
                  <a href="#" className="tag-cloud-link">
                    real estate
                  </a>
                  <a href="#" className="tag-cloud-link">
                    estate
                  </a>
                  <a href="#" className="tag-cloud-link">
                    commercial
                  </a>
                </div>
              </div>
              <div className="about-author d-flex p-4 bg-light rounded">
                <div className="bio mr-5">
                  <img
                    src="images/person_1.jpg"
                    alt="Image placeholder"
                    className="img-fluid mb-4"
                  />
                </div>
                <div className="desc">
                  <h3>George Washington</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus itaque, autem necessitatibus voluptate quod mollitia
                    delectus aut, sunt placeat nam vero culpa sapiente
                    consectetur similique, inventore eos fugit cupiditate
                    numquam!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar">
              <div className="comment-form-wrap">
                <form
                  action="#"
                  className="p-4 p-lg-4"
                  style={{ backgroundColor: " #081637" }}
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" className="form-control" id="name" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="website">Website</label>
                        <input
                          type="url"
                          className="form-control"
                          id="website"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name=""
                          id="message"
                          cols="20"
                          rows="6"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Post Comment"
                          className="btn py-3 px-4 btn-primary"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="sidebar-box bg-light rounded">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </form>
              </div>
              <div className="sidebar-box">
                <div className="categories">
                  <h3>Property Type</h3>
                  <li>
                    <a href="#">Land</a>
                  </li>
                  <li>
                    <a href="#">Residential</a>
                  </li>
                  <li>
                    <a href="#">Commercial</a>
                  </li>
                  <li>
                    <a href="#">Industrial</a>
                  </li>
                </div>
              </div>
              <div className="sidebar-box">
                <h3>Recent Blog</h3>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url(images/image_1.jpg)" }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">Far far away, behind the word mountains</a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="fa fa-calendar"></span> December 02,
                          2020
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-user"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-comment"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url(images/image_2.jpg)" }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">Far far away, behind the word mountains</a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="fa fa-calendar"></span> December 02,
                          2020
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-user"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-comment"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url(images/image_3.jpg)" }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">Far far away, behind the word mountains</a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="fa fa-calendar"></span> December 02,
                          2020
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-user"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-comment"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-box">
                <h3>Tag Cloud</h3>
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    real
                  </a>
                  <a href="#" className="tag-cloud-link">
                    estate
                  </a>
                  <a href="#" className="tag-cloud-link">
                    house
                  </a>
                  <a href="#" className="tag-cloud-link">
                    home
                  </a>
                  <a href="#" className="tag-cloud-link">
                    agent
                  </a>
                  <a href="#" className="tag-cloud-link">
                    offoce
                  </a>
                  <a href="#" className="tag-cloud-link">
                    rent
                  </a>
                  <a href="#" className="tag-cloud-link">
                    sale
                  </a>
                  <a href="#" className="tag-cloud-link">
                    realtors
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProperty;
