import React from 'react';
import './Item.css'

class Item extends React.Component {

  removeItem = () => {
    this.props.remove(this.props.index)
  }

  render() {
    return(
      <div className="item">
        <div className="item-element">{this.props.element}</div>
        <div className="remove-item" onClick = {this.removeItem}>X</div>
      </div>
    );
  }
}

export default Item;