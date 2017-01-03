import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import Input from '../components/input';
import TextArea from '../components/textarea';
import { newPostValidate as validate } from '../validations';
import { withRouter } from 'react-router'

import { connect } from 'react-redux';
import { createPost } from '../actions';

const form = reduxForm({
  form: 'NewPostForm',
  validate
});

class PostForm extends Component {

  onSubmit(values) {
    this.props.createPost(values)
      .then(() => { this.props.router.push('/') })
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div className="col-md-6 col-center">
        <h2>Create new post</h2>
        <form className="form-group"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          style={{margin: '0 auto', float: 'none'}}>
          <Field className="form-control"
            component={Input}
            name="title"/>
          <Field className="form-control"
            component={Input}
            name="categories"/>
          <Field name="content"
            component={TextArea}
            className="form-control"/>
          <button type="submit" className="btn btn-success" style={{float: 'left', width: '35%'}} disabled={submitting}>Save</button>
          <Link to='/' type="button" className="btn btn-danger" style={{float: 'right', width: '35%'}}>Cancel</Link>
        </form>
      </div>
    );
  }
}

export default connect(null, {createPost})(withRouter(form(PostForm)));
