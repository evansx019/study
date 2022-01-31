const mongoose = require('mongoose');

    const URL = 'mongodb://localhost:27017/{mern-task}'

    mongoose.connect(URL)
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));


    module.exports = mongoose;