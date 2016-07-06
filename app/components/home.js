var $ = require('jquery');
var _ = require('lodash');

var LineChart = require('/Users/shailpatel/netflix/app/components/lineChart');
var ShowPieChart = require('/Users/shailpatel/netflix/app/components/showPieChart');
var React = require('react');

var moment = require('moment');

var Home = React.createClass({
  render: function() {
    return (
      <div>
      <LineChart width="600" height="480" />
      <ShowPieChart />
      </div>
    )
  }
});

module.exports = Home;
