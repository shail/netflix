var $ = require('jquery');
var _ = require('lodash');

var LineChart = require('/Users/shailpatel/netflix/app/components/lineChart');
var ShowBarChart = require('/Users/shailpatel/netflix/app/components/barChart');
var React = require('react');

var moment = require('moment');

var Home = React.createClass({
  render: function() {
    return (
      <div>
      <ShowBarChart />
      <LineChart width="600" height="480" />
      </div>
    )
  }
});

module.exports = Home;
