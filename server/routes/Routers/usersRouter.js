import { Router } from 'express';
import { handlerGetUser } from '../../handlers/userHandlers/handlerGetUser';
import { handlerPostUser } from '../../handlers/userHandlers/handlerPostUser';
import { handlerDeleteUser } from '../../handlers/userHandlers/handlerDeleteUser';
import { handlerPutUser } from '../../handlers/userHandlers/handlerPutUser';

const userRouter = Router();

userRouter.get('/', handlerGetUser);

userRouter.post('/', handlerPostUser);

userRouter.put('/:id', handlerPutUser);

userRouter.delete('/:id', handlerDeleteUser);

module.exports = userRouter;
