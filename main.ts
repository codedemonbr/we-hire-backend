import { programmersRouter } from './programmers/programmers.router';
import { Server } from './server/server';

const server = new Server();

server
    .bootstrap([programmersRouter])
    .then((server) => {
        console.log(
            'The server is listening on port',
            server.application.address()
        );
    })
    .catch((error) => {
        console.log('Server failed to start');
        console.error(error);
        process.exit(1);
    });
