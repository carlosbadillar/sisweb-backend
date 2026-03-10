import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import apiRouter from './src/routes'; // Importamos el grupo de rutas

const app: Express = express();
const port: number = 3000;

app.use(morgan('dev'));
app.use(express.json()); // ¡Súper importante para que entienda los datos de Postman!
app.use(apiRouter); // Usamos el router central

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});