import React from 'react';
import usePostPlayerService from '../../services/usePostPlayerService';
import { useParams } from 'react-router-dom';

interface RouteParams {
    username: string;
}

const Player: React.FC<{}> = () => {
    const service = usePostPlayerService();
    const params = useParams<RouteParams>();

    return (
        <div>
            {service.status === 'loading' && <div>Loading...</div>}
            {service.status === 'loaded' &&
                service.payload.sheetData.player
                    .filter((player) => player.username === params.username)
                    .map(player => (
                        <div key={player.id}>{player.username} {player.points}</div>
                    ))
            }
            {service.status === 'error' && (
                <div>Error, the backend moved to the dark side.</div>
            )}
        </div>
    );
};

export default Player;