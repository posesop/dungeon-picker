import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { bookWorkstation } from 'redux/workstations/actions';

import WorkStationItem from './WorkStationItem';
import './styles.css';

class WorkStationsList extends Component {
  render() {
    const { workstations } = this.props;

    return (
      <ul className="workstation-list">
        {
          workstations.map(ws => 
          <li 
            key={ws.id}>
              <WorkStationItem 
                onClick={() => this.props.bookWorkstation(ws.id, !ws.free)}
                {...ws} 
              />
          
          </li>)
        }
      </ul>
    );
  }
};

WorkStationsList.defaultProps = {
  workstations: [],
};

WorkStationsList.propTypes = {
  workstations: PropTypes.arrayOf(PropTypes.object),
};

const mapDispatchToProps = {
  bookWorkstation
};

export default connect(null, mapDispatchToProps)(WorkStationsList);