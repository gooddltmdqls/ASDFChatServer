import http from 'http';

const port = process.env.PORT || 6667;

const server = http.createServer();

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export default server;