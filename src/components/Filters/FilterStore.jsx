import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function FilterStore() {
  const { store } = useParams();
  const [storeGames, setStoreGames] = useState([]);

  useEffect(() => {
    async function getStores() {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}stores?key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const json = await response.json();
      setStoreGames(json.results);
    }
    getStores();
  }, []);

  return (
    <div className="col-6 col-md-2 d-flex justify-content-center">
      <div class="dropdown">
        <button
          class="game-list-button dropdown-toggle "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Stores
        </button>
        <ul class="dropdown-menu dropdown-menu-dark ">
          {storeGames.map((store) => (
            <li key={store.id} value={store.id}>
              <Link className="dropdown-item" to={`/games/${store.slug}`}>
                {store.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterStore;