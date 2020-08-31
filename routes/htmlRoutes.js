const router = require('express').Router();
const html = require('../controllers/html-controller');

router.route('').get(html.returnHomePage);

router.route('/account').get(html.returnAccountPage);

module.exports = router;
