import React, { Component } from 'react';

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {time: new Date()};
        console.log("In ther constructor!");
    }

    componentDidMount(){
        console.log('In Component did mount')
    }

    render(){
        console.log('In render');
        return (<h1>TIME</h1>)
    }
}

export default Timer;