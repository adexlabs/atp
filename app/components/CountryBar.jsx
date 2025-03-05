import { countries } from 'data/countries'
import React from 'react'
import flagImg from '~/assets/us-flag.png';
export default function CountryBar () {
  return (
    <div className='topbar'>
    {
        countries.map((country, index) => (
            <span key={index}>
            <img
            style={{
                width: 20,
                height: 20
            }}

            src={`flagImg ${country.isoCode}`}
            />
            </span>
        ))
    }
    </div>
  )
}

