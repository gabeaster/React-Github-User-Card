import React, { Component } from "react";

class Followers extends Component {
    

    render () {
        return (
            <>
            <div className="userCard">
            
            <img className="userImg" src={this.props.follower.avatar_url} alt="user's avatar image"/>
            <h3 className="userName">{this.props.follower.login}</h3>

            </div>
            </>
        )
    }
}

export default Followers;