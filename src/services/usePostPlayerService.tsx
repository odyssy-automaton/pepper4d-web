import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Player } from '../types/Player';

export interface Players {
  sheetData: {
    player: Player[];
  };
}

const usePostPlayerService = () => {
  const [result, setResult] = useState<Service<Players>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('http://3.134.134.69:1880/p4dusers')
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default usePostPlayerService;