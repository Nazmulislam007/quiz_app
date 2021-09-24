const router = require("express").Router();

const { inboxController } = require("../Controller/inboxController");
const { loginController } = require("../Controller/loginController");
const { userController } = require("../Controller/usersController");
const { htmlDecorate } = require("../middleware/htmlDecorate");

router.get("/", htmlDecorate().title, loginController);
router.get("/users", htmlDecorate().title, userController);
router.get("/inbox", htmlDecorate().title, inboxController);

module.exports = router;
