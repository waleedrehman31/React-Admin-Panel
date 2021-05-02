module.exports = (req, res, next) => {
  res.header("Content-Range", "posts 0-20/0");
  next();
};
