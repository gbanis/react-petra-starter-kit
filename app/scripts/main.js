var React = window.React = require('react'),
    App = require("./jsx/app.jsx"),
    mountNode = document.getElementById("app");

React.render(<App />, mountNode);
