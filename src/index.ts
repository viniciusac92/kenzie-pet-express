import 'reflect-metadata';
import express from 'express';
import { databaseConnect } from './config/db';

const app = express();
console.log('Entrou no app');

app.use(express.json());

databaseConnect(app);
