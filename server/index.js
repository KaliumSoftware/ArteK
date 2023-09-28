import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import server from './app/app.js';

const { CONNECTION_STRING, PORT } = process.env;

const port = PORT || 3001;

const connectionString = `${CONNECTION_STRING}`;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Database Connected');
    server.listen(port, () => {
      console.log(`server raised on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
