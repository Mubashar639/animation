
import React, { Component } from 'react'
import image from "./2.png"
import "./mySecond.css"
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
                <h1 className="animated bounce delay-1s" > This is second simple text </h1>
            </div>
        )
    }
}
