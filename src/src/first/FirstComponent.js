
import React, { Component } from 'react'
import "./firstComponent.css"
import image from "./3.jpg"

export default class componentName extends Component {
    render() {
        return (
            <div className="myfrist-compunent-a">
                <img class="image-time" src={image} alt="some issue " />
                <h1 class="animated bounce duration-1s" > this is simple text </h1>
            </div>
        )
    }
}
