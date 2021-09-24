import 'reflect-metadata';
import express from 'express';
import { databaseConnect } from './config/db';
import RoutersInitializer from './api/routers';

const app = express();
console.log('Entrou no app');

app.use(express.json());

RoutersInitializer(app);

databaseConnect(app);
