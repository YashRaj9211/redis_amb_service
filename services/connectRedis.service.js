import Redis from 'ioredis'

const client = new Redis({
    host: '127.0.0.1',
    port: 6379
});

export default client;