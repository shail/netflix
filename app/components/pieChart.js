var $ = require('jquery');
var _ = require('lodash');

var PieChart = require('react-chartjs').Pie;
var React = require('react');

var moment = require('moment');

var ShowPieChart = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      labels: []
    };
  },

  getDefaultProps: function() {
    colors: ["#FF6384", "#36A2EB", "#FFCE56", "#000000", "#00FF00" ]
  },

  componentDidMount: function () {
    const resultObject = _.zipObject(this.state.data, this.state.labels);
    this.serverRequest = $.get('http://localhost:4567/viewing_history', function (result) {
      _.forEach(result.viewing_history, function(object) {
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
        returnData.push(value);
        returnLabels.push(key)
      });
      this.setState({data: returnData, labels: returnLabels});
    }.bind(this));
  },

  render: function() {
    const data = {
        labels: this.state.labels,
        datasets: [
          {
            label: "Top 5 TV Shows",
            data: this.state.data,
            backgroundColor: this.props.colors
          }
        ]
    };
    return (
      <PieChart data={data} width="600" height="480" />
    )
  }
});

module.exports = ShowPieChart;
