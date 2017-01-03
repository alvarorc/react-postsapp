import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import PostItemList from '../components/post_item_list';
import { Link } from 'react-router';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const { all } = this.props.posts;
    return (
      <div>
        <Link className="btn btn-info btn-addPost" to='posts/new'>New Post</Link>
        <h1>List of posts</h1>
        {all.map(p => <PostItemList {...p} key={p.id}/>)}
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, {fetchPosts})(PostList);
