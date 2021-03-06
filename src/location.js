import React, { Component } from 'react';
import reactDom from 'react-dom'

export class Location extends react.Component{
    constructor(props){
        SourceBuffer(props);
        this.state = {
            lat:null,
            lon:null,
            error: null,
            isLoaded: false
        };
    }
    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(this.setPosition)
    }
    setPosition = (location) => {
        this.setState({
            isLoaded: true,
            lat: location.coords.latitude,
            lon: location.coords.longitude
        });
    }
    render = () => {
        return (
            <div className="location">
                <h4>Your latitude is : {this.state.lat} </h4>
                <h4>Your longitude is : {this.state.lon} </h4>
            </div>
        )
    }
}
