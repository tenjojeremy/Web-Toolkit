'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _share = require('./share.index');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var shareFunction = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var dataIsValid, webShareRes, errorMessage_Not_Supported, errorMessage_Web_Share_Fail, errorMessage_Schema_Fail;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dataIsValid = null;
            webShareRes = null;
            errorMessage_Not_Supported = 'Fail: Web Share is not supported';
            errorMessage_Web_Share_Fail = 'Fail: Sorry there was an issue with webshare please open big-web-features';
            errorMessage_Schema_Fail = 'Fail: Data has to be object {title, text, url} all strings';

            if (navigator.share) {
              _context.next = 7;
              break;
            }

            return _context.abrupt('return', { errorMessage: errorMessage_Not_Supported });

          case 7:
            _context.next = 9;
            return (0, _share.ShareSchema)(data);

          case 9:
            dataIsValid = _context.sent;

            if (dataIsValid) {
              _context.next = 12;
              break;
            }

            return _context.abrupt('return', { errorMessage: errorMessage_Schema_Fail });

          case 12:
            _context.prev = 12;
            _context.next = 15;
            return navigator.share(data);

          case 15:
            webShareRes = _context.sent;
            return _context.abrupt('return', { success: true });

          case 19:
            _context.prev = 19;
            _context.t0 = _context['catch'](12);
            return _context.abrupt('return', { errorMessage: errorMessage_Web_Share_Fail + ' : ' + _context.t0 });

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[12, 19]]);
  }));

  return function shareFunction(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = shareFunction;

//# sourceMappingURL=share.function.js.map