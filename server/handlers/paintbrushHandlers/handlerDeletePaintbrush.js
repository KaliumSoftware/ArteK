import { deletePaintbrush } from '../../controllers/paintbrushControllers/deletePaintbrush';

const handlerDeletePaintbrush = async (id) => {
  try {
    const existingPaintbrush = await deletePaintbrush.findOne({ _id: id });
  } catch (error) {
    return error.message;
  }
};

module.exports = handlerDeletePaintbrush;
