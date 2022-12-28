import React, { useEffect } from 'react';
import { Input, Button, List } from 'antd';

class TodoList extends React.Component {
  state = {
    newTodo: '',
    todos: [],
  };

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    const { newTodo, todos } = this.state;
    this.setState({
      todos: [...todos, newTodo],
      newTodo: '',
    });
  };

  handleDeleteTodo = (index) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((_, i) => i !== index),
    });
  };

  render() {
    const { newTodo, todos } = this.state;
    return (
      <div
        style={{
          width: '300px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Input
          placeholder="Add a new todo"
          value={newTodo}
          onChange={this.handleInputChange}
          style={{ width: '80%', marginBottom: '20px' }}
        />
        <Button type="primary" onClick={this.handleAddTodo}>
          Add Todo
        </Button>
        <List
          style={{ marginTop: '20px', width: '80%' }}
          bordered
          dataSource={todos}
          renderItem={(todo, index) => (
            <List.Item
              actions={[
                <Button
                  type="danger"
                  onClick={() => this.handleDeleteTodo(index)}
                >
                  Delete
                </Button>,
              ]}
            >
              {todo}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList;
