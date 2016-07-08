var $ = require('jquery');
var _ = require('lodash');

var BarChart = require('react-chartjs').Bar;
var React = require('react');

var moment = require('moment');

var ShowBarChart = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      labels: []
    };
  },

  getDefaultProps: function() {
    colors: ["#FF6384", "#36A2EB", "#FFCE56", "#000000", "#00FF00" ]
  },

  componentWillReceiveProps: function(nextProps) {
    const resultObject = _.zipObject(this.state.data, this.state.labels);
    const resultArray = []
    _.forEach(nextProps.viewingHistory.viewing_history, function(object) {
      const name = object.name;
      if (name.includes("Season")) {
        const arrayName = name.split(" ");
        const editedName = arrayName.slice(0, arrayName.indexOf("Season")).join(" ").replace(/:/, '');
        resultObject[editedName] == undefined ? resultObject[editedName] = 1 : resultObject[editedName] = resultObject[editedName] + 1;
      };
    });

    const returnData = [];
    const returnLabels = [];

    _.forEach(resultObject, function(value, key) {
      resultArray.push([value, key]);
    });

    const sortedArray = resultArray.sort(function(a, b) {
      return a[0] - b[0]
    });

    _.forEach(sortedArray.reverse().slice(0,5), function(pair) {
      returnData.push(pair[0]);
      returnLabels.push(pair[1]);
    });

    this.setState({data: returnData, labels: returnLabels});
  },

  render: function() {
    const barData = {
        labels: this.state.labels,
        datasets: [
            {
                fillColor : "#FFB6C1",
                label: "Top 5 TV Shows",
                data: this.state.data,
            }
        ]
    };
    return (
      <BarChart data={barData} width="600" height="480" redraw />
    )
  }
});

module.exports = ShowBarChart;
