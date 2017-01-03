import React from 'react';

const PostItemList = ({title, categories}) => (
  <a href="#" className="list-group-item">
    <h4 className="list-group-item-heading">{title}</h4>
    <p className="list-group-item-text">{categories}</p>
  </a>
);

// PostItemList.propTypes = {
//   : React.PropTypes.
// };

export default PostItemList;
