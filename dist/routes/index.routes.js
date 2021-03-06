"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)();
router.get("/", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var githubInfo, result, repoInfo, ProjectInfo;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _nodeFetch["default"])("https://api.github.com/users/jscalderon65/repos", {
              method: "GET",
              headers: {
                "Accept": "application/vnd.github.mercy-preview+json"
              }
            });

          case 2:
            githubInfo = _context.sent;
            _context.next = 5;
            return githubInfo.json();

          case 5:
            result = _context.sent;
            repoInfo = result.filter(function (item) {
              return item.name === "Rest-api-node-mongo-es10";
            })[0];
            ProjectInfo = {
              "Name Project": repoInfo.name,
              "Project Description": repoInfo.description,
              "Repository": repoInfo.html_url,
              "Topics": repoInfo.topics,
              "Owner": repoInfo.owner.login,
              "Profile Url": repoInfo.owner.url
            };
            res.json([ProjectInfo]);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;