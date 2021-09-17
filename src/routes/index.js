const { Router } = require('express');
const router = Router();

const { renderHome,
        renderGames,
        renderActions,
        renderEvents 
    } = require('../controllers/indexController');

router.get('/', renderHome);
router.get('/juegos', renderGames);
router.get('/acciones', renderActions);
router.get('/eventos', renderEvents);

module.exports = router;