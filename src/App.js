import './App.css';

function App() {
   const getAllPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20`);
      const data = await res.json();
   };

   console.log(data);

   return <div className="App">Welcome to Pokedex demo 🤗</div>;
}

export default App;
