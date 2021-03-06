import React from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./PulseDown.scss"

const PulseDown = () => {
  return (
    <div className="pulse-down">
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
}

export default PulseDown