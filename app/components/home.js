var React = require('react');
var LineChart = require('react-chartjs').Line;
var $ = require('jquery');
var _ = require('lodash');

var Home = React.createClass({
  getInitialState: function() {
    return {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August",
               "September", "October", "November", "December"],
      data: []
    };
  },

  componentDidMount: function () {
    result_array = []
    this.serverRequest = $.get('http://localhost:4567/viewing_history', function (result) {
      console.log(result);
    }.bind(this));
  },

  render: function() {
    const data = {
        labels: this.state.labels,
        datasets: [
            {
                label: "My First dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            }
        ]
    };
    return (
      <LineChart data={data} width="600" height="480" />
    )
  }
});

module.exports = Home;
