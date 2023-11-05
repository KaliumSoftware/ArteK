import { postRoller } from '../../controllers/rollerControllers';

const handlerPostRoller = async (req, res) => {
  try {
    const { price, model, color, size, description } = req.body;

    let image;

    if (!price || !model || !color || !size || !description || !image) {
      throw new Error('Faltan datos');
    }
    /* if (req.files?.image) {
            const result = await uploadServiceImage(
                req.files.image.tempFilePath
            )
            image = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            }
            await fs.unlink(req.files.image.tempFilePath)
        } else {
            image = {
                public_id: 'AUXIE App/Services Images/nisrdx8zhooa79xgvlpf',
                secure_url:
                    'https://res.cloudinary.com/dvj387b1u/image/upload/v1691965757/AUXIE%20App/Services%20Images/nisrdx8zhooa79xgvlpf.png',
            }
        } */

    const newRoller = await postRoller(
      price,
      model,
      color,
      size,
      description,
      image
    );
    if (newRoller.message === 'Rodillo repetido') {
      throw new Error('Ya existe ese rodillo');
    } else {
      res.status(200).json(newRoller);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = handlerPostRoller;
