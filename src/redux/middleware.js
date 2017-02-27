import loggerMiddleware from './middleware/loggerMiddleware';
import epicMiddleware from './middleware/epicMiddleware';
import mopidyMiddleware from './middleware/mopidyMiddleware';

// define store middlewares as an array
export default [
  loggerMiddleware,
  epicMiddleware,
  mopidyMiddleware
];
