
import React, { Component } from 'react'
import image from "./6.jpg"

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
                <h1 className="animated flash delay-1s" > This is second 6th text  </h1>
            </div>
        )
    }
}
