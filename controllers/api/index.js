const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postsRoutes = require('./post-routes');
const commentsRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postsRoutes);
router.use('/comments', commentsRoutes);


module.exports = router;
