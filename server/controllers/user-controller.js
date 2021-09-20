const bcrypt = require("bcrypt");

const ApiError = require("../error/api-error");
const { Basket, User } = require("../models");
const { generateJwt } = require("../utils/user");

class UserController {
  async registration(request, response, next) {
    const { email, password, role } = request.body;

    if (!email || !password) return next(ApiError.badRequest("Отсутствует email или пароль!"));

    const candidate = await User.findOne({
      where: {
        email
      }
    });

    // Если уже существует пользователь с таким email
    if (candidate) return next(ApiError.badRequest("Пользователь с таким email уже зарегистрирован!"));

    // Второй параметр - сколько раз хэшировать. Слишком много не нужно
    const hashPassword = await bcrypt.hash(password, 5);

    const user = await User.create({
      email,
      role,
      password: hashPassword
    });

    const basket = Basket.create({ userId: user.id });

    const token = generateJwt(user);

    return response.json({ token });
  }

  async login(request, response) {
    
  }

  async check(request, response, next) {
    const { id } = request.query;

    if (!id) {
      return next(ApiError.badRequest("Не задан ID"));
    }

    response.json(id);
  }
}

module.exports = new UserController();