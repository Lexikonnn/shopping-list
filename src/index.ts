import express, { Request, Response } from 'express';
import cors from 'cors';
import connectDB from './db';
import itemRoutes from './routes/items';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', itemRoutes);

// Připojení k databázi
connectDB();

// Základní routa
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
