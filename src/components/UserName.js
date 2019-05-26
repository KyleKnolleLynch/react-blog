import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserName extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

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
  mapStateToProps,
  { fetchUser }
)(UserName);
