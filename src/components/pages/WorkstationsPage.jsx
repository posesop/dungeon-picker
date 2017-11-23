import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { fetchWorkStations, setDate } from 'redux/workstations/actions';
import WorkStationsList from 'components/workstations/WorkStationsList';

import { SingleDatePicker } from 'react-dates';

class WorkstationsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    }
  };

  componentDidMount() {
    this.props.fetchWorkStations(this.props.date);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.date !== nextProps.date) {
      this.props.fetchWorkStations(nextProps.date);
    }
  };

  render() {
    return (
      <div>
        <div>Workstations page!</div>
        <SingleDatePicker
          date={new moment(this.props.date)}
          onDateChange={date => this.props.setDate(date.format('MM DD YY'))}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          />
        <WorkStationsList workstations={this.props.workstations} />
      </div>


    );
  }
}

WorkstationsPage.propTypes = {
  fetchWorkStations: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  workstations: PropTypes.array.isRequired,
  date: PropTypes.string,
};

const mapStateToProps = state => ({
  workstations: state.workStations.list,
  date: state.workStations.date,
});

const mapDispatchToProps = {
  fetchWorkStations,
  setDate
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkstationsPage);
