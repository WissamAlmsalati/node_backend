import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import authRoutes from './routes/Routes';
import 'dotenv/config';

const app = express();

app.use(bodyParser.json());
app.use('/api', authRoutes);

const dbURI = process.env.DB_URL as string;
mongoose.connect(dbURI)
  .then(() => console.log('Database connection successful'))
  .catch(err => console.error('Database connection error:', err));

const PORT = process.env.PORT ;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
