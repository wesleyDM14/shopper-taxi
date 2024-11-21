import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const PORT = process.env.BACKEND_PORT || 8000;

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));