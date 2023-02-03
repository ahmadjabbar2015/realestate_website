// import Select from "react-select/dist/declarations/src/Select";
import { useState, useEffect } from "react";
import Select from "react-select";
const PropertyTypes = ({ types, onFormChange, propertytype }) => {
  //   const options = types.map((type) => {
  //     return {
  //       label: type.type,
  //       value: type.id,
  //     };
  //   });
  const options = types.map((type) => {
    return (
      <option key={type.id} value={type.id}>
        {type.type}
      </option>
    );
  });

  const handleOnChange = (e) => {
    onFormChange(e);
  };
  const [select, setSelect] = useState("");
  useEffect(() => {
    if (propertytype) {
      setSelect(propertytype);
    }
  }, [propertytype]);
  return (
    <div className="col-md d-flex">
      <div className="form-group p-4">
        <label htmlFor="#">Property Type</label>
        <div className="form-field">
          <div className="select-wrap">
            <div className="icon">
              <span className="fa fa-chevron-down"></span>
            </div>
            <select
              name="propertytype"
              className="form-control"
              value={select}
              onChange={handleOnChange}
            >
              <option value="">Select</option>
              {options}
            </select>
            {/* <Select
              placeholder="Select Option u"
              name="propertytype"
              id=""
              //   className="form-control"
              onChange={onFormChange}
              value={propertytype}
              options={options}
            ></Select> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyTypes;
