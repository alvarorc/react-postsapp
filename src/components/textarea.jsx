import React from 'react';
import { classNames } from '../utils';

const TextArea = field => {
  const classes = classNames("form-group", {
    'has-error': (field.meta.touched && field.meta.error)
  })
  return (
    <div className={classes}>
      <label className="control-label">Content:</label>
      <textarea {...field.input}
        className={field.className}
        rows="3"
        style={{resize: 'none'}}
      />
      {field.meta.touched && field.meta.error &&
        <span className="error"><i className="glyphicon glyphicon-info-sign"></i> {field.meta.error}</span>}
    </div>
  );
}
export default TextArea;
