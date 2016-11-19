import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as groceryItemActions from '../../actions/groceryItemActions';
import s from './Store.css';

// import action from './../../actions/GroceryItemActionCreator.js';

class GroceryItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      purchased: React.PropTypes.boolean,
    }),
    actions: PropTypes.object.isRequired,
  };
  constructor(props, context) {
    super(props, context);
    this.state = { purchased: this.props.item.purchased };

    this.togglePurchased = this.togglePurchased.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
/*
  onChange() {
    this.setState({ item: this.props.item });
  }
  */
  togglePurchased(e) {
    e.preventDefault();
    /* if (this.props.item.purchased) {
      this.setState({ purchased: true });
    } else {
      this.setState({ purchase: false });
    }*/
    this.props.actions.toggleItem(this.props.item);
  }

  deleteItem(e) {
    e.preventDefault();
    this.props.actions.removeItem(this.props.item);
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
          <form onSubmit={this.deleteItem}>
            <button>&times;</button>
          </form>
        </td>
      </tr>
    );
  }
}

// export default withStyles(s)(GroceryItem);


function mapStateToProps(state, ownProps) {
  // debugger;
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(groceryItemActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(GroceryItem));
