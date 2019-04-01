import React from 'react';
import './ListItem.css';
import Item from '../Item/Item'

class ListItem extends React.Component {

  render () {
    return (
      <div className="item-list">
        <div>My List</div>
        {
          this.props.list.map((ele, index) => {
            return <Item element = {ele} key = {index} remove = { this.props.remove } index = {index}/>
          })
        }
        
      </div>
    );
  }
}

export default ListItem;