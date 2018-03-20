/**
 * Copyright 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const relayUnstableBatchedUpdates = require('ReactDOM').unstable_batchedUpdates;

module.exports = jest.fn(relayUnstableBatchedUpdates);
