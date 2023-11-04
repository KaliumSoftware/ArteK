import { putRoller } from '../../controllers/rollerControllers/putRoller';

const handlerPutRoller = async (req, res) => {
  try {
    const { price, model, color, size, description } = req.body;
    const { id } = req.params;
    let image;

    if (!price && !model && !color && !size && !description && !image) {
      throw new Error('Faltan datos');
    } /* else if (req.files?.image) {
      const result = await uploadServiceImage(req.files.image.tempFilePath);
      image = {
        public_id: result.public_id,
        secure_url: result.secure_url
      };
      await fs.unlink(req.files.image.tempFilePath);
    } */ else {
      const updatedRoller = await putRoller(
        id,
        price,
        model,
        color,
        size,
        description,
        image
      );

      if (updatedRoller.message === 'El rodillo no existe') {
        throw new Error('No existe ese rodillo');
      } else {
        res.status(200).json(updatedRoller);
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutRoller;
