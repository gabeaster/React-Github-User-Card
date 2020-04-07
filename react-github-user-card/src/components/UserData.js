import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import Followers from "./Followers";

class UserData extends Component {
    constructor (props) {
        super(props);
        this.state = {
            userData: "",
            followersData: []
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
                this.setState({ followersData: res.data });
            })
            .catch(err => {
                console.log("followerData error", err);
            });
    }

    render () {
        console.log("state userData", this.state.userData);
        return (
            <>
            <h1>Gabby and The Followers</h1>
            <div className="cardContainer">
                <UserCard key={this.state.userData.id} user={this.state.userData}/> 
                {this.state.followersData.map(follower => (
                    <Followers key={follower.id} follower={follower} />
                ))}
            </div>
            </>
        );
    }
}

export default UserData;