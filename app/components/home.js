var $ = require('jquery');
var _ = require('lodash');

var LineChart = require('/Users/shailpatel/netflix/app/components/lineChart');
var ShowBarChart = require('/Users/shailpatel/netflix/app/components/barChart');
var ViewingHistoryTable = require('/Users/shailpatel/netflix/app/components/viewingHistoryTable');
var React = require('react');

var moment = require('moment');

var Home = React.createClass({
  getInitialState: function() {
    return {
      viewingHistory: {}
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get('http://localhost:4567/viewing_history', function (result) {
      this.setState({viewingHistory: result});
    }.bind(this));
  },

  render: function() {
    return (
      <div>
      <ShowBarChart viewingHistory={this.state.viewingHistory} />
      <LineChart viewingHistory={this.state.viewingHistory} width="600" height="480" />
      <ViewingHistoryTable viewingHistory={this.state.viewingHistory} width = "600" height="480" />
      </div>
    )
  }
});

module.exports = Home;
