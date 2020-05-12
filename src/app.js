// import * as Sentry from '@sentry/node';
// or using CommonJS
const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://d4bb1794f5414a76866905f2a7b6f265@o390745.ingest.sentry.io/5235703' });

const app = async () => '#BuildforSDG';

export default app;
