
import React, { Component } from 'react'
import image from "./1.jpg"

export default class componentName extends Component {
    state = {
        imageClass: "",
    }
    componentWillMount() {
        this.setState({
            imageClass: "image-second"
        })
    }
    render() {
        return (
            <div className="mySecond-compunent-a">
                <img className="image-second" src={image} alt="some issue " />
                <h1 className="animated bounceInUp delay-1s" > This is second 4 text component  </h1>
            </div>
        )
    }
}
