import React from 'react';
import PropTypes from 'prop-types';
import cnames from 'classnames';
import './styles.css';

const baseClassName = 'workstation-item';

const WorkStationItem = ({ free, availableForBooking, onClick }) => (
  <div 
    className={cnames(baseClassName, { free, disabled: !availableForBooking })}
    onClick={onClick}>
  </div>
);

WorkStationItem.propTypes = {
  id: PropTypes.string.isRequired,
  free: PropTypes.bool.isRequired,
  availableForBooking: PropTypes.bool.isRequired,
  location: PropTypes.arrayOf(PropTypes.number),
  onClick: PropTypes.func,
};

export default WorkStationItem;