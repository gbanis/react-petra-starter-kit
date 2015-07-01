'use strict';

var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        This is where React mounts. <span className="label label-success">React Works</span>
      </div>
    );
  }
});

module.exports = App;
