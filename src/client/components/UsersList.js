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

export default connect(mapStateToProps, { fetchUsers })(UsersList);
