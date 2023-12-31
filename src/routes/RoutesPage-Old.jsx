import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import RouteNotFound from '../pages/RouteNotFound';
import GameList from '../pages/GameList';
import Register from '../pages/auth/Register';
import GameDetail from '../pages/GameDetail';
import AccountProfile from '../pages/auth/AccountProfile';
import LoggedUserRoutes from '../pages/auth/LoggedUserRoutes';
import AccountSettings from '../pages/auth/AccountSettings';
import Genre from '../pages/filters/Genre';
import Developer from '../pages/filters/Developer';
import Publisher from '../pages/filters/Publisher';
import Platform from '../pages/filters/Platform';
import Store from '../pages/filters/Store';
import CommentPage from '../pages/CommentPage';

function RoutesPage() {
  return (
    <Routes>
      {/* //* Ogni rotta corrisponde a una pagina creata nella cartella pages e importata */}
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<GameList />} />
      <Route
        path="/games/genres/:genre"
        lazy="/game/genres/:genre"
        element={<Genre />}
      />
      <Route
        path="/games/platforms/:platform/:platform_id"
        element={<Platform />}
      />
      <Route path="/games/developers/:developer" element={<Developer />} />
      <Route path="/games/publishers/:publisher" element={<Publisher />} />
      <Route path="/games/stores/:store/:store_id" element={<Store />} />
      <Route
        path="/game/:game_slug"
        lazy="/game/:game_slug"
        element={<GameDetail />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/game/:slug/review" element={<CommentPage />} />

      {/* //* Per creare delle rotte parametriche devo inserire nell'URL "/:nomeparametro" */}
      {/* //* La proprietà lazy="" permette di rallentare il caricamento della rotta chiamata */}
      {/* //todo <Route path="/game/:id" lazy="/game/:id" element={<DetailGame />} /> */}

      {/* //* Questa rotta conterrà tutte le rotte protette (accessibili se l'utente è loggato) */}
      <Route element={<LoggedUserRoutes />}>
        <Route path="/profile" element={<AccountProfile />} />
        <Route path="/settings" element={<AccountSettings />} />
      </Route>

      {/* //* Rotta per l'errore 404 - Page not found. Se la rotta non esiste, viene visualizzata questa pagina */}
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
}

export default RoutesPage;
