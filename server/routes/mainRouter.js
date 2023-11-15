import { Router } from 'express';
import paintRouter from './routers/paintsRouter';
import paintbrushRouter from './routers/paintbrushsRouter';
import rollerRouter from './routers/rollersRouter';
import userRouter from './routers/usersRouter';

const mainRouter = Router();

mainRouter.use('/paint', paintRouter);
mainRouter.use('/paintbrush', paintbrushRouter);
mainRouter.use('/roller', rollerRouter);
mainRouter.use('/user', userRouter);

module.exports = mainRouter;
