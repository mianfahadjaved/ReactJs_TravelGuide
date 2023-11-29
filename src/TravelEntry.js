import React from 'react';

function TravelEntry(props)
{
  return (
    <div className="travel-entry">
      <img src={props.imageUrl} alt={props.location} />
      <div className="entry-details">
        <h2>{props.country}</h2>
        <h3>{props.location}</h3>
        <p>{props.dateRange}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default TravelEntry;
