const jwt = require("jsonwebtoken");

module.exports = function(role) {
  return function (request, response, next) {
    if (request.method === "OPTIONS") {
      next();
    }
  
    try {
      // authorization: "Bearer значение_токена"
      const [ , token] = request.headers.authorization.split(" ");
  
      if (!token) {
        return response.status(401).json({
          message: "Не авторизован"
        });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      if (decoded.role !== role) {
        return response.status(403).json({
          message: "Нет доступа"
        });
      }
      request.user = decoded;
      next();
    } catch (error) {
      console.error(error);
      response.status(401).json({
        message: "Не авторизован"
      });
    }
  };
}