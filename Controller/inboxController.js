const inboxController = (req, res) => {
  res.render("inbox", {
    title: "Inbox - Chat Appliction",
  });
};

module.exports = { inboxController };
