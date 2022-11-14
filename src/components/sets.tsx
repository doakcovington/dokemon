import React, { useEffect, useState } from 'react';
import axios, {AxiosError} from 'axios';

type Set = {
  id: string;
  name: string;
};

type Error = {
  message: string;
}

const token = process.env.REACT_APP_POKEMONTCG_API_KEY

const Sets: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/sets", {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .then(
      (result) => {
        console.log(result.data)
        setIsLoaded(true)
        setItems(result.data)
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading Sets</div>;
  } else {
    return (
      <ul>
        {items.map((items: Set)  => (
          <li key={items.id}>
            {items.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Sets