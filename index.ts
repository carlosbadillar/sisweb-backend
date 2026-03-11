import express, { Express } from 'express';
import morgan from 'morgan';
import productRouter from './src/routes/productRoutes';
import connectionDB from './src/connection/connection';

const app: Express = express();
const port: number = 3000;

app.use(morgan('dev'));
app.use(express.json());

connectionDB();

app.use('/product', productRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});