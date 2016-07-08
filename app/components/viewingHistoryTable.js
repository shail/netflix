var _ = require('lodash');

var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var React = require('react');

var moment = require('moment');

var ViewingHistoryTable = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },

  componentWillReceiveProps: function(nextProps) {
    const resultArray = this.state.data;
    _.forEach(nextProps.viewingHistory.viewing_history, function(object) {
      const transformedDate = moment(object.date).format('MM-DD-YY');
      resultArray.push({date: transformedDate, name: object.name});
    });
    this.setState({data: resultArray});
  },

  render: function() {
    return(
      <div className={"bs-table"}>
        <BootstrapTable columnFilter={true} data={this.state.data} pagination={true} striped={true} hover={true}>
            <TableHeaderColumn isKey={true} width="100" dataSort={true} dataField="date">Date</TableHeaderColumn>
            <TableHeaderColumn width="100" dataSort={true} dataField="name">Name</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  },
});

module.exports = ViewingHistoryTable;
