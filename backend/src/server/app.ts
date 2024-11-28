import express from 'express';
import router from '../routes/rideRoutes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/ride', router);

export default app;