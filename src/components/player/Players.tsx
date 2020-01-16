import React from 'react';
import usePostPlayerService from '../../services/usePostPlayerService';
import { Link } from 'react-router-dom';

const Players: React.FC<{}> = () => {
  const service = usePostPlayerService();

  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
        service.payload.sheetData.player.filter(player => player.username)
          .map(player => (
            <div key={player.id}><Link to={'/players/' + player.username}>{player.username}</Link> {player.points}</div>
          ))}
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  );
};

export default Players;