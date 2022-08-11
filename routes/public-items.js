const { Router } = require('express');
const router = Router();

const { publicGet, 
    publicPost} = require('../controllers/public-items');

router.get('/', publicGet);

router.post('/', publicPost);

module.exports = router;