import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css'; 

const App = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        setDatas(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1>Pokémon </h1>
      <ul className="pokemon-list">
        {datas.map((item, index) => (
          <li key={index} className="pokemon-item">{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
