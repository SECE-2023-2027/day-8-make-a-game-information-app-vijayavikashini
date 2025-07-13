import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get(`https://api.rawg.io/api/games/${id}`, {
      params: { key: import.meta.env.VITE_RAWG_API_KEY }
    }).then(res => setGame(res.data));
  }, [id]);

  if (!game) return <p>Loading...</p>;

  return (
    <div>
      <h2>{game.name}</h2>
      <img src={game.background_image} alt={game.name} />
      <p><strong>Released:</strong> {game.released}</p>
      <p><strong>Platforms:</strong> {game.platforms.map(p => p.platform.name).join(', ')}</p>
      <p><strong>Description:</strong> {game.description_raw}</p>
    </div>
  );
};

export default GameDetails;
