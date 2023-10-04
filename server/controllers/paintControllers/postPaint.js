const Paint = require('../../models/paint');

const postService = async (price, model, color, amount, description, image) => {
  try {
    const colorLower = color.toLowerCase();
    const modelLower = model.toLowerCase();

    let existingModel = await Paint.findOne({
      modelLower
    });

    let existingColor = await Paint.findOne({
      colorLower,
      amount
    });

    if (existingModel) {
      if (existingModel.isActive) {
        throw new Error('Pintura repetida');
      } else {
        existingService.isActive = true;
        await existingService.save();
        return 'El servicio fue creado';
      }
    } else {
      await Service.create({
        category,
        categoryLower,
        name,
        nameLower,
        image
      });
      return {
        message: 'El servicio fue creado'
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = postService;
