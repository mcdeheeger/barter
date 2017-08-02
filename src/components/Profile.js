import Search from './Search';
import Main from './Main';
// import Account from './Account'

// var helpers = require("../../utils/helpers");
import React, { Component } from 'react';
import {
    // BrowserRouter as Router,
    // Route,
    // RouterHandler,
    Link,
    // IndexRoute
} from 'react-router-dom';


class Profile extends Component {
//
//   getInitialState: function() {
//
//     // console.log("profileToken", localStorage.getItem('userToken'));
//
//     return {
//       userName: "",
//     }
//   },
//
// d
//   componentDidMount: function() {
//     // console.log('this.props.params.id', this.props.params.id)
//
//     var profileId = this.props.params.id;
//
//     helpers.verifyProfile(profileId).then(function(data) {
//
//       var userToken = localStorage.getItem('userToken');
//       console.log("Profile Mount data", data)
//
//       //I can get all the profile data back, including firstName
//       var profileFirstName = data.data.firstName;
//       var profileLastName = data.data.lastName;
//       var profileUserName = data.data.userName;
//       console.log("ffffff", data.data.userName);
//       var profileEmail = data.data.email;
//
//       localStorage.setItem("UserName", profileUserName);
//       localStorage.setItem("Email", profileEmail);
//       localStorage.setItem("Id", this.props.params.id);
//
//       this.setState({
//         firstName: profileFirstName,
//         lastName: profileLastName,
//         userName: profileUserName,
//         token: userToken
//       });
//     }.bind(this));
//   },
//
//   handleLogout: function() {
//     helpers.logout();
//     console.log("Did you logout?")
//   },


  render() {

    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsed-navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {/*<a className="navbar-brand" href="#">*/}
                {/*<img className="brandImg img-responsive" src="./../img/friend.png" alt="Brand" />*/}
              {/*</a>*/}
              <h2 className="navbar-text" style={{color: "#009f9b", fontWeight: "bold"}}> Skillzshare</h2>
            </div>
            <div id="collapsed-navbar" className="navbar-collapse collapse">

            </div>
            <li id="navbar-links">
              <Link to="/profile/search">Search</Link>
            </li>
              {this.props.children}
          </div>
        </nav>
        <Search />
          {/*<Account />*/}
      </div>
    )
  }
}

// Export the module back to the route
export default Profile;