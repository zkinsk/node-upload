module.exports = {
  returnHomePage: function (req, res, next) {
    res.render('home', {});
  },
  returnAccountPage: function (req, res) {
    res.render('account', {});
  },
};
