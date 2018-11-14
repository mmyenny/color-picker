import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hue: 0,
      saturation: 0,
      lightness: 0
    }
  }
  updateHue = event => {
    this.setState({
      hue: event.target.value
    })
  }

  updateSaturation = event => {
    this.setState({
      saturation: event.target.value
    })
  }

  updateLightness = event => {
    this.setState({
      lightness: event.target.value
    })
  }

  render() {
    let color = `hsl(${this.state.hue},${this.state.saturation}%,${
      this.state.lightness
    }%)`
    return (
      <div
        className="color-picker"
        style={{
          backgroundColor: color
        }}
      >
        <div class="main">
          <h1>Color Picker</h1>
          <ul>
            <li>
              <input
                type="range"
                min="0"
                max="360"
                value={this.state.hue}
                onChange={this.updateHue}
              />
              <label>Hue</label>
            </li>
            <li>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.saturation}
                onChange={this.updateSaturation}
              />
              <label>Saturation</label>
            </li>
            <li>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.lightness}
                onChange={this.updateLightness}
              />
              <label>lightness</label>
            </li>
          </ul>
          <p>{color}</p>
        </div>
      </div>
    )
  }
}

export default App
