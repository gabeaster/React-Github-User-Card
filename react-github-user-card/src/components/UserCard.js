import React, { Component } from "react";

class UserCard extends Component {
constructor (props) {
    super(props);
}

render() {
    return (
        <div className="userCard">
            <h3 className="userName">{this.props.user.name}</h3>
            <img className="userImg" src={this.props.user.avatar_url} alt="user's avatar image"/>
            <h4 className="userLogin">{this.props.user.login}</h4>
            
        </div>
    )
}
}

export default UserCard;