'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Row = require('./Components/Row');

var _Row2 = _interopRequireDefault(_Row);

var _requests = require('./requests');

var _requests2 = _interopRequireDefault(_requests);

var _Banner = require('./Components/Banner');

var _Banner2 = _interopRequireDefault(_Banner);

require('./index.css');

var _serviceWorker = require('./serviceWorker');

var serviceWorker = _interopRequireWildcard(_serviceWorker);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RootApp() {
  return _react2.default.createElement(
    'div',
    { className: 'App-Main-UI-Container' },
    _react2.default.createElement(_Banner2.default, null),
    _react2.default.createElement(_Row2.default, { title: 'Netflix Orignals', fetchURL: _requests2.default.fetchNetflixOrignals, isVerticalAndLargeRow: true }),
    _react2.default.createElement(_Row2.default, { title: 'Trending Now', fetchURL: _requests2.default.fetchTrending }),
    _react2.default.createElement(_Row2.default, { title: 'Top Rated', fetchURL: _requests2.default.fetchTopRated }),
    _react2.default.createElement(_Row2.default, { title: 'Action Films', fetchURL: _requests2.default.fetchActionMovies }),
    _react2.default.createElement(_Row2.default, { title: 'Comedy Films', fetchURL: _requests2.default.fetchComedyMovies }),
    _react2.default.createElement(_Row2.default, { title: 'Horror Films', fetchURL: _requests2.default.fetchHorrorMovies }),
    _react2.default.createElement(_Row2.default, { title: 'Romantic Movies', fetchURL: _requests2.default.fetchRomanticMovies }),
    _react2.default.createElement(_Row2.default, { title: 'Documentries', fetchURL: _requests2.default.fetchDocumentries })
  );
}

var RootDirectory = document.getElementById('Root');

_reactDom2.default.render(_react2.default.createElement(RootApp, null), RootDirectory);

serviceWorker.register();
