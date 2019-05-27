import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserName extends Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <small>
        <strong>{user.name}</strong>
      </small>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps
)(UserName);
