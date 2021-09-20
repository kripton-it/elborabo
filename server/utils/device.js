const { Device } = require("../models");

const getDevices = async ({ brandId, typeId, limit, offset }) => {
  // если заданы оба - фильтруем по brandId и typeId
  if (brandId && typeId) return Device.findAndCountAll({
    where: {
      brandId,
      typeId
    },
    limit,
    offset
  });
  // если задан только brandId - фильтруем по заданному brandId
  if (brandId && !typeId) return Device.findAndCountAll({
    where: {
      brandId
    },
    limit,
    offset
  });
  // если задан только typeId - фильтруем по заданному typeId
  if (!brandId && typeId) return Device.findAndCountAll({
    where: {
      typeId
    },
    limit,
    offset
  });
  // иначе возвращаем всё
  return Device.findAndCountAll({
    limit,
    offset
  });
};

module.exports = {
  getDevices
};