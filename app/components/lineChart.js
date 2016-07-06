var $ = require('jquery');
var _ = require('lodash');

var LineChart = require('react-chartjs').Line;
var React = require('react');

var moment = require('moment');

var ViewingLineChart = React.createClass({
  getInitialState: function() {
    return {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August",
               "September", "October", "November", "December"],
      data: [0,0,0,0,0,0,0,0,0,0,0,0]
    };
  },

  componentDidMount: function () {
    const result_array = this.state.data;
    this.serverRequest = $.get('http://localhost:4567/viewing_history', function (result) {
      _.forEach(result.viewing_history, function(object) {
        const month = moment(object.date).get('month');
        result_array[month] = result_array[month] + 1;
      });
      this.setState({data: result_array});
    }.bind(this));
  },

  render: function() {
    const data = {
        labels: this.state.labels,
        datasets: [
          {
            fillColor : "rgba(172,194,132,0.4)",
            strokeColor : "#ACC26D",
            pointColor : "#fff",
            pointStrokeColor : "#9DB86D",
            data: this.state.data,
          }
        ]
    };
    return (
      <LineChart data={data} width="600" height="480" />
    )
  }
});

module.exports = ViewingLineChart;
