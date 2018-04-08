import React, { Component } from 'react';
import Day from '../Day/Day';
import './App.css';

/**
 * Main application.
 * @extends Component
 */
class App extends Component {
  /**
   * Initialize the application.
   * @param {Object} props - The application props.
   */
  constructor(props) {
    super(props);

    this.state = {
      days: Array(0),
      weekBeginning: '2016-12-05',
      visitDuration: 2.5,
      postcode: 'EC1R 3BU',
      propertyId: 'ealdk1f9'
    };

    this.updateDays = this.updateDays.bind(this);
    this.searchChange = this.searchChange.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);

    this.props.service.getAvailability(
      this.updateDays,
      this.state.weekBeginning,
      this.state.visitDuration,
      this.state.postcode
    );
  }

  /**
   * Update days after a search.
   * @param {Object} data - The data to update from.
   */
  updateDays(data) {
    this.setState({
      days: data.slice()
    });
  }

  /**
   * Updates state values from search form.
   * @param {Event} e - The default event.
   */
  searchChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  /**
   * Submits the search form and updates the days.
   * @param {Event} e - The default event.
   */
  searchSubmit(e) {
    e.preventDefault();
    this.props.service.getAvailability(
      this.updateDays,
      this.state.weekBeginning,
      this.state.visitDuration,
      this.state.postcode
    );
  }

  /**
   * Render the main application.
   */
  render() {
    const service = this.props.service;
    const visitDuration = this.props.visitDuration;
    const propertyId = this.state.propertyId;

    return (
      <div>
        <div className="app-header">
          <h2>React Availability</h2>
          <form onSubmit={this.searchSubmit}>
            <div>
              <label>Week beginning</label>
              <input name="weekBeginning" type="date"
                value={this.state.weekBeginning}
                onChange={this.searchChange} />
            </div>
            <div>
              <label>Visit duration</label>
              <input name="visitDuration" type="number" step="0.5"
                value={this.state.visitDuration}
                onChange={this.searchChange} />
            </div>
            <div>
              <label>Postcode</label>
              <input name="postcode" type="text"
                value={this.state.postcode}
                onChange={this.searchChange} />
            </div>
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="app-content">
          {this.state.days.map(function(entry, key) {
            return (
              <Day
                key={key}
                service={service}
                day={entry.day}
                startTimes={entry.startTimes}
                visitDuration={visitDuration}
                propertyId={propertyId}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
