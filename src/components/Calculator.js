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
      if (value === '.') {
        console.log("clicked")
        return ({
          [name]: `${prevState.result}.`
        })
      }
      if (prevState.result == '0') {
        return ({
          [name]: value
        })
      } else {
        return ({
          [name]: prevState.result + value
        }
        )
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({
        result: this.state.input
    })
  }


  render() {
    const {handleChange, handleSubmit, handleNumberClick} = this
    const {result} = this.state
    return (
      <div>
        <form className="calculator">
          <input
            className="display"
            type="number"
            name="result"
            value={result}
            onChange={handleChange}
          />

          <div className="memory-buttons">
            <input 
              className="memory-button"
              type="button"
              name="memory"
              onClick={}
              />
          </div>
          <div className="top-part">
            <button onClick={handleSubmit}>1/x</button>
            <button onClick={handleSubmit}>^</button>
            <button onClick={handleSubmit}>%</button>
            <button onClick={handleSubmit}>/</button>

          </div>

          <div className="bottom-part">
            <div className="numbers">
              <input
                className="number-button"
                type="button"
                name="result"
                value="7"
                onClick={handleNumberClick} 
                />

              <input
                className="number-button"
                type="button"
                name="result"
                value="8"
                onClick={handleNumberClick} />

              <input
                className="number-button"
                type="button"
                name="result"
                value="9"
                onClick={handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="4"
                onClick={handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="5"
                onClick={handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="6"
                onClick={handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="1"
                onClick={handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="2"
                onClick={handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="3"
                onClick={handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="+/-"
                onClick={handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="0"
                onClick={handleNumberClick} />
              <input
                className="number-button"
                type="button"
                name="result"
                value="."
                onClick={handleNumberClick} />
            </div>
            <div className="operations">
              <button className="operation" onClick={handleSubmit}>-</button>
              <button className="operation" onClick={handleSubmit}>+</button>
              <button className="operation" onClick={handleSubmit}>x</button>
              <button className="operation" onClick={handleSubmit}>=</button>
            </div>
          </div>
        </form>

      </div>
    )
  }
}

export default Calculator;