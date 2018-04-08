import fetch from 'cross-fetch';

/**
 * Application service
 */
class Service {
  /**
   * Initialize the service.
   * @param {string} baseUrl - The base url of the service.
   */
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * Return an url parameter.
   * @param {string} name - The name of the parameter.
   * @param {string} value - The value of the parameter.
   */
  urlParameter(name, value) {
    return '&' + name + '=' + value;
  }

  /**
   * Get availability.
   * @param {function} callback - The callback to send data to.
   * @param {string} weekBeginning - The week beginning to query.
   * @param {decimal} visitDuration - The visit duration in hours.
   * @param {string} postCode - The postcode of the property.
   */
  getAvailability(callback, weekBeginning, visitDuration, postcode) {
    let url = this.baseUrl + '/availability/?';

    /* Add parameters to the url. */
    url += this.urlParameter('weekBeginning', weekBeginning);
    url += this.urlParameter('visitDuration', visitDuration);
    url += this.urlParameter('postcode', postcode);

    /* Prepare fetch parameters. */
    var init = {
      method: 'GET',
      cache: 'default',
    };

    /* Fetch data and send to callback. */
    fetch(url, init)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        callback(data);
      });
  }

  /**
   * Create a booking.
   * @param {function} callback - The callback to send data to.
   * @param {string} day - The day to book.
   * @param {string} startTime - The start time of the slot.
   * @param {string} endTime - The end time of the slot.
   * @param {decimal} visitDuration - The visit duration in hours.
   * @param {string} propertyId - The property identifier.
   */
  createBooking(callback, day, startTime, endTime, visitDuration, propertyId) {
    let url = this.baseUrl + '/book/';

    /* Prepare fetch headers. */
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    /* Define request body. */
    var body = {
      'day': day,
      'startTime': {
        'start': startTime,
        'end': endTime
      },
      'visitDuration': visitDuration,
      'propertyId': propertyId
    }

    /* Prepare fetch parameters. */
    var init = {
      method: 'POST',
      cache: 'default',
      headers: headers,
      body: JSON.stringify(body)
    };

    /* Fetch data and send to callback. */
    fetch(url, init)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        callback(data);
      });
  }
}

export default Service;
