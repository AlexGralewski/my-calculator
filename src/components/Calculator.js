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
    this.handlePositiveNegativeNumberChange = this.handlePositiveNegativeNumberChange.bind(this)
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
    console.log("clicked")

    this.setState(prevState => {
      if (value === "2√") {
        return({
          result: Math.sqrt(parseFloat(prevState.result)),
          memory: ""
          })
      } else if (value === "3√") {
        return({
          result: Math.cbrt(parseFloat(prevState.result)),
          memory: ""
          })
      } else if (value === "1/n") {
        return({
          result: 1 / prevState.result,
          memory: ""
          })
      } else {
        return ({
          memory: prevState.result,
          result: '0',
          [name]: value
        })
      }
        
    })
  }

  handleEqualsSignClick(event) {
    event.preventDefault()

    this.setState(prevState => {
      if (this.state.operation === "+") {
        return ({
          result: parseFloat(prevState.result) + parseFloat(this.state.memory),
          memory: "",
          operation: ""
        })
      } else if (this.state.operation === "-") {
        return ({
          result: parseFloat(prevState.memory) - parseFloat(this.state.result),
          memory: "",
          operation: ""
        })
      } else if (this.state.operation === "x") {
        return ({
          result: parseFloat(prevState.result) * parseFloat(this.state.memory),
          memory: "",
          operation: ""
        })
      } else if (this.state.operation === "/") {
        return ({
          result: parseFloat(prevState.memory) / parseFloat(this.state.result),
          memory: "",
          operation: ""
        })
      } else if (this.state.operation === "^") {
        return ({
          result: parseFloat(prevState.memory) ** parseFloat(this.state.result),
          memory: "",
          operation: ""
        })
      }
    })
  }

  handlePositiveNegativeNumberChange() {
    this.setState(prevState => {
      return({
        result: -prevState.result
      })
    })
  }


  handleResetClick() {
    this.setState({
      result: "0",
      memory: "0",
      operation: ""
    })
  }

  handleBackspaceClick(event) {
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
            <div className="result">
              {result}
            </div>

            <div className="memory">
              {memory} {operation}
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
              onClick={this.handleOperationSignClick} />
            <input
              className="operation"
              type="button"
              name="operation"
              value="2√"
              onClick={this.handleOperationSignClick} />
            <input
              className="operation"
              type="button"
              name="operation"
              value="1/n"
              onClick={this.handleOperationSignClick} />
            <input
              className="operation"
              type="button"
              name="operation"
              value="/"
              onClick={this.handleOperationSignClick} />
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
                onClick={this.handlePositiveNegativeNumberChange} />
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