import React, { Component } from 'react';
import './Slot.css'

/**
 * Slot component.
 * @extends Component
 */
class Slot extends Component {
  /**
   * Initialize the component.
   * @param {Object} props - The component props.
   */
  constructor(props) {
    super(props);

    this.state = {
      cleaner: ''
    };

    this.book = this.book.bind(this);
    this.update = this.update.bind(this);
  }

  /**
   * Send a booking request to the service.
   * @param {Event} e - The default event.
   */
  book(e) {
    e.preventDefault();
    this.props.service.createBooking(
      this.update,
      this.props.day,
      this.props.start,
      this.props.end,
      this.props.visitDuration,
      this.props.propertyId
    );
  }

  /**
   * Update the slot after it has been booked.
   * @param {Object} data - The data to update from.
   */
  update(data) {
    if (data.success) {
      this.setState({
        cleaner: data.cleaner.name.slice()
      })
    }
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <p className='slot'>
        {this.props.start} to {this.props.end}
        {this.state.cleaner.length ? (
          <span>Booked with {this.state.cleaner}</span>
        ) : (
          <a href="#" onClick={this.book}>Book</a>
        )}
      </p>
    );
  }
}

export default Slot;
