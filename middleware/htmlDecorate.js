const htmlDecorate = (page_title) => {
  return {
    title: (req, res, next) => {
      res.locals.title = page_title;
      res.locals.html = true;
      next();
    },
  };
};

module.exports = { htmlDecorate };
