const { Router } = require('express');
const handlerGetRoller = require('../../handlers/rollerHandlers/handlerGetRoller');
const handlerPostRoller = require('../../handlers/rollerHandlers/handlerPostRoller');
const handlerDeleteRoller = require('../../handlers/rollerHandlers/handlerDeleteRoller');
const handlerPutRoller = require('../../handlers/rollerHandlers/handlerPutRoller');

const rollerRouter = Router();

rollerRouter.get('/', handlerGetRoller);

rollerRouter.post('/', handlerPostRoller);

rollerRouter.put('/:id', handlerPutRoller);

rollerRouter.delete('/:id', handlerDeleteRoller);

module.exports = rollerRouter;
