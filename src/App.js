import './App.css';

import { useEffect, useState } from 'react';

function App() {
   const [allpokemon, setAllpokemon] = useState('');

   const getPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20}`);
      const data = await res.json();

      console.log(data.results[0]);
   };

   useEffect(() => {
      getPokemon();
   }, []);

   return <div className="App">Welcome to Pokedex demo 🤗</div>;
}

export default App;
