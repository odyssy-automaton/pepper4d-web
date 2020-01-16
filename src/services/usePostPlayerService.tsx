import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Player } from '../types/Player';

export interface Players {
  player: Player[];
}

// TODO use node red endpoint (needs ssl) http://3.134.134.69:1880/p4dusers
const playersURL = 'https://v2-api.sheety.co/5903bc3ce34ea5328c3f80334abc5a60/noderedPepper4D/player'

const usePostPlayerService = () => {
  const [result, setResult] = useState<Service<Players>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(playersURL)
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default usePostPlayerService;