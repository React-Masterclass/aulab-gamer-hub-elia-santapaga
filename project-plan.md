# Aulab Gamer Hub

- [Descrizione](#descrizione)
- [API](#api)
- [Styling Solution or Component Library](#styling-solution-or-component-library)
- [Pages](#pages)
- [API + User Interaction](#api--user-interaction)
- [Context API](#context-api)
- [Deployment](#deployment)

## Descrizione

Aulab Gamer Hub è una web app che permette di cercare, filtrare ed esplorare oltre 800.000 giochi grazie all'API di Rawg.io.

## API

- Rawg.io: https://rawg.io/apidocs:

  - [x] Supporta CORS
  - [x] Richiede una chiave API
  - [ ] Richiede OAuth

## Styling Solution o Component Library

- Bootstrap: https://getbootstrap.com
- Font Awesome: https://fontawesome.com
- Swiper: https://swiperjs.com
- Google Font: https://swiperjs.com
- Material UI: https://mui.com

## Pages

1. Home - Header, dettagli dei servizi, trailer
2. Game List - Lista dei videogiochi, barra di ricerca, filtri e pagination
3. Game Detail - Dettagli del videogioco scelto (che si può aggiungere o rimuovere dai preferiti), live chat e recensioni
4. Login - Form per il login, autenticazione con Discord, Github e Google (Supabase)
5. Register - Form per la registrazione degli account (Supabase)
6. Account - Dettagli dell'utente loggato, giochi preferiti e recensioni
7. Settings - Form di modifica dei dati e dell'avatar dell'utente

## API + User Interaction

- (Game list) Visualizzazione di ogni videogioco sotto forma di card con le seguenti informazioni:
  - Immagine di copertina
  - Nome
  - Generi
- (Game list) Possibilità di filtrare i giochi per nome, genere, piattaforma, store online, sviluppatore o publisher
- (Game List) Possibilità di navigare liberamente tra le pagine sia dei giochi che dei filtri grazie alla pagination
- (Game Detail) Visualizzazione dei seguenti dettagli del gioco:
  - Immagine di copertina
  - Descrizione del gioco
  - Recensioni
  - Live chat
- (Login) Login con Supabase: email e Discord
- (Logout) Logout con Supabase
- (Account Profile) Visualizzazione dei dettagli dell'account, dei preferiti e delle recensioni lasciate su ogni gioco
- (Account Settings) Modifica dei dati dell'account

## Context API

- Games
- Genres
- GamesSearched
- Loading
- Error
- Search
- Pagination
- Game
- Session
- SignIn
- SignUp
- SignOut

## Deployment

- Vercel: https://aulab-gamer-hub.vercel.app
