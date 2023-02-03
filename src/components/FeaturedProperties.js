import PropertyList from "../lists/PropertyList";
const FeaturedProperties = ({ propertyList, heading, subHeading }) => {
  let image_url = "";
  return (
    <section className="ftco-section bg-light">
      <div className="container-xl">
        <div className="row justify-content-center">
          <div
            className="col-md-8 heading-section text-center mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="subheading">{subHeading}</span>
            <h2 className="mb-4">{heading}</h2>
          </div>
        </div>
        <PropertyList lists={propertyList} />
      </div>
    </section>
  );
};
export default FeaturedProperties;
