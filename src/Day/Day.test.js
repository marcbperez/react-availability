import React from 'react';
import ReactDOM from 'react-dom';
import Day from './Day';
import Service from '../Service'

it('renders without crashing', () => {
  const service = new Service('');
  const div = document.createElement('div');
  ReactDOM.render(
    <Day service={service} startTimes={[{ possible: true }]}/>, div
  );
});

it('shows fully booked', () => {
  const service = new Service('');
  const div = document.createElement('div');
  ReactDOM.render(
    <Day service={service} startTimes={[{ possible: false }]}/>, div
  );
});
