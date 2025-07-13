import React from 'react';

const GameCard = ({ game }) => (
  <div className="game-card">
    <img
      src={game.background_image}
      alt={game.name}
      style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
    />
    <h3>{game.name}</h3>
    <p>Rating: {game.rating}</p>
  </div>
);

export default GameCard;
