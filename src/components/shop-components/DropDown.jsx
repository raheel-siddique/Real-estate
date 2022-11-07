import React from "react";
import { useState } from "react";
import Select from "react-select";
const DropDown = ({ id, label, options, formik }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const selectOptions = [{ id: 0, value: "", label: "None" }, ...options];
  const handleChange = (newValue) => {
    setSelectedItem(newValue);
    formik.setFieldTouched(id, true, false);
    formik.setFieldValue(id, newValue.value);
  };

  return (
    <>
      <div className="col-lg-12 col-sm-4">
        <div className="input-item dropdowncheckout">
          {/* <label htmlFor={id}>
            <b>{label}</b>
          </label> */}
          <Select
            minMenuHeight={200}
            options={selectOptions}
            value={selectedItem}
            onChange={handleChange}
            defaultValue={""}
            styles={{
              control: (provided, state) => ({
                ...provided,
                border: "2px solid #e0e0e0",
                // borderColor: "lightgray",
                borderRadius: 0,
                fontSize: "14px",
                fontWeight: "400",
                height: "65px",
                placeContent: "center",
                // lineHeight: "20px",
                paddingLeft: 10,
                // width: "900px",
                // marginRight: "70px",
                marginBottom: "30px",
              }),
              indicatorSeparator: () => ({}),
              dropdownIndicator: () => ({
                fontSize: "14px",
                position: "absolute",
                top: "50%",
                right: "20px",
                transform: "translateY(-50%)",
                fontFamily: "Font Awesome 5 Free",
                fontWeight: 900,
                color: "#FF5A3C",
              }),
              menu: (provided, state) => ({
                ...provided,
                zIndex: 20,
              }),
              menuList: (provided, state) => ({
                ...provided,
                minWidth: "100%",
                maxHeight: 200,
                backgroundColor: "white",
              }),
            }}
          />
        </div>
        {formik.touched[id] && formik.errors[id] && (
          <div
            className="fv-plugins-message-container"
            style={{ position: "relative", bottom: 30 }}
          >
            <div className="fv-help-block text-danger">
              <span role="alert">{formik.errors[id]}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
