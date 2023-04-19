const router = require('express').Router();

const userRoutes = require('./user-routes');
const inputRoutes = require('./input-routes')

router.use('/users', userRoutes);
router.use('/addSong', inputRoutes)

module.exports = router;
