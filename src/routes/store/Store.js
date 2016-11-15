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
import GroceryItem from './GroceryItem';
import GroceryItemStore from './../../stores/GroceryItemStore';
import s from './Store.css';

class Store extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { items: {} };
    GroceryItemStore.onChange((items) => {
      this.onChange();
    });
  }
/*
  componentWillUnmount() {
    GroceryItemStore.removeChangeListener(this.onChange);
  }
*/
  onChange() {
    this.setState({ items: GroceryItemStore.getItems() });
    // render();
  }
  /*componentWilMount() {
    GroceryItemStore.onChange((items) => {
      this.onChange();
    });
  }*/

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <table>
            <tbody>
              {
                this.props.items.map((item, index) => (
                  <GroceryItem item={item} key={index} />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Store);
