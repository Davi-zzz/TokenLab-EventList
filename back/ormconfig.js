module.exports = {
  type: "mysql",
  host: "localhost",
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PSSWD,
  database: process.env.DB_NAME,
  entities: ["dist//*{.ts,.js}", "src//*{.ts,.js}"],
  synchronize: true,
  dropSchema: false,
};