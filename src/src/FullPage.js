import React from "react";
// import { Pager } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import FirstComponent from "./first/FirstComponent";
import SecondComponent from "./sencond/SecondComponent";
import ThirdComponent from "./third/ThirdComponent";
import FourthComponent from "./four/FourthComponent";
import FifthComponent from "./fifth/FifthComponent";
import SixthComponent from "./sixth/sixthComponent";
import SevenComponent from "./seventh/seventhComponent";


import Jfunction from "./jquery"

import "./index.css";
import "./downanimation.css";

const $ = window.$

export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            conanima: "container0",
            animClass: "item0"

        };
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        const { currentPage } = this.state
        console.log(currentPage + " new page" + number)
        if (currentPage < number) {
            this.setState({ currentPage: number, animClass: "item" + (number - 1), conanima: "container" + (number - 1) });
        } else if (currentPage === number) {
            this.setState({ currentPage: number, animClass: "item" + (number - 1) + "down", conanima: "container" + (number - 1) + "down" });
        }
        else {
            this.setState({ currentPage: number, animClass: "item" + (number) + "down", conanima: "container" + (number) + "down" });

        }
    }


    componentDidMount() {
        Jfunction($)
    }

    getPagesNumbers = () => {

        const pageNumbers = [];

        // for (let i = 1; i <= 5; i++) {
        //     pageNumbers.push(
        //         <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</Pager.Item>
        //     )
        // }

        return [...pageNumbers];
    };

    render() {

        // const pagesNumbers = this.getPagesNumbers();
        const { animClass } = this.state
        return <React.Fragment>
            <div id="container" className={this.state.conanima} >
                <div style={{ backgroundColor: "red" }} class={`item ${animClass}`}>text 1</div>
                <div style={{ backgroundColor: "green" }} class={`item ${animClass}`}>text 2</div>
                <div style={{ backgroundColor: "blue" }} class={`item ${animClass}`}>text 3</div>
                <div style={{ backgroundColor: "white" }} class={`item ${animClass}`}>text 4</div>
                <div style={{ backgroundColor: "oring" }} class={`item ${animClass}`}>text 5</div>
                <div style={{ backgroundColor: "offwhite" }} class={`item ${animClass}`}>text 6</div>
                <div style={{ backgroundColor: "rgb(23,545,56" }} class={`item ${animClass}`}>text 7</div>

            </div>
            <ReactPageScroller ref={c => this._pageScroller = c}
                animationTimer={100}
                transitionTimingFunction={"fade-in-out"}
                pageOnChange={this.pageOnChange}>
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
                <FourthComponent goToPage={this.goToPage} />
                <FifthComponent />
                <SixthComponent />
                <SevenComponent />



            </ReactPageScroller>
            {/* <Pager className="pagination-additional-class" bsSize="large">
                {pagesNumbers}
            </Pager> */}
        </React.Fragment>
    }
}