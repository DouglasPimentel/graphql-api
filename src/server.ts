import { createServer } from 'http';
import app from './app';
import { config } from './config/config';

(() => {
  const server = createServer(app.callback());

  server.listen(config.PORT);
})();
