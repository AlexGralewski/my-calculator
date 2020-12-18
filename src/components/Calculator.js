import React, { Component } from "react"

class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      result: 0,
      memory: "",
      operation: "",
    }
    this.handleEqualsSignClick = this.handleEqualsSignClick.bind(this)
    this.handleOperationSignClick = this.handleOperationSignClick.bind(this)
    this.handleNumberClick = this.handleNumberClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.handleBackspaceClick = this.handleBackspaceClick(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleNumberClick(event) {
    const { name, value } = event.target
    this.setState(prevState => {
      return ({
        [name]: parseFloat(prevState.result) * 10 + parseFloat(value)
      }
      )
    })
  }

  handleOperationSignClick(event) {
    event.preventDefault()
    const { name, value } = event.target
    this.setState(prevState => {
      return ({
        memory: prevState.result,
        result: '0',
        [name]: value
      })
    })
  }


  handleEqualsSignClick(event) {
    event.preventDefault()

    this.setState(prevState => {
      if (this.state.operation === "+") {

        return ({
          result: parseFloat(prevState.result) + parseFloat(this.state.memory),
          memory: ""
        })
      }
    })
  }

  handleResetClick() {

    this.setState({
      result: "0",
      memory: "0",
      operation: ""
    })
  }

  handleBackspaceClick() {

    this.setState(prevState => {
      return({
        result: prevState.result.pop()
      })
    })
  }

  render() {
    const { result, memory, operation } = this.state

    return (
      <div>
        <form className="calculator">
          <div className="display">
            <input
              className="result"
              type="number"
              name="result"
              value={result}
              onChange={this.handleChange}
              />
            <div className="memory">
              {memory}
            </div>
          </div>
          <button className="" onClick={this.handleResetClick}>C</button>
          <button className="backspace" onClick={this.handleBackspaceClick}>Backspace</button>

          <div className="top-part">
            <input
              className="operation"
              type="button"
              name="operation"
              value="^"
              onClick={this.handleSubmit} />
            <input
              className="operation"
              type="button"
              name="operation"
              value="%"
              onClick={this.handleSubmit} />
            <input
              className="operation"
              type="button"
              name="operation"
              value="1/x"
              onClick={this.handleSubmit} />
            <input
              className="operation"
              type="button"
              name="operation"
              value="/"
              onClick={this.handleSubmit} />

          </div>

          <div className="bottom-part">
            <div className="numbers">
              <input
                className="number-button"
                type="button"
                name="result"
                value="7"
                onClick={this.handleNumberClick} />

              <input
                className="number-button"
                type="button"
                name="result"
                value="8"
                onClick={this.handleNumberClick} />

              <input
                className="number-button"
                type="button"
                name="result"
                value="9"
                onClick={this.handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="4"
                onClick={this.handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="5"
                onClick={this.handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="6"
                onClick={this.handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="1"
                onClick={this.handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="2"
                onClick={this.handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="3"
                onClick={this.handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="+/-"
                onClick={this.handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="0"
                onClick={this.handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="."
                onClick={this.handleNumberClick} />
            </div>
            <div className="operations">
              <input
                className="operation"
                type="button"
                name="operation"
                value="-"
                onClick={this.handleOperationSignClick} />
              <input
                className="operation"
                type="button"
                name="operation"
                value="+"
                onClick={this.handleOperationSignClick} />
              <input
                className="operation"
                type="button"
                name="operation"
                value="x"
                onClick={this.handleOperationSignClick} />
              <button className="operation" onClick={this.handleEqualsSignClick}>=</button>
            </div>
          </div>
        </form>
        <div>
          Result: {result}
          Memory: {memory}
          Operation: {operation}
        </div>
      </div>
    )
  }
}

export default Calculator;