import AppNavbar from '../components/Layout/AppNavbar';

function AuthLayout({
  children,
  admin,
  setAdmin,
  game,
  setGame,
  gameSearched,
  setGameSearched,
}) {
  return (
    <div className="container-fluid p-0 app-body">
      <AppNavbar
        admin={admin}
        setAdmin={setAdmin}
        game={game}
        setGame={setGame}
        gameSearched={gameSearched}
        setGameSearched={setGameSearched}
      />
      {children}
    </div>
  );
}

export default AuthLayout;
