import React from 'react';

import ShoppingListForm from './ShoppingListForm';

class ShoppingList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      items: 
      [
        { name: 'Milk', qty: '2 gallons' },
        { name: 'Bread', qty: '2 loaves' }
      ]
    }

    this.renderItems = this.renderItems.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(item){
    this.setState(state => {
      return {items: [...state.items, item]};
    });
  }

  renderItems(){
    return(
      <ul>
        {this.state.items.map((item) => {
          return <li key={item.name}>{item.name}: {item.qty}</li>
        })}
      </ul>
    );
  }

  render(){
    return(
      <div>
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm handleSubmit={this.addItem} />
      </div>
    )
  }
}

export default ShoppingList;