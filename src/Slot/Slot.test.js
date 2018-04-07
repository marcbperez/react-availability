import React from 'react';
import ReactDOM from 'react-dom';
import Slot from './Slot';
import Service from '../Service'

const fetch = jest.fn(() => new Promise(resolve => resolve()));
const e = {
  preventDefault: () => {},
  target: {
    type: 'text'
  }
};

it('renders without crashing', () => {
  const service = new Service('');
  const div = document.createElement('div');
  ReactDOM.render(<Slot service={service}/>, div);
});

it('books a slot', () => {
  const service = new Service('');
  const slot = new Slot({service: service});
  slot.book(e);
  slot.update({
    success: true,
    cleaner: {
      name: 'Ed Harris'
    }
  });
});
