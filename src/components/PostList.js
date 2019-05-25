import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserName from './UserName';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
          <div
            className="list-group"
            key={post.id}
            style={{ maxWidth: '30rem', margin: 'auto' }}
          >
            <a
              href="!#"
              className="list-group-item list-group-item-action flex-column align-items-start mt-3"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{post.title}</h5>
                <small>Post ID:{post.id}</small>
              </div>
              <p className="mb-1">
               {post.body}
              </p>
              <UserName userId={post.userId} />
            </a>
          </div>
      );
    })
  }


  render() {
    return <div>{this.renderList()}</div>

   
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
