import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Store.css';

import action from './../../actions/GroceryItemActionCreator.js';

class GroceryItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.togglePurchased = this.togglePurchased.bind(this);
    this.delete = this.delete.bind(this);
  }

  onChange() {
    this.setState({ item: this.props.item });
  }
  togglePurchased(e) {
    e.preventDefault();
    if (this.props.item.purchased) {
      action.unbuy(this.props.item);
    } else {
      action.buy(this.props.item);
    }
  }
  delete(e) {
    e.preventDefault();
    action.delete(this.props.item);
  }
  render() {
    return (

      <tr>
        <td>
          <h4 className={this.props.item.purchased ? s.strikethrough : ''}>
            {this.props.item.name}
          </h4>
        </td>
        <td>
          <form onSubmit={this.togglePurchased}>
            <button className={this.props.item.purchased ? '' : 'button-primary'}>{this.props.item.purchased ? 'unbuy' : 'buy'}</button>
          </form>
        </td>
        <td>
          <form onSubmit={this.delete}>
            <button>&times;</button>
          </form>
        </td>
      </tr>
    );
  }
}
export default withStyles(s)(GroceryItem);
