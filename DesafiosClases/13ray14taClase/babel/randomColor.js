"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var RandomColor = /*#__PURE__*/function () {
  function RandomColor(red, blue, green) {
    _classCallCheck(this, RandomColor);

    this.red = red;
    this.blue = blue;
    this.green = green;
  }

  _createClass(RandomColor, [{
    key: "getRandomColor",
    value: function getRandomColor(red, blue, green) {
      this.red = red;
      this.blue = blue;
      this.green = green;
      return this;
    }
  }]);

  return RandomColor;
}();

module.exports = RandomColor; 

//http://kangax.github.io/compat-table/es6/
