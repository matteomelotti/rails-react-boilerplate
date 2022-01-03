import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectIsLoggedIn } from '../redux/user/user.selectors';

class Profile extends Component {

  render() {
    const { currentUser, isLoggedIn } = this.props;

    if (!currentUser && !isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.user.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
          {currentUser.token.substr(currentUser.token.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.user.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.user.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isLoggedIn: selectIsLoggedIn
});

export default connect(mapStateToProps)(Profile);
