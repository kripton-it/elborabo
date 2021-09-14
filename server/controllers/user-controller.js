class UserController {
  async registration(request, response) {

  }

  async login(request, response) {
    
  }

  async check(request, response) {
    return response.json({
      message: "Working"
    });
  }
}

module.exports = new UserController();