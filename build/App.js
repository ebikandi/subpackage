"use strict";

exports.__esModule = true;
exports["default"] = App;

var _expoStatusBar = require("expo-status-bar");

var _reactNative = require("react-native");

function App() {
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(_reactNative.Text, null, "Open up App.js to start working on your app!"), /*#__PURE__*/React.createElement(_expoStatusBar.StatusBar, {
    style: "auto"
  }));
}

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
//# sourceMappingURL=App.js.map