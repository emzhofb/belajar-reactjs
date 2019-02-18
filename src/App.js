// import react
import React, {Component} from 'react'
// import paragraph
import Paragraph from './components/Paragraph'
import Title from './components/Title'

class App extends Component {
  // membuat state
  // constructor dulu
  constructor () {
    super ()
    // state berupa object
    this.state = {
      angkaPertama: 0,
      angkaKedua: 0,
      hasilPerhitungan: 0
    }
  }
  // membuat methode agar lebih rapi
  // bedakan methode buatan sendiri dengan _
  _handleClick = () => {
    // tidak bisa dengan re assign state
    // memberi nilai state
    const hasil = Number(this.state.angkaPertama) + Number(this.state.angkaKedua)
    this.setState({
      hasilPerhitungan: hasil
    })
  }

  _handleChange = (element) => {
    this.setState({[element.target.name]: element.target.value})
  }

  // harus ada methode render (wajib ada)
  render () {
    // kita harus mereturn jsx
    // jsx itu syntaxnya seperti html
    return (
      // component harus satu indux saja, ga boleh ada syntax sejajar yang sama
      // kalau pengen sama, harus di bungkus dengan element yang lain
      // cara manggil state pakai {}
      <div>
        <input
          onChange = {this._handleChange}
          name = "angkaPertama"
          value={this.state.angkaPertama}></input>
        <input
          onChange = {this._handleChange}
          name = "angkaKedua"
          value={this.state.angkaKedua}></input>
        <button onClick={this._handleClick}>Hitung!</button>
        <p>{this.state.hasilPerhitungan}</p>
      </div>
    )
  }
}

export default App