import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// tiny health check
app.get('/', (_, res) =>
  res.send('Contract‑MS API ‑ try /api/v1/health for status'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀  API running on port ${PORT}`));
