import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

moment().format();
const PropertyList = ({ lists }) => {
  let properties = [];
  // debugger;
  if (lists.data) {
    properties = lists.data || [];
    // console.log(lists.data);
  } else {
    // alert("H");
  }
  let image_url = "./images/bg_3.jpg";
  return (
    <div className="row">
      {properties.map(
        (property) => (
          (image_url = property?.property_images?.image_url
            ? property.property_images.image_url
            : "./images/bg_3.jpg"),
          (
            <div
              className="col-md-3"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              key={property.id}
            >
              <div className="property-wrap">
                <Link
                  to={`/property/${property.id}`}
                  className="img img-property"
                  style={{ backgroundImage: "url('" + image_url + "')" }}
                >
                  <p className="price">
                    <span className="orig-price">${property.rent}</span>
                  </p>
                </Link>
                <div className="text">
                  <div className="list-team d-flex align-items-center mb-4">
                    <div className="d-flex align-items-center">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url(images/person_1.jpg)",
                        }}
                      ></div>
                      <h3 className="ml-2">{property.landlord}</h3>
                    </div>
                    <span className="text-right">
                      {moment(property.created_at).fromNow()}
                      {/* {property.created_at.toLocaleString("en-US")} */}
                    </span>
                  </div>
                  <h3>
                    <Link to={`/property/${property.id}`}>{property.name}</Link>
                  </h3>
                  <span className="location">
                    <FontAwesomeIcon icon="map-marker" />{" "}
                    {property.location.city}
                    <span className="sale">Sale</span>
                  </span>
                  <ul className="property_list mt-3 mb-0">
                    <li>
                      <FontAwesomeIcon icon="bed" />

                      {property.amenities.bedroom}
                    </li>
                    <li>
                      <FontAwesomeIcon icon="bath" />
                      {property.amenities.bathroom}
                    </li>
                    <li>
                      <FontAwesomeIcon icon="map" />
                      {property.area} sqft
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};

export default PropertyList;
