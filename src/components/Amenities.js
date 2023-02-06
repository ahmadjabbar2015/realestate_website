import { json } from "react-router-dom";

const Amenities = ({ amenity }) => {
  const parsed = new Function("return " + amenity)();
  return (
    <>
      {parsed &&
        parsed.map((e, i) => {
          return (
            <a href="void:0" key={i} className="tag-cloud-link">
              {e}
            </a>
          );
        })}
    </>
  );
};
export default Amenities;
