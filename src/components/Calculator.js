import React, { Component } from "react"

class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      result: 0,
      operationInput: "",
      operation: "",
      memory: undefined
    }
    this.handleEqualsSignClick = this.handleEqualsSignClick.bind(this)
    this.handleOperationSignClick = this.handleOperationSignClick.bind(this)
    this.handleNumberClick = this.handleNumberClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.handleDelClick = this.handleDelClick(this)
    this.handlePositiveNegativeNumberChange = this.handlePositiveNegativeNumberChange.bind(this)
    this.handleMemoryOperations = this.handleMemoryOperations.bind(this)
  
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
      if (prevState.result === 0) {
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

    this.setState(prevState => {
      if (value === "2√") {
        return({
          result: Math.sqrt(Number(prevState.result)),
          operationInput: ""
          })
      } else if (value === "3√") {
        return({
          result: Math.cbrt(Number(prevState.result)),
          operationInput: ""
          })
      } else if (value === "^2") {
        return({
          result: Number(prevState.result) ** 2,
          operationInput: ""
          })
      } else if (value === "^3") {
        return({
          result: Number(prevState.result) ** 3,
          operationInput: ""
          })
      } else if (value === "1/n") {
        return({
          result: 1 / prevState.result,
          operationInput: ""
          })
      } else if (value === "log") {
        return({
          result: Math.log(prevState.result),
          operationInput: ""
          })
      } else {
        return ({
          operationInput: prevState.result,
          result: 0,
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
          result: Number(prevState.result) + Number(this.state.operationInput),
          operationInput: "",
          operation: ""
        })
      } else if (this.state.operation === "-") {
        return ({
          result: Number(prevState.operationInput) - Number(this.state.result),
          operationInput: "",
          operation: ""
        })
      } else if (this.state.operation === "x") {
        return ({
          result: Number(prevState.result) * Number(this.state.operationInput),
          operationInput: "",
          operation: ""
        })
      } else if (this.state.operation === "/") {
        return ({
          result: Number(prevState.operationInput) / Number(this.state.result),
          operationInput: "",
          operation: ""
        })
      } else if (this.state.operation === "^") {
        return ({
          result: Number(prevState.operationInput) ** Number(this.state.result),
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


  handleResetClick(event) {
    event.preventDefault()

    this.setState({
      result: 0,
      operationInput: "",
      operation: ""
    })
  }

  handleDelClick() {
    this.setState(prevState => {
      return({
        result: prevState.result.pop()
      })
    })
  }


  handleMemoryOperations(event) {
    const {value} = event.target

    this.setState(prevState => {
      if (value === "MC") {
        return({
          memory: undefined
        })
      }
      if (value === "MR") {
        if (prevState.memory !== undefined) {
          return({
            result: prevState.memory
          })
        }
        
      }
      if (value === "M+") {
        return({
          memory: prevState.memory + Number(this.state.result)
        })
      }
      if (value === "M-") {
        return({
          memory: prevState.memory - Number(this.state.result)
        })
      }
      if (value === "MS") {
        return({
          memory: Number(this.state.result)
        })
      }
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
                value="MC"
                onClick={this.handleMemoryOperations}
                />
              <input 
                className="memory-button"
                type="button"
                name="memory"
                value="MR"
                onClick={this.handleMemoryOperations}
                />
              <input 
                className="memory-button"
                type="button"
                name="memory"
                value="M+"
                onClick={this.handleMemoryOperations}
                />
              <input 
                className="memory-button"
                type="button"
                name="memory"
                value="M-"
                onClick={this.handleMemoryOperations}
                />
              <input 
                className="memory-button"
                type="button"
                name="memory"
                value="MS"
                onClick={this.handleMemoryOperations}
                />
          </div>

          <div className="top-section">

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
              value="n!"
              onClick={this.handleOperationSignClick} />
            <input
              className="operation"
              type="button"
              name="operation"
              value="log"
              onClick={this.handleOperationSignClick} />
            <input
              className="operation"
              type="button"
              name="operation"
              value="π"
              onClick={this.handleOperationSignClick} />
            <input
              className="operation"
              type="button"
              name="operation"
              value="e"
              onClick={this.handleOperationSignClick} />

          </div>

          <div className="bottom-section">
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
            <div className="basic-operations">
              <input 
                className="reset correction-button" 
                type="button"
                value="AC"
                onClick={this.handleResetClick} />
              <input 
                className="del correction-button" 
                type="button"
                value="DEL"
                onClick={this.handleDelClick} />
              <input
                className="operation"
                type="button"
                name="operation"
                value="x"
                onClick={this.handleOperationSignClick} />
              <input
                className="operation"
                type="button"
                name="operation"
                value="/"
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
                value="-"
                onClick={this.handleOperationSignClick} />
              <input 
                className="operation equals" 
                type="button"
                name="operation"
                value="="
                onClick={this.handleEqualsSignClick} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Calculator;