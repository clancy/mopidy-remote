import loggerMiddleware from './middleware/loggerMiddleware';
import epicMiddleware from './middleware/epicMiddleware';

// define store middlewares as an array
export default [
  loggerMiddleware,
  epicMiddleware
];
