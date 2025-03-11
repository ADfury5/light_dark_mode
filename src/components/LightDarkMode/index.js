import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const btnText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const mode = isDarkMode ? 'dark' : 'light'

    return (
      <div className="app-container">
        <div className={`container ${mode}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button type="button" className="button" onClick={this.changeMode}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
