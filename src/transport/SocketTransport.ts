import express from 'express';
import http from 'http';
import socket from 'socket.io';
import { SonicRay } from '../sound/SonicRay';
import { OnSonicFrame } from '../sound-source/SoundSource';
import { Transport } from './Transport';

export const transport: Transport = (port: number) => {
    const app = express();
    const server = http.createServer(app);
    const io = socket(server);

    server.listen(port, () => {
        console.log('Server listening at port %d', port);
    });

    app.use(express.static('public'));

    return (data: SonicRay) => {
        io.emit(OnSonicFrame, data);
    };
};