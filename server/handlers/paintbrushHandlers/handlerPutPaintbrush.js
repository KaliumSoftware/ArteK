import { putPaintbrush } from '../../controllers/paintbrushControllers/putPaintbrush';

const handlerPutPaintbrush = async (req, res) => {
  try {
    const { price, model, color, size, description } = req.body;
    const { id } = req.params;
    let image;

    if (!price && !model && !color && !size && !description) {
      throw new Error('Faltan datos');
    } /* else if (req.files?.image) {
      const result = await uploadServiceImage(req.files.image.tempFilePath);
      image = {
        public_id: result.public_id,
        secure_url: result.secure_url
      };
      await fs.unlink(req.files.image.tempFilePath);
    } */ else {
      const updatedPaintbrush = await putPaintbrush(
        id,
        price,
        model,
        color,
        size,
        description
      );

      if (updatedPaintbrush.message === 'El cepillo no existe') {
        throw new Error('No existe ese cepillo');
      } else {
        res.status(200).json(updatedPaintbrush);
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutPaintbrush;
