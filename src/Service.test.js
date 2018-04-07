import Service from './Service';

const fetch = jest.fn(() => new Promise(resolve => resolve()));

it('gets availability', () => {
  const service = new Service('');
  service.getAvailability(function(data) {}, '2016-12-05', 2.5, 'EC1R 3BU');
});

it('creates a booking', () => {
  const service = new Service('');
  service.createBooking(
    function(data) {}, '2016-12-11', '08:00:00', '08:30:00', 2.5, 'ealdk1f9'
  );
});
