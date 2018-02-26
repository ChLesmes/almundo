import Debug from 'debug';
import app from './app';
import { port } from './config';

const debug = new Debug('almundo:root');

app.listen(port, ()=>{
  debug(`Server running at port ${port}`);
});
