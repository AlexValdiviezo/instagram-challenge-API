const { Router } = require('express');
const router = Router();
const { publicGet, 
        publicPost,
        publicPut,
        publicDelete
    } = require('../controllers/public-items');
const { isPostValid } = require('../middlewares/isPostValid-middleware');
const { isPutValid } = require('../middlewares/isPutValid-middleware');

const { isUrlImg } = require('../middlewares/isUrlImg-middleware');
const { isValidID } = require('../middlewares/isValidID-middleware');
const { isValidText } = require('../middlewares/isValidText-middleware');

router.get('/',publicGet);

router.post('/', [isPostValid ,isUrlImg, isValidText], publicPost);

router.put('/', [isPutValid, isValidID], publicPut);

router.delete('/', [isValidID], publicDelete);

module.exports = router;