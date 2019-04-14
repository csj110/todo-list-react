import React, { Component } from 'react'
import TodoItem from './TodoItem'


export default class TodoList extends Component {
  render() {
    const { items,clearList,handleDelete,handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">
        todo lsit
        </h3>
        {items.map(item => (
          <TodoItem
            key={item.id}
            {...item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
        <button className="btn btn-block btn-danger text-capitalize" onClick={clearList}>clear lsit</button>
      </ul>
    )
  }
}
