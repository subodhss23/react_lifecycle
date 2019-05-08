import React, { Component } from 'react';
import axios from 'axios';

class GithubUserInfo extends Component{
    constructor(props){
        super(props);
        this.state = { imgUrl: "", name: ""};
    }

    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.username}`
        let response =  await axios.get(url);
        let data = response.data;
        console.log(data);
        this.setState({ imgUrl: data.avatar_url, name: data.name });
    }

    render(){
        return (
            <div className="GithubUserInfo" style={{position: "relative", left: "200px" }}>
                <h2>GITHUB USER: {this.state.name}</h2>
                <img src={this.state.imgUrl} alt="img" style={{height: "200px", width: "200px"}}/>
            </div>
        )
    }
}

export default GithubUserInfo;