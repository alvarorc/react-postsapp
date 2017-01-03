import React, { Component } from 'react';
import { classNames } from '../utils';

const Input = field => {
  const classes = classNames("form-group", {
    'has-error': (field.meta.touched && field.meta.error)
  });
  return (
    <div className={classes}>
      <label className="control-label title">{`${field.input.name}:`}</label>
      <input {...field.input} className={field.className}/>
      {field.meta.touched && field.meta.error &&
        <span className="error"><i className="glyphicon glyphicon-info-sign"></i> {field.meta.error}</span>}
    </div>
  )
};

export default Input;
