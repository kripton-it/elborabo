const path = require("path");

const { v4 } = require("uuid");

const ApiError = require("../error/api-error");

const { Device } = require("../models");

const { getDevices } = require("../utils/device");

class DeviceController {
  async create(request, response, next) {
    try {
      const { name, price, brandId, typeId, info } = request.body;
      const { img } = request.files;
      
      const filename = `${v4()}.jpg`;
      const imgPath = path.resolve(__dirname, "..", "static", filename);

      img.mv(imgPath);

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: filename
      });

      return response.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(request, response) {
    const { brandId, typeId, limit = 9, page = 1 } = request.query;

    const offset = limit * (page - 1);

    const devices = await getDevices({ brandId, typeId, limit, offset });

    return response.json(devices);
  }

  async getOneById(request, response) {
    
  }
}

module.exports = new DeviceController();