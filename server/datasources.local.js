module.exports = {
  db: {
    name: 'db',
    connector: 'memory',
  },
  punggolDB: {
    host: 'localhost',
    port: 5432,
    url: process.env.DB_URL,
    database: process.env.DB_NAME,
    password: '',
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    connector: 'postgresql',
  },
};
