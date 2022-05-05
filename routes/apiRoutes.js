const router = require('express').Router();
const s3 = require('../controllers/s3-controller');

router.route('/sign-s3').get(s3.signedS3);
router.route('/save-details').post(s3.savedDetails);

router.route('/test').get((req, res) => {
  res.send('Success!');
});

module.exports = router;
