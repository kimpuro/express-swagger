var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 테스트용 API */
/**
 * @swagger
 * /test:
 *   get:
 *     summary: 테스트용 API
 *     description: 테스트용 API입니다.
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "테스트 성공"
 */
router.get('/test', function(req, res, next) {
  res.json({ message: '테스트 성공' });
});

module.exports = router;
