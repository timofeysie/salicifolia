import React from 'react'; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './TodoList.css';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ['item 1', 'item 2', 'item 3', 'item x']};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

    /**
     * animation durations need to be 
     * specified in both the CSS and the render method
     */
  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default TodoList;
