import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function FilterDeveloper() {
  const { developers } = useParams();
  const [developerGames, setDeveloperGames] = useState([]);

  useEffect(() => {
    async function getDevelopers() {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}developers?key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const json = await response.json();
      setDeveloperGames(json.results);
    }
    getDevelopers();
  }, []);

  return (
    <div className="col-12 col-md-2 d-flex justify-content-center my-2 developer-anim">
      <div className="dropdown">
        <button
          className="game-list-button dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Developers
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          {developerGames.map((developer) => (
            <li key={developer.id} value={developer.id}>
              <Link className="dropdown-item" to={`/games/developers/${developer.slug}`}>
                {developer.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterDeveloper;
