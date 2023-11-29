import React from 'react';
import TravelEntry from './TravelEntry';

const entries = [
    {
      id: 1,
      country: 'Pakistan',
      location: 'Badshahi Mosque',
      dateRange: '12 Jan, 2021 - 24 Jan, 2021',
      description: 'The Badshahi Mosque, a historic Mughal masterpiece in Lahore, Pakistan, built in 1673, is known for its striking red sandstone construction and vast capacity, revered as both a major tourist site and a spiritual sanctuary.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Badshahi_Mosque_front_picture.jpg/800px-Badshahi_Mosque_front_picture.jpg'
    },
    {
      id: 1,
      country: 'India',
      location: 'Taj Mahal',
      dateRange: '12 Jan, 2021 - 24 Jan, 2021',
      description: 'The Taj Mahal in Agra, India, is a 17th-century marvel of marble, built by Shah Jahan for his wife Mumtaz Mahal, and is admired globally for its stunning architectural symmetry and historical significance.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/1024px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg'
    },
    {
      id: 1,
      country: 'China',
      location: 'The Great Wall of China',
      dateRange: '12 Jan, 2021 - 24 Jan, 2021',
      description: 'The Great Wall of China, a series of fortifications made of stone, brick, and other materials, stretches over 13,000 miles and is a symbol of Chinese strength and perseverance, dating back to as early as the 7th century BC.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg'
    }
  ];

function TravelJournal()
{
  return (
    <div className="travel-journal">
      {}
      {entries.map((entry) => {
        return (
          <TravelEntry
            key = {entry.id}
            country = {entry.country}
            location = {entry.location}
            dateRange = {entry.dateRange}
            description = {entry.description}
            imageUrl = {entry.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default TravelJournal;
