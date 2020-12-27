import React, { Fragment } from "react";

const renderField = (field) => {
  return (
    <Fragment>
      <label>{field.label}</label>

      <input
        type="text"
        className="form-control"
        placeholder={field.placeholder}
        {...field.input}
      />
      <div className="text-danger">
        {field.meta.touched ? field.meta.error : ""}
      </div>
    </Fragment>
  );
};

export default renderField;
