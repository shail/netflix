var $ = require('jquery');
var _ = require('lodash');

var LineChart = require('react-chartjs').Line;
var React = require('react');

var moment = require('moment');

var ViewingLineChart = React.createClass({
  getInitialState: function() {
    return {
      data: [0,0,0,0,0,0,0,0,0,0,0,0]
    };
  },

  getDefaultProps: function() {
    return {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August",
               "September", "October", "November", "December"],
    };
  },

  componentWillReceiveProps: function(nextProps) {
    const resultArray = this.state.data;
    _.forEach(nextProps.viewingHistory.viewing_history, function(object) {
      const month = moment(object.date).get('month');
      resultArray[month] = resultArray[month] + 1;
    });
    this.setState({data: resultArray});
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
