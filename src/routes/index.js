/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
//import '../../node_modules/skeleton-css-webpack/css/skeleton.css';
//import '../../bower_components/skeleton/css/normalize.css';
//import './store/store.css'

/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./home').default,
    require('./contact').default,
    require('./store').default,
    require('./login').default,
    require('./register').default,
    require('./admin').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./content').default,
    require('./notFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
    route.description = route.description || '';

    return route;
  },

};
