import React, { Component }from 'react';
//子组件向父组件传值要调用父组件的方法
class TodoItem extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
 
  handleDelete(){
    this.props.delete(this.props.index)
  }
  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleDelete}>{content}</div>
    )
  }
}

export default TodoItem