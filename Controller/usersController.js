const userController = (req, res) => {
  res.render("users", {
    title: "User - Chat Application",
  });
};

module.exports = { userController };
