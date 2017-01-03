import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class ShowPost extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.params.postId)
  }
  render() {
    return (
      <div className="jumbotron">
        <h1>Hello title</h1>
        <p>content</p>
        <p><Link className="btn btn-primary btn-lg" to="/" role="button">Go home</Link></p>
      </div>
    );
  }

}

function mapStateToProps ({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, actions)(ShowPost);
