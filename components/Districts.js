import React, { useState } from 'react';
import {requestPosts} from '../components/actions';

export default function Districtor() {

// initialize
const initialState = {
  isFetching: false,
  prefs: [
    { code: '01', name: '北海道' },
    { code: '02', name: '青森県' }
  ],
  cities: []
};

  const [district, setDistrict] = useState(initialState);
//  render() {
    const { prefs, cities} = district;
    return (
      <div>
        <select onChange={ (e) => requestPosts(e.target.value) }>
          {
            prefs.map(pref => <option key={ pref.code } value={ pref.code }>{ pref.name }</option>)
          }
        </select>
        <select>
          {
            cities.map(city => <option key={ city.id } value={ city.id }>{ city.name }</option>)
          }
        </select>
      </div>
    );
  }
//}
