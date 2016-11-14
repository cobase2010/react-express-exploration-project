/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Store from './Store';

const title = 'Store Listify';

export default {

  path: '/store',

  action() {
    return {
      title,
      component: <Layout><Store title={title} /></Layout>,
    };
  },

};
