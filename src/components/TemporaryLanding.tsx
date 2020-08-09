import React, {Component} from "react"

class TemporaryLanding extends Component {

    state = {message: "Temporary Landing Page"}
    
    handleClick = () => {
        this.setState(
            {message: "Y U DO DAT"}
        )
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button className="btn btn-primary my-2 my-sm-0" onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default TemporaryLanding