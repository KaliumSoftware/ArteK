import { Router } from 'express';
const orderRouter = require('./routers/order');
const paintRouter = require('./routers/paintbrushsRouter');
const paintbrushRouter = require('./routers/paintsRouter');
const rollerRouter = require('./routers/ordersRouter');
const userRouter = require('./routers/mercadoPagoRouter');

const mainRouter = Router();

mainRouter.use('/order', orderRouter);
mainRouter.use('/paint', paintRouter);
mainRouter.use('/paintbrush', paintbrushRouter);
mainRouter.use('/roller', rollerRouter);
mainRouter.use('/user', userRouter);

module.exports = mainRouter;
