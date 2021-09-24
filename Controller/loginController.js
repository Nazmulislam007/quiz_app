const loginController = (req, res) => {
  res.render("index", {
    title: "Login - Chat Application",
  });
};

module.exports = { loginController };
