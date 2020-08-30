const router = require('express').Router();
const html = require('../controllers/html-controller');

router.route('').get(html.returnHomePage);

module.exports = router;
