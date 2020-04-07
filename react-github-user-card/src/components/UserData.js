import React, { Component } from "react";
import axios from "axios";
// import UserCard from "./UserCard";
// import Followers from "./Followers";

class UserData extends Component {
    constructor (props) {
        super(props);
        this.state = {
            userData: "",
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
    }
}