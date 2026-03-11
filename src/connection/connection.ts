import { Sequelize } from 'sequelize';

export const connection = new Sequelize({
  database: 'sisweb_db',
  dialect: 'postgres',
  username: 'sisweb_user',
  password: 'HDK#$%Ljkwerff.89',
  host: 'localhost',
  port: 5432
});

async function connectionDB() {
  try {
    await connection.authenticate();
    await connection.sync();
    console.log("¡Conexión exitosa a PostgreSQL!");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
}

export default connectionDB;