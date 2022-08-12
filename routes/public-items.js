const { Router } = require('express');
const router = Router();

const { publicGet, 
        publicPost,
        publicPut,
        publicDelete
    } = require('../controllers/public-items');

router.get('/', publicGet);

router.post('/', publicPost);

router.put('/', publicPut);

router.delete('/', publicDelete);

module.exports = router;