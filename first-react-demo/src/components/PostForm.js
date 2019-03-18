import React, { Component } from 'react'

export default class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onSubmit(event) {
    event.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    
    fetch("https://jsonplaceholder.typicode.com/posts",{
      method: "POST",
      headers: {
        "content-type" :"application/json"
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(date => console.log(date))
  }
  onChange(event) {
    const _target = event.target
    this.setState({[_target.name]: _target.value})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>title</label>
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} /><br />
            <label>body</label>
            <input type="text" name="body" onChange={this.onChange} value = {this.state.body} /><br />
            <button type="submit">提交</button> 
          </div>
        </form>
      </div>
    )
  }
}
