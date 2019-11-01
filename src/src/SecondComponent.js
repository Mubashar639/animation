
import React from "react";

export default class componentName extends React.Component {
    state = {
        loading: true
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })

        }, 2000);
    }
    render() {

        return (<div className="component">

            {this.state.loading ?
                <div className="component">

                </div> :
                <div className="component first-component">
                    <h2>First Component</h2>
                </div>
            }
        </div>)

    }
}
