'use strict';

module.exports = [
  {method: 'get', path: '/', config: require('../routes/home')},
  {method: 'get', path: '/dogs', config: require('../routes/dogs')}
];
