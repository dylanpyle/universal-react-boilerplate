import React, { Component, PropTypes } from 'react';

import { get } from '../../services/api';

class CountryPage extends Component {
  static loadProps({ params }, cb) {
    get(`/alpha/${params.countryCode}`).then(([data, response]) => {
      if (response.status === 404) {
        const error = new Error('Country not found');
        error.status = 404;
        cb(error);
      }

      cb(null, {
        country: data
      });
    });
  }

  render() {
    const country = this.props.country;

    if (!country) {
      return (<div>Country not found</div>);
    }

    return (
      <section>
        <h1>{country.name}</h1>
        <dl>
          <dt>Alternate Spellings:</dt>
          <dd>{country.altSpellings.join(', ')}</dd>
          <dt>Capital:</dt>
          <dd>{country.capital}</dd>
          <dt>Population:</dt>
          <dd>{country.population}</dd>
        </dl>
      </section>
    );
  }
}

CountryPage.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    altSpellings: PropTypes.array.isRequired,
    capital: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired
  }).isRequired
};

CountryPage.defaultProps = {
  country: {
    altSpellings: [],
    name: 'No Country'
  }
};

export default CountryPage;
