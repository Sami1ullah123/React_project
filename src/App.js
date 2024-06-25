// src/App.js
import React, { useState } from "react";
import {
  useGetPokemonsQuery,
  useGetPokemonDetailsQuery,
} from "./services/sampleApi";

function PokemonList({ page, setPage }) {
  const { data, error, isLoading } = useGetPokemonsQuery({ page });

  if (isLoading) return <p className="text-gray-700">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.results.map((pokemon) => (
          <PokemonListItem key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page + 1}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={!data.next}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function PokemonListItem({ name }) {
  const { data, error, isLoading } = useGetPokemonDetailsQuery(name);

  if (isLoading) return <p className="text-gray-700">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 border border-gray-200">
      <img
        src={data.sprites.front_default}
        alt={name}
        className="w-24 h-24 mb-4"
      />
      <span className="text-lg font-semibold">{name}</span>
    </div>
  );
}

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">
          Welcome to React with Tailwind CSS and RTK Query
        </h1>
      </header>
      <main className="p-4">
        <PokemonList page={page} setPage={setPage} />
      </main>
    </div>
  );
}

export default App;
