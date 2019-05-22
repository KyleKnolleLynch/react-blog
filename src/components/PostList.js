import React, { Component, Fragment } from 'react';

class PostList extends Component {
  render() {
    return (
      <Fragment>
      <div className="list-group" style={{maxWidth: "30rem", margin: "auto"}}>
        <a
          href="!#"
          className="list-group-item list-group-item-action flex-column align-items-start active mt-3"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Heading</h5>
            <small>info</small>
          </div>
          <p className="mb-1">blog text here</p>
          <small>more info</small>
        </a>
    
        <a
          href="!#"
          className="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Heading</h5>
            <small>info</small>
          </div>
          <p className="mb-1">blog text here</p>
          <small>more info</small>
        </a>
      </div>
      </Fragment>
    );
  }
}

export default PostList;
