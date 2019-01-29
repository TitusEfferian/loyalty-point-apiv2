import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/index'
import usersRouter from './routes/users'
import generateKey from './routes/generateKey'
import vouchersRouter from './routes/vouchers'

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v2/', indexRouter);
app.use('/api/v2/users', usersRouter);
app.use('/api/v2/generate_key',generateKey)
app.use('/api/v2/voucher',vouchersRouter)


module.exports = app;
