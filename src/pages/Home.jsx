import { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';
import SearchBar from '../components/SearchBar';
import staticGames from '../data/staticGames';

const Home = () => {
  const [games, setGames] = useState([]);

  const handleSearch = (query) => {
    if (!query) {
      setGames(staticGames);
      return;
    }

    const filtered = staticGames.filter(game =>
      game.name.toLowerCase().includes(query.toLowerCase())
    );
    setGames(filtered);
  };

  useEffect(() => {
    setGames(staticGames); // show all games initially
  }, []);

  return (
    <div>
      <h1>Game Info App</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="game-grid">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
