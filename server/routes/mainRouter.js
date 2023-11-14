const { Router } = require('express');
const orderRouter = require('./Routers/order');
const paintRouter = require('./Routers/servicesRouter');
const paintbrushRouter = require('./Routers/providersRouter');
const rollerRouter = require('./Routers/claimsRouter');
const userRouter = require('./Routers/mercadoPagoRouter');

const mainRouter = Router();

mainRouter.use('/order', orderRouter);
mainRouter.use('/paint', paintRouter);
mainRouter.use('/paintbrush', paintbrushRouter);
mainRouter.use('/roller', rollerRouter);
mainRouter.use('/user', userRouter);

module.exports = mainRouter;
