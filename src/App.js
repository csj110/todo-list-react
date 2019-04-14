import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    items: [],
    item: '',
    id: uuid(),
    isEdit: false,
    inputTip:'add a todo item',
  }

  handleChange = e => {
    this.setState({
      item: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.item==='') {
      return this.setState({inputTip:'please enter something !   !    !'})
    }
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems,
      id: uuid(),
      item: '',
      isEdit: false,
      inputTip:'add a todo item'
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleDelete = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id),
    })
  }

  handleEdit = (id,title) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id),
      item: title,
      isEdit: true,
      
    })
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              todo input
            </h3>
            <TodoInput
              item={this.state.item}
              isEdit={this.state.isEdit}
              inputTip={this.state.inputTip}
              handleChage={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
