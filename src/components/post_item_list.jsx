import React from 'react';
import { Link } from 'react-router';

const PostItemList = ({id, title, categories}) => (
  <Link to={`/post/${id}`} className="list-group-item">
    <span className="pull-right">{categories}</span>
    <strong>{title}</strong>
  </Link>
);

// PostItemList.propTypes = {
//   : React.PropTypes.
// };

export default PostItemList;
