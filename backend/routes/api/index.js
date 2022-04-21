const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js');
const commentsRouter = require('./comments.js')
// const bookingsRouter = require('./bookings.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/spots', spotsRouter);
router.use('/comments', commentsRouter);
// router.use('/bookings', bookingsRouter);

//POST test route
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
