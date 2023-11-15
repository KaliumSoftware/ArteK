import { Router } from 'express';
import { handlerGetPaintbrush } from '../../handlers/paintbrushHandlers/handlerGetPaintbrush';
import { handlerPostPaintbrush } from '../../handlers/paintbrushHandlers/handlerPostPaintbrush';
import { handlerDeletePaintbrush } from '../../handlers/paintbrushHandlers/handlerDeletePaintbrush';
import { handlerPutPaintbrush } from '../../handlers/paintbrushHandlers/handlerPutPaintbrush';

const paintbrushRouter = Router();

paintbrushRouter.get('/', handlerGetPaintbrush);

paintbrushRouter.post('/', handlerPostPaintbrush);

paintbrushRouter.put('/:id', handlerPutPaintbrush);

paintbrushRouter.delete('/:id', handlerDeletePaintbrush);

module.exports = paintbrushRouter;
