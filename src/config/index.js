const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://media-player.vercel.app/';

export default {
  URL_BACKEND,
};
