import React, { Component } from "react"

class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      result: "0",
      operationInput: "",
      operation: "",
      memory: "0"
    }
    this.handleEqualsSignClick = this.handleEqualsSignClick.bind(this)
    this.handleOperationSignClick = this.handleOperationSignClick.bind(this)
    this.handleNumberClick = this.handleNumberClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.handleBackspaceClick = this.handleBackspaceClick(this)
    this.handlePositiveNegativeNumberChange = this.handlePositiveNegativeNumberChange.bind(this)
    this.handleMPlus = this.handleMPlus.bind(this)
  
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleNumberClick(event) {
    const { name, value } = event.target
    this.setState(prevState => {
      if (prevState.result === "0") {
        return ({
          [name]: value
        })
      } else {

        return ({
          [name]: prevState.result + value
        })
      }
      
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
          operationInput: ""
          })
      } else if (value === "3√") {
        return({
          result: Math.cbrt(parseFloat(prevState.result)),
          operationInput: ""
          })
      } else if (value === "1/n") {
        return({
          result: 1 / prevState.result,
          operationInput: ""
          })
      } else {
        return ({
          operationInput: prevState.result,
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
          result: parseFloat(prevState.result) + parseFloat(this.state.operationInput),
          operationInput: "",
          operation: ""
        })
      } else if (this.state.operation === "-") {
        return ({
          result: parseFloat(prevState.operationInput) - parseFloat(this.state.result),
          operationInput: "",
          operation: ""
        })
      } else if (this.state.operation === "x") {
        return ({
          result: parseFloat(prevState.result) * parseFloat(this.state.operationInput),
          operationInput: "",
          operation: ""
        })
      } else if (this.state.operation === "/") {
        return ({
          result: parseFloat(prevState.operationInput) / parseFloat(this.state.result),
          operationInput: "",
          operation: ""
        })
      } else if (this.state.operation === "^") {
        return ({
          result: parseFloat(prevState.operationInput) ** parseFloat(this.state.result),
          operationInput: "",
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
      operationInput: "0",
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

  handleMPlus(event) {
    event.preventDefault()

    this.setState(prevState => {
      return({
        memory: prevState.Memory + this.state.result
      })
    })
  }



  render() {
    const { result, operationInput, memory, operation } = this.state

    return (
      <div className="calculator">
        <div className="display">
          <div className="operation-input">
            {operationInput} {operation}
          </div>
          <div className="result">
            {result}
          </div>

        </div>
        <form >
          <div className="memory-buttons">
              <input 
                className="memory-button"
                type="button"
                name="memory"
                value="M+"
                onClick={this.handleMPlus}
                />
          </div>

          <div className="top-part">
            <button className="" onClick={this.handleResetClick}>C</button>
            <button className="backspace" onClick={this.handleBackspaceClick}>Backspace</button>
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
              value="3√"
              onClick={this.handleOperationSignClick} />
            <input
              className="operation"
              type="button"
              name="operation"
              value="^2"
              onClick={this.handleOperationSignClick} />
            <input
              className="operation"
              type="button"
              name="operation"
              value="^3"
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
          Memory: {memory} <br />
          result: {result} <br />
          operationInput: {operationInput} <br />
          operation: {operation} <br />


        </div>
      </div>
    )
  }
}

export default Calculator;