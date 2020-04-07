import React, { Component } from "react";

class UserCard extends Component {
constructor (props) {
    super(props);
}

render() {
    return (
        <div className="userCard">
            
            <img className="userImg" src={this.props.user.avatar_url} alt="user's avatar image"/>
            <h3 className="userName">{this.props.user.login}</h3>
           
            
        </div>
    )
}
}

export default UserCard;