import express from 'express';
import router from './routes/rideRoutes';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });
const PORT = process.env.BACKEND_PORT || 3333;

const app = express();
app.use(express.json());
app.use('/ride', router);

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));