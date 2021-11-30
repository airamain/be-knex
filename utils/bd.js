const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3307,
        user: 'root',
        password: 'a2006drian',
        database: 'pwa20212cm',
        pool: { max: 1, max: 10 }
    }
});

module.exports = knex;