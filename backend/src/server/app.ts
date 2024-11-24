import express from 'express';
import router from '../routes/rideRoutes';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const app = express();
app.use(express.json());
app.use('/ride', router);

export default app;