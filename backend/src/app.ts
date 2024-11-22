import express from 'express';
import dotenv from 'dotenv';
import router from './routes/rideRoutes';

dotenv.config({ path: '../.env' });

const PORT = process.env.BACKEND_PORT || 8000;

const app = express();
app.use(express.json());
app.use('/ride', router);

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));