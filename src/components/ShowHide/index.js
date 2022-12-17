// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstname: false, showLastname: false}

  showHideFirstname = () => {
    this.setState(prevState => {
      if (prevState.showFirstname) {
        return {showFirstname: false}
      }
      return {showFirstname: true}
    })
  }

  showHideLastname = () => {
    this.setState(prevState => {
      if (prevState.showLastname) {
        return {showLastname: false}
      }
      return {showLastname: true}
    })
  }

  renderFirstname = () => {
    const {showFirstname} = this.state

    if (showFirstname) {
      return (
        <div className="name-card">
          <p>Joe</p>
        </div>
      )
    }
    return null
  }

  renderLastname = () => {
    const {showLastname} = this.state
    if (showLastname) {
      return (
        <div className="name-card">
          <p>Jonas</p>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="name-container">
            <button
              type="button"
              className="btn"
              onClick={this.showHideFirstname}
            >
              Show/Hide Firstname
            </button>
            {this.renderFirstname()}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="btn"
              onClick={this.showHideLastname}
            >
              Show/Hide Lastname
            </button>
            {this.renderLastname()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
