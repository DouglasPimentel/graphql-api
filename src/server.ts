import { createServer } from 'http';
import app from './app';

(() => {
  const server = createServer(app.callback());

  server.listen(4000);
})();
