const express = require('express');
const {protect} = require('../middleware/authMiddleware');
const authorizedRoles = require('../middleware/roleMiddleware');
const router = express.Router();

// Only admin can access this router
router.get('/organiser', protect,authorizedRoles("organiser"),(req,res)=>{
    res.json({message : "welcome organiser"});
});

// Both admin and manager can access this router
router.get('/volunteer',protect,authorizedRoles("organiser", "volunteer"), (req,res)=>{
    res.json({message : "welcome volunteer"});
});

// All can access this router

router.get('/participant',protect,authorizedRoles("organiser", "volunteer", "participant"),(req,res)=>{
    res.json({message : "Welcome participant"});
});

module.exports = router;