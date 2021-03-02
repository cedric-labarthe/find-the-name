import React, { Component } from 'react'

// Import de components
import Image from './components/Images'
import Letter from './components/Letters'

// Import de la feuilles de styles
import './App.css'

class App extends Component {
  state = {
    animaux: ['loup', 'ours', 'singe', 'tigre'],
    valid: [false, false, false, false],
    level: 1,
    mot: 'loup',
    showBtn: false,
    showInput: true,
    defaultInput: '',
  }

  changeLevel = (e) => {
    if (this.state.level < this.state.animaux.length) {
      this.setState({
        level: this.state.level + 1,
        mot: this.state.animaux[this.state.level],
      })
      this.setState({ showBtn: true, showInput: true })
    } else {
      this.setState({ showBtn: false })
      console.log(
        '%c Dernier niveau atteint %cPour le moment !',
        'color: red; font-size: 40px',
        'color: green; font-size: 30px'
      )
    }
    this.setState({ showBtn: false })
  }

  checkInput = (e) => {
    if (e.target.value === this.state.mot) {
      console.log(`%c${e.target.value}`, 'color:red ; font-size:20px')
      this.setState({ showInput: false })
      let isValid = this.state.valid.slice()
      isValid[this.state.level - 1] = true
      e.target.value = ''
      this.setState({
        valid: isValid,
        showBtn: true,
      })
      console.log('Valid!!')
    } else {
      e.target.classList.remove('valid')
    }
  }

  render() {
    let btnVisibilityClass = this.state.showBtn ? 'visible' : 'hidden'
    let inputVisibilityClass = this.state.showInput ? 'visible' : 'hidden'
    let btnTxt =
      this.state.level < this.state.animaux.length
        ? `Passer au niveau : ${this.state.level + 1}`
        : 'Fin du jeu'

    return (
      <div className="App container-xxl text-center">
        <h1>
          Animaux Sauvages<br></br>Niveau {this.state.level}
        </h1>
        <Image imgName={this.state.mot} />
        <Letter
          name={this.state.mot}
          level={this.state.level}
          maxLevel={this.state.animaux.length}
          valid={this.state.valid[this.state.level - 1]}
          checkInput={this.checkInput}
          changeLevel={this.changeLevel}
          classProps={inputVisibilityClass}
        />
        <button
          className={`btn btn-outline-primary ${btnVisibilityClass}`}
          onClick={this.changeLevel}
        >
          {btnTxt}
        </button>
      </div>
    )
  }
}

export default App
