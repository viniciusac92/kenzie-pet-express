import 'reflect-metadata';
import express from 'express';
import { databaseConnect } from './config/db';
import RoutersInitializer from './api/routers';
import passport from 'passport';

const app = express();

app.use(express.json());

app.use(passport.initialize());

RoutersInitializer(app);

databaseConnect(app);
