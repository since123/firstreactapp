import React, { Component, Fragment }from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component{
  constructor(props){
    super(props)
    this.state = {
      list: [],
      inputValue: ""
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }
  handleBtnClick() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: ""
      }
    )
  }
  handleInputChange(e) {
    this.setState(
      {
        inputValue: e.target.value
      }
    )
  }

  handleDeleteClick(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState(
      {
        list
      }
    )
  }
  getTodoItem(){
    return (
      this.state.list.map((item, index) => {
        return <TodoItem 
          delete={this.handleDeleteClick} 
          key={index} 
          content={item} 
          index={index}/>
      })
    )
  }
  render(){
    return (
      <Fragment>
        <div>
          <input className='input-style' value={this.state.inputValue} onChange={this.handleInputChange} />
          <button style={{background: 'red', color: '#fff'}} onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
