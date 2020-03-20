import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return <li key={user.id}>{user.name}</li>;
  }

  render() {
    return (
      <div>
        Here's a big list of users:
        <ul>{this.props.users.map(this.renderUser)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

// The function that is run on the server to fetch data for this component
// It returns an action creator
// This returns a promise, which when resolved allows is to render
// the app with the required data
export const loadData = store => {
  return store.dispatch(fetchUsers());
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);
