/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as groceryItemActions from '../../actions/groceryItemActions';
import GroceryItem from './GroceryItem';
import s from './Store.css';

class Store extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      item: { name: '' },
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

/*
  onChange() {
    this.setState({ items: GroceryItemStore.getItems() });
    // render();
  }
  */

  onTitleChange(event) {
    const item = this.state.item;
    item.name = event.target.value;
    this.setState({ item });
  }

  onClickSave() {
    this.props.actions.addItem(this.state.item);
  }

/*
  itemRow(item, index) {
    return <div key={index}>{item.name}</div>;
  }
*/


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <table>
            <tbody>
              {
               // this.props.items.map(this.itemRow)
                this.props.items.map((item, index) => (
                  <GroceryItem item={item} key={index} />
                ))
              }
            </tbody>
          </table>
          <h2>Add Item</h2>
          <input
            type="text"
            onChange={this.onTitleChange}
            value={this.state.item.name}
          />

          <input
            type="submit"
            value="Save"
            onClick={this.onClickSave}
          />
        </div>
      </div>
    );
  }
}

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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(Store));

