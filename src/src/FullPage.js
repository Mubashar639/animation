import React from "react";
// import { Pager } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import FirstComponent from "./first/FirstComponent";
import SecondComponent from "./sencond/SecondComponent";
import ThirdComponent from "./third/ThirdComponent";
import FourthComponent from "./four/FourthComponent";
import FifthComponent from "./fifth/FifthComponent";
import ScrollAnimation from 'react-animate-on-scroll';


import "./index.css";
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
        console.log(number)

        this.setState({ currentPage: number, animClass: "item" + (number - 1), conanima: "container" + (number - 1) });
    };
    componentDidMount() {
        var radius = 100; // adjust to move out items in and out
        var fields = $(".item"),
            container = $("#container"),
            width = container.width(),
            height = container.height();
        var angle = 0,
            step = (2 * Math.PI) / fields.length;
        fields.each(function () {
            var x = Math.round(
                width / 2 + radius * Math.cos(angle) - $(this).width() / 2
            );
            var y = Math.round(
                height / 2 + radius * Math.sin(angle) - $(this).height() / 2
            );
            // if (window.console) {
            //     console.log($(this).text(), x, y);
            // }
            $(this).css({
                left: x + "px",
                top: y + "px"
            });
            angle += step;
        });
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
                <div class={`item ${animClass}`}>1</div>
                <div class={`item ${animClass}`}>2</div>
                <div class={`item ${animClass}`}>3</div>
                <div class={`item ${animClass}`}>4</div>
                <div class={`item ${animClass}`}>5</div>
                <div class={`item ${animClass}`}>6</div>
                <div class={`item ${animClass}`}>7</div>

            </div>
            <ReactPageScroller ref={c => this._pageScroller = c}
                animationTimer={0}
                pageOnChange={this.pageOnChange}>
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
                <FourthComponent goToPage={this.goToPage} />
                <FifthComponent />
                <FifthComponent />


            </ReactPageScroller>
            {/* <Pager className="pagination-additional-class" bsSize="large">
                {pagesNumbers}
            </Pager> */}
        </React.Fragment>
    }
}