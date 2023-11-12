const { Router } = require('express');
const consumersRouter = require('./Routers/consumersRouter');
const servicesRouter = require('./Routers/servicesRouter');
const providersRouter = require('./Routers/providersRouter');
const claimsRouter = require('./Routers/claimsRouter');
const mercadoPagoRouter = require('./Routers/mercadoPagoRouter');

const mainRouter = Router();

mainRouter.use('/order', consumersRouter);
mainRouter.use('/paint', servicesRouter);
mainRouter.use('/paintbrush', providersRouter);
mainRouter.use('/roller', claimsRouter);
mainRouter.use('/user', claimsRouter);
mainRouter.use('/buy', mercadoPagoRouter);

module.exports = mainRouter;
