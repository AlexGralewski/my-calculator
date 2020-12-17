import React, { Component } from "react"

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            result: '0',
            input1: '0',
            input2: '',
            operation: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    handleNumberClick(event) {
        const {name, value} = event.target
        this.setState()
    }

    handleSubmit(event){
        event.preventDefault()

        this.setState({
            result: this.state.input
        })
    }

    render() {
        return(
            <div>
                <div className="display">
                    {this.state.result}
                </div>
                <form className="calculator">
                    <input 
                        type="text"
                        name="result"
                        onChange={this.handleChange}
                        />
                    <input
                        type="button"
                        name="result"
                        value="1" 
                        onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>=</button>
                    </form>

            </div>
        )
    }
}

export default Calculator;