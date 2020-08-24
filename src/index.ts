import { transport } from './transport/socket-transport';
import { randomSonicSource } from './sonic-source/random-sonic-source';

const port = +(process.env.PORT || 3000);

randomSonicSource(transport(port));