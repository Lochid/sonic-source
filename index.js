const { transport } = require('./dist/transport/SocketTransport');
var RR = require('./dist/sound-source/RandomSoundSource').default;
var OnSonicFrame = require('./dist/sound-source/SoundSource').OnSonicFrame;

const port = process.env.PORT || 3000;

const send = transport(port);

const rr = new RR();

rr.on(OnSonicFrame, send);