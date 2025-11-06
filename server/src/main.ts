import { loadConfig } from './config/env.js';
import { createApp } from './app.js';

const config = loadConfig();
const app = createApp(config);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running in ${config.nodeEnv} mode on port ${config.port}`);
});
