import React from 'react';
import { List, Input } from "antd";
import { produce } from "immer";

// class TodoItem extends React.Component {
//   render() {
//     const { todo } = this.props;
//     return (
//       <li>{todo}</li>
//     )
//   }
// }

const TodoItem = ({ todo }) => <li>{todo}</li>;

class TodoList extends React.Component {
  state = {
    todoList: ['파이썬', '장고'],
    current: '',
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      current: value,
    });
  };

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.setState(
        produce(draft => {
          const current = draft.current.trim();
          if(current.length > 0){
            draft.current = '';
            draft.todoList.push(current);
          }
        })
      );
      // Enter Key
      // const { current, todoList } = this.state;
      // if (current.trim().length > 0) {
      //   this.setState({
      //     current: '',
      //     todoList: [...todoList, current.trim()],
      //   });
      // }
    }
  };

  render() {
    return (
      <div style={{ width: '300px', margin: '30px auto'}}> 
        <List
            header={"Todo List"}
            dataSource={this.state.todoList}
            bordered={true}
            renderItem={todo => (
              <List.Item>
                {todo}
              </List.Item>
            )}
            style={{
              marginBottom: '4px'
            }}
        />
        <Input
            type="text"
            value={this.state.current}
            placeholder={"할일을 입력해주세요."}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
        />
        {/* <ul>
          {this.state.todoList.map((todo, idx) => (
            <TodoItem key={idx} todo={todo} />
          ))}
        </ul>

        <input
          type="text"
          placeholder="할 일을 입력해주세요"
          value={this.state.current}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
        <button>submit</button>
        <hr /> */}
        {/* {JSON.stringify(this.state)} */}
      </div>
    );
  }
}

export default TodoList;
