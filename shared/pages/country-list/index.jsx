import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { get } from '../../services/api';

function renderCountry(country) {
  const code = country.alpha2Code;

  return (
    <li key={code}>
      <Link to={`/countries/${code}`}>
        {country.name}
      </Link>
    </li>
  );
}

class CountryListPage extends Component {
  static loadProps(params, cb) {
    get('/all').then(([data]) => {
      cb(null, {
        countries: data
      });
    });
  }

  render() {
    return (
      <section className='c--country-list'>
        <h1>Choose a country to learn more:</h1>
        <ul>
          {this.props.countries.map(renderCountry)}
        </ul>
      </section>
    );
  }

}

CountryListPage.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      alpha2Code: PropTypes.string.isRequired
    })
  ).isRequired
};

CountryListPage.defaultProps = {
  countries: []
};

export default CountryListPage;
