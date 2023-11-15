import { Router } from 'express';
import { handlerGetRoller } from '../../handlers/rollerHandlers/handlerGetRoller';
import { handlerPostRoller } from '../../handlers/rollerHandlers/handlerPostRoller';
import { handlerDeleteRoller } from '../../handlers/rollerHandlers/handlerDeleteRoller';
import { handlerPutRoller } from '../../handlers/rollerHandlers/handlerPutRoller';

const rollerRouter = Router();

rollerRouter.get('/', handlerGetRoller);

rollerRouter.post('/', handlerPostRoller);

rollerRouter.put('/:id', handlerPutRoller);

rollerRouter.delete('/:id', handlerDeleteRoller);

module.exports = rollerRouter;
