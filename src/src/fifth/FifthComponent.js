
import React, { Component } from 'react'
import image from "./4.jpg"

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
                <h1 className="animated shake delay-1s" > This is  5 component  </h1>
            </div>
        )
    }
}
