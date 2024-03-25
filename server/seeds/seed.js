const mongoose = require('mongoose');
const db = require('../config/connection');
const { Review } = require('../models');

db.once('open', async () => {
    try {
        await Review.deleteMany({});
        console.log('seeded!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
});