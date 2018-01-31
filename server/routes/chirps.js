const express = require('express');
const chirpStore = require('../chirpstore');
let router = express.Router();

router.get('/:id?', (req, res) => {
    if(req.params.id) {
        res.json(chirpStore.GetChirp(request.params.id));
    } else {
        res.send(chirpStore.GetChirps());
    }
    
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.send('Thank you for your submission!');
})

module.exports = router;