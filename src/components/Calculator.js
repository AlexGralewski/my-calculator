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
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleNumberClick = this.handleNumberClick.bind(this)
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
      [name]: prevState.result + value
    }
    )
  })
}

handleSubmit(event) {
  event.preventDefault()

  this.setState({
      result: this.state.input
  })
}

render() {
  return (
    <div>
      <form className="calculator">
        <input
          className="display"
          type="number"
          name="result"
          value={this.state.result}
          onChange={this.handleChange}
        />

        <div className="top-part">
          <button onClick={this.handleSubmit}>1/x</button>
          <button onClick={this.handleSubmit}>^</button>
          <button onClick={this.handleSubmit}>%</button>
          <button onClick={this.handleSubmit}>/</button>

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
            <button className="operation" onClick={this.handleSubmit}>-</button>
            <button className="operation" onClick={this.handleSubmit}>+</button>
            <button className="operation" onClick={this.handleSubmit}>x</button>
            <button className="operation" onClick={this.handleSubmit}>=</button>
          </div>
        </div>
      </form>

    </div>
  )
}
}

export default Calculator;