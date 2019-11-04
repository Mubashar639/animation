
import React, { Component } from 'react'
import image from "./7.jpg"

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
                <h1 className="animated rubberBand delay-1s" > This is second 7th text  </h1>
            </div>
        )
    }
}
