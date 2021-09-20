const { Type } = require("../models");
const ApiError = require("../error/api-error");

class TypeController {
  async create(request, response) {
    const { name } = request.body;

    const type = await Type.create({ name });

    return response.json(type);
  }

  async getAll(request, response) {
    const types = await Type.findAll();
    return response.json(types);
  }
}

module.exports = new TypeController();