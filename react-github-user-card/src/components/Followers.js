import React, { Component } from "react";

class Followers extends Component {
    

    render () {
        return (
            <>
            <div className="userCard">
            <h3 className="userName">{this.props.follower.name}</h3>
            <img className="userImg" src={this.props.follower.avatar_url} alt="user's avatar image"/>
            <h4 className="userLogin">{this.props.follower.login}</h4>
            </div>
            </>
        )
    }
}

export default Followers;