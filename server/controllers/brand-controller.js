const { Brand } = require("../models");

class BrandController {
  async create(request, response) {
    const { name } = request.body;

    const brand = await Brand.create({ name });

    return response.json(brand);
  }

  async getAll(request, response) {
    const types = await Brand.findAll();
    return response.json(types);
  }
}

module.exports = new BrandController();