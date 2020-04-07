import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";
// import Followers from "./Followers";

class UserData extends Component {
    constructor (props) {
        super(props);
        this.state = {
            userData: "",
            followers: ""
        };
    }

    componentDidMount() {
        axios
            .get("https://api.github.com/users/gabeaster", {})
            .then (res => {
                console.log("data", res.data);
                this.setState({ userData: res.data });
            })
            .catch(err => {
                console.log("userData error", err);
            });

        axios
            .get("https://api.github.com/users/gabeaster/followers", {})
            .then (res => {
                console.log("follower data", res.data);
                this.setState({ followers: res.data });
            })
            .catch(err => {
                console.log("followerData error", err);
            });
    }

    render () {
        console.log("state userData", this.state.userData);
        return (
            <div className="cardContainer">
                <UserCard user={this.state.userData}/> 
            </div>
        );
    }
}

export default UserData;