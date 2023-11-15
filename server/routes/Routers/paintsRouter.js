import { Router } from 'express';
import { handlerGetPaint } from '../../handlers/paintHandlers/handlerGetPaint';
import { handlerPostPaint } from '../../handlers/paintHandlers/handlerPostPaint';
import { handlerDeletePaint } from '../../handlers/paintHandlers/handlerDeletePaint';
import { handlerPutPaint } from '../../handlers/paintHandlers/handlerPutPaint';

const paintRouter = Router();

paintRouter.get('/', handlerGetPaint);

paintRouter.post('/', handlerPostPaint);

paintRouter.put('/:id', handlerPutPaint);

paintRouter.delete('/:id', handlerDeletePaint);

module.exports = paintRouter;
