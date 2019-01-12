import React from 'react';

export default function BandList(props) { // changed the component name to BandList
  return (
    <div>
      <h6>{props.genre}</h6>
      <ul>
        {props.bands.map((band, i) => <li key={i}>${band}</li>)}
      </ul>
    </div>
  )
}
