var $ = require('jquery');
var _ = require('lodash');

var LineChart = require('react-chartjs').Line;
var React = require('react');

var moment = require('moment');

var ViewingLineChart = React.createClass({
  getDefaultProps: function() {
    return {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August",
               "September", "October", "November", "December"],
      data: [0,0,0,0,0,0,0,0,0,0,0,0]
    };
  },

  transform: function(data) {
    if (data != undefined) {
      const result_array = this.props.data;
      _.forEach(data.viewing_history, function(object) {
        const month = moment(object.date).get('month');
        result_array[month] = result_array[month] + 1;
      });
      return result_array
    }
  },

  render: function() {
    const data = {
        labels: this.props.labels,
        datasets: [
          {
            fillColor : "rgba(172,194,132,0.4)",
            strokeColor : "#ACC26D",
            pointColor : "#fff",
            pointStrokeColor : "#9DB86D",
            data: this.transform(this.props.viewingHistory),
          }
        ]
    };
    return (
      <LineChart data={data} width="600" height="480" />
    )
  }
});

module.exports = ViewingLineChart;
