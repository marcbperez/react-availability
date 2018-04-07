import React, { Component } from 'react';
import Slot from '../Slot/Slot';
import './Day.css';

/**
 * Day component.
 * @extends Component
 */
class Day extends Component {
  /**
   * Render the component.
   */
  render() {
    const service = this.props.service;
    const day = this.props.day;
    const visitDuration = this.props.visitDuration;
    const propertyId = this.props.propertyId;

    /* Only consider the slots that are available. */
    const startTimes = this.props.startTimes.filter(
      starTime => starTime.possible
    );

    return (
      <div className='day'>
        <h3>{this.props.day}</h3>

        {!startTimes.length ? (
          <p className='status'>Fully booked</p>
        ) : (
          <p className='status'>{startTimes.length} slots available</p>
        )}

        {startTimes.map(function(startTime, key) {
          return (
            <Slot
              key={key}
              service={service}
              day={day}
              start={startTime.start}
              end={startTime.end}
              visitDuration={visitDuration}
              propertyId={propertyId}
            />
          );
        })}
      </div>
    );
  }
}

export default Day;
