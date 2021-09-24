const createError = require("http-errors");

// first go to this error the it's give to 2nd error handler which is create default error.
const notFoundHandler = (req, res, next) => {
  next(createError(404, "your requested content was not found"));
};

// 2nd create default error.
const errorHandler = (err, req, res, next) => {
  res.locals.error =
    process.env.NODE_ENV === "development"
      ? err
      : { message: err.message, status: err.status, stack: err.stack };

  res.status(err.status || 500);

  if (res.locals.html) {
    res.render("error", {
      title: "Error Pages",
    });
  } else {
    res.json(res.locals.error);
  }
};

module.exports = { notFoundHandler, errorHandler };
