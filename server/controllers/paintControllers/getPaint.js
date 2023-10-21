import { Paint } from '../../models/paint';

const getPaint = async () => {
  try {
    const paints = await Paint.find({ isActive: true }).select(
      '-modelLower -colorLower -amountLower'
    );
    if (paints.length === 0) {
      throw new Error('No hay Pinturas');
    } else {
      return paints;
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = getPaint;
